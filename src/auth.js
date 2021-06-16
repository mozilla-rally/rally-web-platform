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

import CONFIG from "../firebase.config";
import { produce } from "immer/dist/immer.cjs.production.min";

let state = {
    user: undefined,
};

const app = firebase.initializeApp(CONFIG)

const auth = firebase.auth();
const db = firebase.firestore(app);

const user = {
    userRef: undefined,
    initialize(uid, { createUser = false } = {}) {
        this.userRef = db.collection("users").doc(uid);
        if (createUser) {
            this.update({ uid, createdOn: new Date() });
        }
    },
    get() {
        return this.userRef.get();
    },
    update(updates, merge = true) {
        return this.userRef.set(updates, { merge });
    }
}

async function getStudies() {
    return db.collection("studies").get();
}

const _stateChangeCallbacks = [];

function _updateLocalState(callback) {
    state = produce(state, callback);
    _stateChangeCallbacks.forEach(callback => callback(state));
}

function listenForUserChanges(user) {
    db.collection("users").doc(user.uid)
        .onSnapshot(doc => {
            const nextState = doc.data();
            _updateLocalState((draft) => {
                draft.user = nextState;
            });
        })
}

function listenForStudyChanges() {
    // get initial study payload.
    db.collection("studies").onSnapshot((querySnapshot) => {
        const studies = [];
        querySnapshot.forEach(function (doc) {
            studies.push(doc.data());
        });
        _updateLocalState((draft) => {
            draft.studies = studies;
        });
    });
}

let USER_ID;

export default {


    async loginWithCredential(idToken) {
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken)
        return firebase.auth().signInWithCredential(credential);
    },
    async loginWithGoogle() {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        let userCredential = undefined;
        try {
            userCredential = await firebase.auth().signInWithPopup(googleAuthProvider);
        } catch (err) {
            console.error("there was an error", err);
        }
        // create a new user.
        user.initialize(userCredential.user.uid, { createUser: true });
        listenForUserChanges(userCredential.user);
    },
    async loginWithEmailAndPassword(email, password) {
        let userCredential;
        try {
            userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (err) {
            console.error("there was an error", err);
        }
        if (userCredential) {
            user.initialize(userCredential.user.uid);
            listenForUserChanges(userCredential.user)
        } else {
            console.error("Unable to log in with email and password");
        }

    },
    async signupWithEmailAndPassword(email, password) {
        let userCredential;
        try {
            userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (err) {
            console.error("there was an error", err);
        }
        if (userCredential) {
            user.initialize(userCredential.user.uid, { createUser: true });
            listenForUserChanges(userCredential.user);
        } else {
            console.error("Unable to sign up with email and password");
        }
    },

    async initialize() {
        const initialState = {};
        let userState;

        // check for an authenticated user.
        const authenticatedUser = await new Promise((resolve) => {
            auth.onAuthStateChanged(resolve);
        });

        // if the user is authenticated, then they must have a
        // document in firestore. Retrieve it and listen for any changes
        // to the firestore doc.
        if (authenticatedUser !== null) {
            USER_ID = authenticatedUser.uid;
            user.initialize(USER_ID);
            initialState._isLoggedIn = true;
            userState = await user.get(authenticatedUser.uid);
            userState = userState.data();
            listenForUserChanges(authenticatedUser);
        } else {
            initialState._isLoggedIn = false;
        }

        // fetch the initial studies.
        let initialStudyState = await getStudies();
        initialStudyState = initialStudyState.docs.map(doc => doc.data());
        listenForStudyChanges();

        initialState._initialized = true;

        if (userState) {
            initialState.user = userState;
        }

        if (initialStudyState) {
            initialState.studies = initialStudyState;
        }

        return initialState;

    },

    async updateStudyEnrollment(studyID, enroll) {
        const enrolledStudies = { ...(state.user.enrolledStudies || {}) };
        if (!(studyID in enrolledStudies)) { enrolledStudies[studyID] = {}; }
        enrolledStudies[studyID] = { ...enrolledStudies[studyID] };
        enrolledStudies[studyID].enrolled = enroll;
        if (enroll) {
            enrolledStudies[studyID].joinedOn = new Date();
        }
        user.userRef.update({ enrolledStudies });
        return true;
    },

    async updatePlatformEnrollment(enrolled) {
        user.update({ enrolled });
    },

    async updateDemographicSurvey(data) {
        user.userRef.update({ demographicsData: data });
    },

    async setFirstRunCompletion(firstRunCompleted) {
        return true;
    },

    onNextState(callback) {
        _stateChangeCallbacks.push(callback);
    }
};
