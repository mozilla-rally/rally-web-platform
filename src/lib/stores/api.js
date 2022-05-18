import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  updateEmail,
  signOut,
  signInWithRedirect,
  deleteUser,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { produce } from "immer/dist/immer.esm";
import initializeFirebase from "./initialize-firebase";

let auth;
let db;
let functionsHost;

async function initializeFirestoreAPIs() {
  const request = await fetch("/firebase.config.json");
  const firebaseConfig = await request.json();
  functionsHost = firebaseConfig.functionsHost;
  console.debug("configured functions host:", functionsHost);
  const fb = initializeFirebase(firebaseConfig, ({ auth }) => {
    onAuthStateChanged(auth, (change) => {
      _authChangeCallbacks.forEach((callback) => callback(change));
    });
  });
  auth = fb.auth;
  db = fb.db;
}

// NOTE: this object is not to be touched.
let __STATE__ = {
  user: undefined,
  userStudies: undefined,
  onboarded: false,
  connected: false,
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

async function updateUserStudiesCollection(studyId, updates, merge = true) {
  const userStudyref = doc(db, "users", firebaseUid, "studies", studyId);
  await setDoc(userStudyref, updates, { merge });
}

async function getStudies() {
  const snapshot = await getDocs(collection(db, "studies"));
  return snapshot.docs.map((doc) => doc.data());
}

const _stateChangeCallbacks = [];
const _authChangeCallbacks = [];
const _connectedChangeCallbacks = [];

function _updateLocalState(callback) {
  __STATE__ = produce(__STATE__, callback);
  _stateChangeCallbacks.forEach((callback) => callback(__STATE__));
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
  const userStudiesRef = collection(db, "users", user.uid, "studies");

  onSnapshot(userStudiesRef, (querySnapshot) => {
    const nextState = {};

    querySnapshot.forEach((doc) => {
      const study = doc.data();
      nextState[study.studyId] = study;
    });

    _updateLocalState((draft) => {
      draft.userStudies = nextState;
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
  });
}

export default {
  async initialize(browser = true) {
    if (!browser) {
      return;
    } else {
      await initializeFirestoreAPIs();

      const handleContentScriptEvents = async (
        /** @type {CustomEvent} */ e
      ) => {
        switch (e.type) {
          case "rally-sdk.complete-signup": {
            const detail = JSON.parse(e.detail);
            const studyId = detail && detail.studyId;
            if (!studyId) {
              throw new Error(
                "handling rally-sdk.complete-signup from content script: No study ID provided."
              );
            }

            if (functionsHost === undefined) {
              throw new Error(
                "Firebase Functions host not defined, cannot generate JWTs for extensions."
              );
            }

            // FIXME use the firebase functions library instead of raw `fetch`, then we don't need to configure it ourselves.
            // @ts-ignore
            if (__EMULATOR_MODE__) {
              // FIXME pass the firebase project name in here
              const firebaseProjectId = "demo-rally";
              functionsHost = `http://localhost:5001/${firebaseProjectId}/us-central1`;
            }

            const studies = await getStudies();
            const found = studies.filter((a) => a.studyId === studyId);
            if (!found) {
              throw new Error(
                `Received rally-sdk.complete-signup for non-existent study: ${studyId}`
              );
            }

            const authenticatedUser = await new Promise((resolve) => {
              onAuthStateChanged(auth, (v) => {
                resolve(v);
              });
            });

            const idToken = await authenticatedUser.getIdToken();
            const body = JSON.stringify({ studyId });
            const result = await fetch(`${functionsHost}/rallytoken`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${idToken}`,
              },
              body,
            });
            const rallyToken = (await result.json()).rallyToken;

            console.debug(
              "dispatching rally-sdk.complete-signup-response with token"
            );
            window.dispatchEvent(
              // Each study needs its own token. Send to content script.
              new CustomEvent("rally-sdk.complete-signup-response", {
                detail: { studyId, rallyToken },
              })
            );
            break;
          }
          case "rally-sdk.web-check-response": {
            console.debug("Received rally-sdk.web-check-response.");
            const detail = JSON.parse(e.detail);
            const studyId = detail && detail.studyId;
            if (!studyId) {
              throw new Error(
                "handling rally-sdk.web-check-response from content script: No study ID provided."
              );
            }

            // Mark this study as connected.
            const studies = await getStudies();
            _connectedChangeCallbacks.forEach(async (callback) => {
              const found = studies.find((a) => a.studyId === studyId);
              if (!found) {
                throw new Error(
                  `Received rally-sdk.web-check-response for non-existent study: ${studyId}`
                );
              }
              callback(studyId);
            });
            break;
          }
          default: {
            console.warn(
              `Unknown message received from content script: ${e.type}`
            );
          }
        }
      };
      window.addEventListener(
        "rally-sdk.complete-signup",
        handleContentScriptEvents
      );
      window.addEventListener(
        "rally-sdk.web-check-response",
        handleContentScriptEvents
      );
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

      // Let the Rally SDK content script know the site is intialized.
      console.debug("initialized, dispatching rally-sdk.web-check");
      window.dispatchEvent(new CustomEvent("rally-sdk.web-check", {}));
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
    await initializeFirestoreAPIs();
    onAuthStateChanged(auth, callback);
  },

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    // Allow user to select which Google account to use.
    provider.setCustomParameters({ prompt: "select_account" });

    let userCredential;
    try {
      userCredential = await signInWithRedirect(auth, provider);
    } catch (err) {
      console.error("there was an error", err);
    }
    // create a new user.
    if (userCredential) {
      console.debug("Logged in as", userCredential.user.email);
      initializeUserDocument(userCredential.user.uid);
      listenForUserChanges(userCredential.user);
      listenForUserStudiesChanges(userCredential.user);
    }

    // Let the Rally SDK content script know the site is intialized.
    console.debug("initialized, dispatching rally-sdk.web-check");
    window.dispatchEvent(new CustomEvent("rally-sdk.web-check", {}));
  },

  async loginWithEmailAndPassword(email, password) {
    let userCredential;
    try {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("signInErr", err);
      return;
    }
    if (userCredential.user.emailVerified) {
      initializeUserDocument(userCredential.user.uid);
      listenForUserChanges(userCredential.user);
      listenForUserStudiesChanges(userCredential.user);

      // Let the Rally SDK content script know the site is intialized.
      console.debug("initialized, dispatching rally-sdk.web-check");
      window.dispatchEvent(new CustomEvent("rally-sdk.web-check", {}));
    } else {
      console.warn("Email account not verified, sending verification email");
      localStorage.setItem("signInErr", "Email account not verified");
      await sendEmailVerification(userCredential.user);
    }
  },

  async signupWithEmailAndPassword(email, password) {
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("createErr", err);
      return;
    }
    console.info("Sending verification email");
    await sendEmailVerification(userCredential.user);
  },

  async signOutUser() {
    try {
      signOut(auth);
      console.info("Signing out");
    } catch (err) {
      console.error("there was an error", err);
      return;
    }
  },

  async sendUserPasswordResetEmail(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      console.info("Sending password reset email");
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("resetPasswordErr", err);
      return;
    }
  },

  async resetUserPassword(newPassword, oldPassword) {
    if (this) this.reauthenticateUser(oldPassword);
    let user;
    try {
      if (auth) user = await auth.currentUser;
      await updatePassword(user, newPassword);
      localStorage.removeItem("authErr");
      console.info("reset password");
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("changePWErr", err);
      return;
    }
  },

  async changeEmail(email, password) {
    let user;
    try {
      if (auth) user = await auth.currentUser;
      if (this) {
        if (this.reauthenticateUser(password)) {
          if (user) {
            await updateEmail(user, email);
            console.info("email changed!");
            if (!user.emailVerified) {
              console.info("user not verified!");
              await sendEmailVerification(user);
            } else {
              console.info("email verified!");
            }
          }
        }
      }
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("changeEmailErr", err);
      return;
    }
  },

  async reauthenticateUser(password) {
    let user;
    try {
      if (auth) user = await auth.currentUser;
      if (user) {
        const userCredential = EmailAuthProvider.credential(
          user.email,
          password
        );
        await reauthenticateWithCredential(user, userCredential);
        return true;
      }
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("authErr", err);
    }
  },

  async resendUserVerificationEmail() {
    let user;
    try {
      if (auth) user = await auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        console.info("email verification resent!");
      }
    } catch (err) {
      console.error("there was an error", err);
      localStorage.setItem("changeEmailErr", err);
      return;
    }
  },

  async deleteUserAccount() {
    const user = auth.currentUser;
    await deleteUser(user);
  },

  async isUserVerified() {
    let user;
    try {
      if (auth) user = await auth.currentUser;
      if (user) {
        return user.emailVerified;
      }
    } catch (err) {
      console.error("there was an error", err);
    }
  },

  async getUserEmail() {
    let user;
    try {
      if (auth) user = await auth.currentUser;
      return user.email;
    } catch (err) {
      console.error("there was an error", err);
    }
  },

  async getUserProvider() {
    let user;
    try {
      if (auth) user = await auth.currentUser;
      if (user) return user.providerData;
    } catch (err) {
      console.error("there was an error", err);
    }
  },

  async updateOnboardedStatus(onboarded) {
    return updateUserDocument({ onboarded });
  },

  async updateStudyEnrollment(studyId, enroll) {
    const userStudies = { ...(__STATE__.userStudies || {}) };
    if (!(studyId in userStudies)) {
      userStudies[studyId] = {};
    }
    userStudies[studyId] = { ...userStudies[studyId] };
    userStudies[studyId].enrolled = enroll;
    userStudies[studyId].studyId = studyId;
    if (enroll) {
      userStudies[studyId].joinedOn = new Date();
    }
    await updateUserStudiesCollection(studyId, userStudies[studyId]);

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
  },

  onExtensionConnected(callback) {
    _connectedChangeCallbacks.push(callback);
  },
};
