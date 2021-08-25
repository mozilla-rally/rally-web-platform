import CONFIG, { demoConfig } from "../../../firebase.config"
import { produce } from "immer/dist/immer.esm";

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  collection,
  onSnapshot
} from "firebase/firestore";

import initializeFirebase from "./initialize-firebase";

let auth;
let db;

async function initializeFirestoreAPIs() {
  const fb = initializeFirebase(CONFIG, (({ auth }) => {
    onAuthStateChanged(auth, change => {
      _authChangeCallbacks.forEach(callback => callback(change));
    });
  }));
  auth = fb.auth;
  db = fb.db;
}

// NOTE: this object is not to be touched.
let __STATE__ = {
  user: undefined,
  onboarded: false
};

let userRef;

function initializeUserDocument(uid, { createUser = false } = {}) {
  userRef = doc(db, "users", uid);
  // create the user document.
  if (createUser) {
    setDoc(userRef, { uid, createdOn: new Date() }, { merge: true });
  }
}

function getUserDocument() {
  return getDoc(userRef);
}

function updateUserDocument(updates, merge = true) {
  return updateDoc(userRef, updates, { merge });
}

async function getStudies() {
  const snapshot = await getDocs(collection(db, "studies"));
  return snapshot.docs.map(doc => doc.data());
}

const _stateChangeCallbacks = [];
const _authChangeCallbacks = [];

function _updateLocalState(callback) {
  __STATE__ = produce(__STATE__, callback);
  _stateChangeCallbacks.forEach(callback => callback(__STATE__));
}

async function listenForUserChanges(user) {
  // get user doc and then call onSnapshot.
  onSnapshot(doc(db, "users", user.uid), (doc) => {
    const nextState = doc.data();
    _updateLocalState((draft) => {
      draft.user = nextState;
    });
  });
}

function listenForStudyChanges() {
  onSnapshot(collection(db, "studies"), (querySnapshot) => {
    const studies = [];
    querySnapshot.forEach(function (doc) {
      studies.push(doc.data());
    });
    _updateLocalState((draft) => {
      draft.studies = studies;
    });
  })
}

export default {
  async initialize(browser = true) {
    if (browser) {
      initializeFirestoreAPIs();
    } else {
      return;
    }

    const initialState = {};
    let userState;

    // check for an authenticated user.
    const authenticatedUser = await new Promise((resolve) => {
      onAuthStateChanged(auth, (v) => {
        resolve(v);
      });
    });
    // if the user is authenticated, then they must have a
    // document in firestore. Retrieve it and listen for any changes
    // to the firestore doc.

    if (authenticatedUser !== null) {
      initializeUserDocument(authenticatedUser.uid);
      userState = await getUserDocument();
      userState = userState.data();
      listenForUserChanges(authenticatedUser);
      await this.notifyStudies(authenticatedUser);
    }

    // fetch the initial studies.
    let initialStudyState = await getStudies();

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

  async onAuthStateChanged(callback) {
    initializeFirestoreAPIs();
    onAuthStateChanged(auth, callback);
  },

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    let userCredential = undefined;
    try {
      userCredential = await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("there was an error", err);
    }
    // create a new user.
    initializeUserDocument(userCredential.user.uid, { createUser: true });
    listenForUserChanges(userCredential.user);
  },

  async loginWithEmailAndPassword(email, password) {
    let userCredential;
    try {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("there was an error", err);
    }
    if (userCredential) {
      initializeUserDocument(userCredential.user.uid);
      listenForUserChanges(userCredential.user)
    } else {
      console.error("Unable to log in with email and password");
    }

  },
  async signupWithEmailAndPassword(email, password) {
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("there was an error", err);
    }
    if (userCredential) {
      initializeUserDocument(userCredential.user.uid, { createUser: true });
      listenForUserChanges(userCredential.user);
    } else {
      console.error("Unable to sign up with email and password");
    }
  },

  async notifyStudies(user) {
    // FIXME each study needs its own token. Need to iterate over any installed+consented studies and pass them their unique token.
    const studyName = "exampleStudy1";

    let functionsHost = "https://us-central1-rally-web-spike.cloudfunctions.net";
    // @ts-ignore
    if (__INTEGRATION_TEST_MODE__) {
      functionsHost = "http://localhost:5001/rally-web-spike/us-central1";
    }

    const idToken = await user.getIdToken();
    const result = await fetch(`${functionsHost}/rallytoken`,
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken, studyName })
      });
    const rallyToken = (await result.json()).rallyToken;
    window.dispatchEvent(
      new CustomEvent("complete-signup", { detail: { rallyToken } })
    );
  },

  async updateOnboardedStatus(onboarded) {
    return updateUserDocument({ onboarded });
  },

  async updateStudyEnrollment(studyID, enroll) {
    const enrolledStudies = { ...(__STATE__.user.enrolledStudies || {}) };
    if (!(studyID in enrolledStudies)) { enrolledStudies[studyID] = {}; }
    enrolledStudies[studyID] = { ...enrolledStudies[studyID] };
    enrolledStudies[studyID].enrolled = enroll;
    if (enroll) {
      enrolledStudies[studyID].joinedOn = new Date();
    }
    updateUserDocument({ enrolledStudies });
    return true;
  },

  async updatePlatformEnrollment(enrolled) {
    return updateUserDocument({ enrolled });
  },

  async updateDemographicSurvey(data) {
    updateDoc(userRef, { demographicsData: data });
    //updateUserDocument({ demographicsData: data });
    return true;
  },

  onAuthChange(callback) {
    _authChangeCallbacks.push(callback);
  },

  onNextState(callback) {
    _stateChangeCallbacks.push(callback);
  }
};