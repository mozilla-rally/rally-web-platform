import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

let initialized = false;

let app;
let auth;
let db;

export default function initializeFirebase(config, callback) {
  if (!initialized) {
    initialized = true;
    getApps().length === 0 ? app = initializeApp(config) : getApp();

    auth = getAuth(app);
    db = getFirestore(app);

    // @ts-ignore
    if (__EMULATOR_MODE__) {
      connectAuthEmulator(auth, "http://localhost:9099");
      connectFirestoreEmulator(db, "localhost", 8080);
    }
    if (callback) {
      callback({ app, auth, db });
    }
  }
  return { app, auth, db };
}
