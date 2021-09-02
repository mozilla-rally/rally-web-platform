import admin from "firebase-admin";

import { studies } from "../data/studies";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

function addStudyToFirebase(index, study) {
  admin
    .firestore()
    .collection("studies")
    .doc(index)
    .set(study, { merge: true })
}

for (const [index, study] of Object.entries(studies)) {
  console.info(`Loading study ${index} into Firestore`);
  addStudyToFirebase(index, study);
}

