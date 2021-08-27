import admin from "firebase-admin";
import { setDoc, collection } from "firebase/firestore";

import serviceAccount from "../serviceAccount.json";
import studies from "../data/studies.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://rally-web-spike.firebaseio.com"
  databaseURL: "http://localhost:9099"
});


function addStudiesToFirebase() {
  admin.firestore()
    .doc(path.join('/'))
    .set(data)
    .then(() => console.log(`Document ${path.join('/')} uploaded.`))
    .catch(() => console.error(`Could not write document ${path.join('/')}.`));
}
studies.forEach(study => {
  setDoc(collection(db, "studies", study.addonId), { merge: true });
});
return studies;
}

addStudiesToFirebase();

