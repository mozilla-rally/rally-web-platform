/**
 * Rally Authentication Module
 *
 * This module exposes helpful functionality for authenticating and authorizing actions for the Rally Web Platform.
 * It is currently based on Firebase, but tries to abstract that away so callers do not need to worry about exactly what provider is used.
 *
 * NOTE - Firebase does not work properly in extensions when imported via the npm module.
 * This expects the background HTML page to already be synchronously loading this script, before loading JS.
 */

/* global firebase */
export function setupAuth() {
    firebase.initializeApp({
        apiKey: "AIzaSyC9_JzEBLvWxTQGCSCfq2ij73TjANWQ4l0",
        authDomain: "moz-fx-dev-rhelmer-rallyauth.firebaseapp.com",
        projectId: "moz-fx-dev-rhelmer-rallyauth",
        storageBucket: "moz-fx-dev-rhelmer-rallyauth.appspot.com",
        messagingSenderId: "872283440703",
        appId: "1:872283440703:web:e19c8f1872205d90421a8a"
    });
    console.debug("firebase init:", firebase);
}

export async function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const credential = result.credential;
    const token = credential.accessToken;
    const user = result.user;
    console.debug("auth result:", result, token);

    const storageRef = firebase.storage().ref();
    console.debug("storageRef:", storageRef);
    storageRef.child(`/users/${user.uid}/test.txt`).getDownloadURL()
        .then(async (url) => {
            console.debug("got download URL:", url);
            const result = await fetch(url);
            const text = await result.text();
            console.debug("result:", text);
        });

    return token;
}

export async function emailSignIn({ email, password }) {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    // Signed in
    const user = result.user;
    console.debug("logged in as:", user.uid);

    const storageRef = firebase.storage().ref();
    console.debug("storageRef:", storageRef);
    storageRef.child(`/users/${user.uid}/test.txt`).getDownloadURL()
        .then(async (url) => {
            console.debug("got download URL:", url);
            const result = await fetch(url);
            const text = await result.text();
            console.debug("result:", text);
        });

}
