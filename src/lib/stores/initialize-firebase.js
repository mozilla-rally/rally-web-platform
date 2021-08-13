import { initializeApp } from 'firebase/app';
import { getAuth, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
  } from "firebase/auth";
  import { getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    getDocs, 
    collection, 
    onSnapshot } from "firebase/firestore";

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