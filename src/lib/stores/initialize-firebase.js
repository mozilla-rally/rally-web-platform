import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let initialized = false;

let app;
let auth;
let db;

export default function initializeFirebase(config, callback) {
    if (!initialized) {
        initialized = true;
        app = initializeApp(config);
        auth = getAuth(app);
        db = getFirestore(app);
        if (callback) {
            callback({ app, auth, db });
        }
    }
    return { app, auth, db };
}