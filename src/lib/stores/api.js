import CONFIG, { demoConfig } from "../../../firebase.config"
import { produce } from "immer/dist/immer.esm";

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification
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
  userStudies: undefined,
  onboarded: false
};

let userRef;
let firebaseUid;

function initializeUserDocument(uid) {
  userRef = doc(db, "users", uid);
  firebaseUid = uid;
}

function getUserDocument() {
  return getDoc(userRef);
}

function updateUserDocument(updates, merge = true) {
  return updateDoc(userRef, updates, { merge });
}

function updateUserStudiesCollection(studyID, updates, merge = true) {
  const ref = doc(db, "users", firebaseUid, "studies", studyID);
  setDoc(ref, updates.userStudies[studyID], { merge });
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

async function listenForUserStudiesChanges(user) {
  // get user doc and then call onSnapshot.
  onSnapshot(doc(db, "users", user.uid, "studies", "exampleStudy1"), (doc) => {
    const nextState = doc.data();
    _updateLocalState((draft) => {
      draft.userStudies = { "exampleStudy1": nextState };
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
      listenForUserStudiesChanges(authenticatedUser);

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

    // Allow user to select which Google account to use.
    provider.setCustomParameters({ prompt: "select_account" });

    let userCredential = undefined;
    try {
      userCredential = await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("there was an error", err);
    }
    // create a new user.
    initializeUserDocument(userCredential.user.uid);
    listenForUserChanges(userCredential.user);
  },

  async loginWithEmailAndPassword(email, password) {
    let userCredential;
    try {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("there was an error", err);
      return;
    }
    if (userCredential.user.emailVerified) {
      initializeUserDocument(userCredential.user.uid);
      listenForUserChanges(userCredential.user);
    } else {
      console.warn("Email account not verified, sending verification email");
      await sendEmailVerification(userCredential.user);
    }
  },
  async signupWithEmailAndPassword(email, password) {
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("there was an error", err);
      return;
    }
    console.info("Sending verification email");
    await sendEmailVerification(userCredential.user);
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
    const userStudies = { ...(__STATE__.userStudies || {}) };
    if (!(studyID in userStudies)) { userStudies[studyID] = {}; }
    userStudies[studyID] = { ...userStudies[studyID] };
    userStudies[studyID].enrolled = enroll;
    userStudies[studyID].enrolled = enroll;
    if (enroll) {
      userStudies[studyID].joinedOn = new Date();
    }
    console.debug(userStudies);
    updateUserStudiesCollection(studyID, { userStudies });
    return true;
  },

  async updatePlatformEnrollment(enrolled) {
    return updateUserDocument({ enrolled });
  },

  async updateDemographicSurvey(data) {
    return updateUserDocument({ demographicsData: data });
  },

  onAuthChange(callback) {
    _authChangeCallbacks.push(callback);
  },

  onNextState(callback) {
    _stateChangeCallbacks.push(callback);
  }
};