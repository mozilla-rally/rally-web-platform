import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { studies } from "../..//data/studies";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const rallytoken = functions.https.onRequest(
  async (request, response) => {
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
      response.set("Access-Control-Allow-Methods", "POST");
      response.set("Access-Control-Allow-Headers", "Bearer, Content-Type");
      response.status(204).send("");
    } else if (request.method === "POST") {
      functions.logger.info(
        `body type: ${typeof request.body}`,
        { payload: request.body }
      );

      try {
        let idToken; let studyName;
        if (typeof request.body === "string") {
          const body = JSON.parse(request.body);
          idToken = body.idToken;
          studyName = body.studyName;
        } else {
          idToken = request.body.idToken;
          studyName = request.body.studyName;
        }

        const rallyToken = await generateToken(idToken, studyName);
        functions.logger.info("OK");
        response.status(200).send({ rallyToken });
      } catch (ex) {
        functions.logger.error(ex);
        response.status(500).send(ex.message);
      }
    } else {
      response.status(500).send("Only POST and OPTIONS methods are allowed.");
    }
  }
);

/**
 * Takes a Firebase IDToken for a Rally user, and returns a Rally Token
 * for a restricted-access account (for use with studies).
 *
 * @param {string} idToken Firebase IDToken.
 * @param {string} studyName Rally study name.
 * @return {Promise<string>} rallyToken
 */
async function generateToken(idToken: string, studyName: string) {
  const decodedToken = await admin.auth().verifyIdToken(idToken);

  // Firebase will create this account if it does not exist,
  // when the token is first used to sign-in.
  const uid = `${studyName}:${decodedToken.uid}`;
  const rallyToken = await admin.auth().createCustomToken(
    uid, { firebaseUid: decodedToken.uid }
  );

  return rallyToken;
}

exports.addRallyUserToFirestore = functions.auth.user().onCreate(async (user) => {
  if (user.providerData.length == 0) {
    functions.logger.info("Extension users do not get dedicated documents.")
    return;
  }

  const extensionUserDoc = {}
  admin
    .firestore()
    .collection("extensionUsers")
    .doc(user.uid)
    .set(extensionUserDoc, { merge: true });

  const userDoc = {
    createdOn: new Date(),
    uid: user.uid, // FIXME seems redundant, do we really need this? It's already in the document name and a custom claim in the token.
  };
  admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set(userDoc, { merge: true });

  const studyDoc = {}
  admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection("studies")
    .doc("exampleStudy1")
    .set(studyDoc, { merge: true });

  return true;
});

/**
 *
 * @param {string} index The firestore key.
 * @param {object} study The study object.
 */
function addRallyStudyToFirestore(index: string,
  study: Record<string, unknown>) {
  admin
    .firestore()
    .collection("studies")
    .doc(index)
    .set(study, { merge: true });
}

export const loadFirestore = functions.https.onRequest(
  async (request, response) => {
    for (const [index, study] of Object.entries(studies)) {
      console.info(`Loading study ${index} into Firestore`);
      addRallyStudyToFirestore(index, study);
    }
    response.status(200).send();
  }
);

