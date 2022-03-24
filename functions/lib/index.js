"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFirestore = exports.deleteRallyUserImpl = exports.addRallyStudyToFirestoreImpl = exports.rallytoken = void 0;
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const uuid_1 = require("uuid");
const authentication_1 = require("./authentication");
const cors_1 = require("./cors");
const studies_1 = require("./studies");
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});
exports.rallytoken = functions.https.onRequest(async (request, response) => cors_1.useCors(request, response, async () => {
    await authentication_1.useAuthentication(request, response, async (decodedToken) => {
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
            }
            else {
                studyId = request.body.studyId;
            }
            const rallyToken = await generateToken(decodedToken, studyId);
            functions.logger.info("OK");
            response.status(200).send({ rallyToken });
        }
        catch (ex) {
            functions.logger.error(ex);
            response.status(500).send();
        }
    });
}));
/**
 * Takes a Firebase IDToken for a Rally user, and returns a Rally Token
 * for a restricted-access account (for use with studies).
 *
 * @param {string} decodedToken Decoded Firebase IDToken.
 * @param {string} studyId Rally study ID.
 * @return {Promise<string>} rallyToken
 */
async function generateToken(decodedToken, studyId) {
    // Firebase will create this account if it does not exist,
    // when the token is first used to sign-in.
    const uid = `${studyId}:${decodedToken.uid}`;
    const rallyToken = await admin
        .auth()
        .createCustomToken(uid, { firebaseUid: decodedToken.uid, studyId });
    return rallyToken;
}
exports.addRallyStudyToFirestoreImpl = async (user) => {
    functions.logger.info("addRallyUserToFirestore - onCreate fired for user", {
        user,
    });
    if (user.providerData.length == 0) {
        functions.logger.info("Extension users do not get user docs.");
        return false;
    }
    const newRallyId = uuid_1.v4();
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
    .onCreate(exports.addRallyStudyToFirestoreImpl);
exports.deleteRallyUserImpl = async function (user) {
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
exports.deleteRallyUser = functions.auth.user().onDelete(exports.deleteRallyUserImpl);
/**
 *
 * @param {string} studyKey The firestore key.
 * @param {object} study The study object.
 */
async function addRallyStudyToFirestore(studyKey, study) {
    await admin
        .firestore()
        .collection("studies")
        .doc(studyKey)
        .set(study, { merge: true });
}
exports.loadFirestore = functions.https.onRequest(async (request, response) => {
    for (const [studyKey, study] of Object.entries(studies_1.studies)) {
        console.info(`Loading study ${studyKey} into Firestore`);
        await addRallyStudyToFirestore(studyKey, study);
    }
    response.status(200).send();
});
//# sourceMappingURL=index.js.map