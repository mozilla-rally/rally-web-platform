import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { Change, EventContext } from "firebase-functions";
import { DocumentSnapshot } from "firebase-functions/v1/firestore";
import { v4 as uuidv4 } from "uuid";
import { useAuthentication } from "./authentication";
import { useCors } from "./cors";
import { studies } from "./studies";
import { isDeepStrictEqual } from "util";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const rallytoken = functions.https.onRequest(async (request, response) =>
  useCors(request, response, async () => {
    await useAuthentication(request, response, async (decodedToken) => {
      if (request.method !== "POST") {
        response.status(500).send("Only POST and OPTIONS methods are allowed.");
        return;
      }

      functions.logger.info(`body type: ${typeof request.body}`, {
        payload: request.body,
      });

      try {
        let studyId;
        if (typeof request.body === "string") {
          const body = JSON.parse(request.body);
          studyId = body.studyId;
        } else {
          studyId = request.body.studyId;
        }

        const rallyToken = await generateToken(decodedToken, studyId);
        functions.logger.info("OK");
        response.status(200).send({ rallyToken });
      } catch (ex) {
        functions.logger.error(ex);
        response.status(500).send();
      }
    });
  })
);

/**
 * Takes a Firebase IDToken for a Rally user, and returns a Rally Token
 * for a restricted-access account (for use with studies).
 *
 * @param {string} decodedToken Decoded Firebase IDToken.
 * @param {string} studyId Rally study ID.
 * @return {Promise<string>} rallyToken
 */
async function generateToken(
  decodedToken: admin.auth.DecodedIdToken,
  studyId: string
) {
  // Firebase will create this account if it does not exist,
  // when the token is first used to sign-in.
  const uid = `${studyId}:${decodedToken.uid}`;
  const rallyToken = await admin
    .auth()
    .createCustomToken(uid, { firebaseUid: decodedToken.uid, studyId });

  return rallyToken;
}

export const addRallyStudyToFirestoreImpl = async (
  user: admin.auth.UserRecord
): Promise<boolean> => {
  functions.logger.info("addRallyUserToFirestore - onCreate fired for user", {
    user,
  });
  if (user.providerData.length == 0) {
    functions.logger.info("Extension users do not get user docs.");
    return false;
  }

  const newRallyId = uuidv4();
  const extensionUserDoc = { rallyId: newRallyId };

  await admin
    .firestore()
    .collection("extensionUsers")
    .doc(user.uid)
    .set(extensionUserDoc, { merge: true });

  const userDoc = {
    createdOn: new Date(),
    uid: user.uid,
  };

  await admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set(userDoc, { merge: true });

  return true;
};

exports.addRallyUserToFirestore = functions.auth
  .user()
  .onCreate(addRallyStudyToFirestoreImpl);

export const deleteRallyUserImpl = async function (
  user: admin.auth.UserRecord
): Promise<boolean> {
  functions.logger.info("deleteRallyUser fired for user:", user);

  // Delete the extension user document.
  await admin.firestore().collection("extensionUsers").doc(user.uid).delete();

  // Delete the user studies subcollection.
  const collectionRef = admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection("studies");

  // There will be one document per study here, use batching in case it ever goes over the limit.
  // Work in batches of 5: https://firebase.google.com/docs/firestore/manage-data/transactions#security_rules_limits
  let batch = admin.firestore().batch();
  const userStudyDocs = await collectionRef.get();
  for (const [count, userStudyDoc] of userStudyDocs.docs.entries()) {
    batch.delete(userStudyDoc.ref);

    // Count is 0-based, so commit on multiples of 4.
    if (count % 4 === 0) {
      await batch.commit();
      batch = admin.firestore().batch();
    }
  }

  // Do a final commit in case we ended on a partial batch.
  await batch.commit();

  // Finally, delete the user document.
  await admin.firestore().collection("users").doc(user.uid).delete();

  return true;
};

exports.deleteRallyUser = functions.auth.user().onDelete(deleteRallyUserImpl);

/**
 *
 * @param {string} studyKey The firestore key.
 * @param {object} study The study object.
 */
async function addRallyStudyToFirestore(
  studyKey: string,
  study: Record<string, unknown>
) {
  await admin
    .firestore()
    .collection("studies")
    .doc(studyKey)
    .set(study, { merge: true });
}

export const loadFirestore = functions.https.onRequest(
  async (request, response) => {
    for (const [studyKey, study] of Object.entries(studies)) {
      console.info(`Loading study ${studyKey} into Firestore`);
      await addRallyStudyToFirestore(studyKey, study);
    }
    response.status(200).send();
  }
);

/*
 * Listen for changes to the User document
 * and initiate the appropriate Glean ping(s)
 */
export const handleUserChangesImpl = async function (
  change: Change<DocumentSnapshot>,
  context: EventContext
): Promise<Boolean> {
  const userID = context.params.userID;
  // Get an object with the current document value.
  // If the document does not exist, it has been deleted.
  const newUser = change.after.exists ? change.after.data() : null;

  // Get the old document, to compare the enrollment state.
  const oldUser = change.before.exists ? change.before.data() : null;

  if (!newUser || (oldUser && oldUser.enrolled === true && !newUser.enrolled)) {
    // User document has been deleted
    functions.logger.info(
      `Sending deletion and unenrollment pings for user ID ${userID}`
    );
    // TODO send Glean pings
    return true;
  }

  if ((!oldUser || !oldUser.enrolled) && newUser.enrolled === true) {
    // User just enrolled
    functions.logger.info(`Sending enrollment ping for user ID ${userID}`);
    // TODO send Glean ping
  }

  if (
    ((!oldUser || !oldUser.demographicsData) && newUser.demographicsData) ||
    (oldUser && oldUser.demographicsData && !newUser.demographicsData) ||
    (oldUser &&
      newUser &&
      !isDeepStrictEqual(oldUser.demographicsData, newUser.demographicsData))
  ) {
    // User updated demographicsData
    functions.logger.info(`Sending demographics ping for user ID ${userID}`);
    // TODO send Glean ping
  }

  return true;
};

exports.handleUserChanges = functions.firestore
  .document("users/{userID}")
  .onWrite(handleUserChangesImpl);

/*
 * Listen for changes to the Study document
 * and initiate the appropriate Glean ping(s)
 */
export const handleUserStudyChangesImpl = async function (
  change: Change<DocumentSnapshot>,
  context: EventContext
): Promise<Boolean> {
  const userID = context.params.userID;
  const studyID = context.params.studyID;
  // Get an object with the current document value.
  // If the document does not exist, it has been deleted.
  const newStudy = change.after.exists ? change.after.data() : null;

  // Get the old document, to compare the enrollment state.
  const oldStudy = change.before.exists ? change.before.data() : null;

  if (
    !newStudy ||
    (oldStudy && oldStudy.enrolled === true && !newStudy.enrolled)
  ) {
    // User unenrolled from study
    functions.logger.info(
      `Sending deletion and unenrollment pings for study with user ID ${userID} with study ID ${studyID}`
    );
    // TODO send Glean pings
    return true;
  }

  if ((!oldStudy || !oldStudy.enrolled) && newStudy.enrolled === true) {
    // User just enrolled in this study
    functions.logger.info(
      `Sending enrollment ping for study with user ID ${userID} with study ID ${studyID}`
    );
    // TODO send Glean ping
    return true;
  }

  return true;
};

exports.handleUserStudyChanges = functions.firestore
  .document("users/{userID}/studies/{studyID}")
  .onWrite(handleUserStudyChangesImpl);
