// COMPONENTS TO ADD
// auth change will need to change something, perhaps just file the _onStateChange callbacks or whatever.
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import { produce } from "immer/dist/immer.cjs.production.min";



let state = {
  user: undefined,

};

const app = initializeApp({
  apiKey: "AIzaSyCazJhY4l84PBetkKlBT2KNlxChF0cdE-A",
  authDomain: "ham-rally-spike.firebaseapp.com",
  projectId: "ham-rally-spike",
  storageBucket: "ham-rally-spike.appspot.com",
  messagingSenderId: "924108559325",
  appId: "1:924108559325:web:1ef147cfb7c0e54ce71c34"
})

const auth = getAuth();
const db = getFirestore(app);

const authentication = new Promise((resolve, reject) => {
  auth.onAuthStateChanged(user => {
    console.log("authentication check", user);
    update((draft) => {
      draft.user = user;
    });
    resolve(user);
  })
});

async function updateUserInformation(user) {
  //_db.settings({ experimentalForceLongPolling: true });
  const data = { user: {
    uid: user.uid,
    lastUpdated: new Date()
  } };
  console.log("attempting to create/update firestore", data);
  const userRef = doc(db, "users", user.uid);
  console.log("??", userRef);
  await setDoc(userRef, data);
  console.log("user updated");
  // await addDoc(collection(_db, "users"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });  
}

updateUserInformation({ uid: "TEST"});

// Let's wait for 
auth.onAuthStateChanged(async user => {
  console.log("authentication check", user);
  update((draft) => {
    draft.user = user;
  });
  if (user !== null) {
    try {
      await updateUserInformation(user);
    } catch (err) {
      console.error("!!!ONODNF", err);
    }
  }
})

const _stateChangeCallbacks = [];

async function _nextState(nextState) {
  _stateChangeCallbacks.forEach(callback => callback(nextState));
}

function update(callback) {
  state = produce(state, callback);
  _nextState(state);
}

export default {

  async loginWithGoogle() {
    console.log("here we go, logging in with google.")
    const googleAuthProvider = new GoogleAuthProvider();
    let userCredential = undefined;
    try {
      userCredential = await signInWithPopup(auth, googleAuthProvider);
    } catch(err) {
      console.error("there was an error", err);
    }
    update((draft) => {
      draft.user = userCredential;
    })
    console.log("we made it passed the userCredential side."), userCredential;
    
  },
  async loginWithEmailAndPassword() {
    
  },
  async signupWithEmailAndPassword() {
    
  },  

  // login

  // initialize the frontend's store from the add-on local storage.
  async initialize() {
    // _stateChangeCallbacks holds all the callbacks we want to execute
    // once the background sends a message with a new state.
    
    const user = await authentication;
    // figure out if the user is authenticated.

    // Ask explicitly for the current state.

    update(draft => {
      draft.user = user;
    });

    return state;
  },

  // fetch available studies from remote location.
  // use in store instantiation. This assumes that the studies are
  // stored somewhere (i.e. remote settings)
  async getAvailableStudies() {
    return [];
    // const response =
    //   waitForCoreResponse(this._connectionPort, "update-state");

    // await sendToCore(this._connectionPort, "get-studies", {});
    // return await response;
  },

  /**
   * Updates the study enrollment.
   *
   * @param {Boolean} enroll
   *        `true` if user decided to enroll in a Study,
   *        `false` if user opted out.
   * @returns {Boolean} `true` if the enrollment status was successfully
   *          updated, `false` otherwise.
   */

  async updateStudyEnrollment(studyID, enroll) {
    // do the thing here
    return true;
  },

  /**
   * Updates the platform enrollment in the add-on.
   *
   * @param {Boolean} enroll
   *        `true` if user decided to enroll in the platform,
   *        `false` otherwise.
   * @returns {Boolean} `true` if the enrollment status was successfully
   *          updated, `false` otherwise.
   */
  async updatePlatformEnrollment(enroll) {
    // do the thing here
    update((draft) => {
      draft.enrolled = enroll;
    });
  },

  /**
   * Updates the stored version of the demographics data.
   *
   * @param {Object} data
   *        A JSON-serializable object containing the demographics
   *        information submitted by the user.
   */
  async updateDemographicSurvey(data) {
    // do the thing here
    return true;
  },

  /**
   * Updates the "first run" completion state. This is primarily fired
   * after a user has viewed the Welcome page once. After this,
   * we do not show any of the first run visual artifacts to the user, even
   * if they close the Rally options page and revisit it later.
   *
   * @param {Boolean} firstRunCompleted
   */
  async setFirstRunCompletion(firstRunCompleted) {
    return true;
  },

  /**
   * Handle messages coming from the background script.
   *
   * @param {Object} message
   *        The incoming message, with the following structure:
   * ```js
   * {
   *  type: "message-type",
   *  data: { ... },
   * }
   * ```
   */

  /**
   * Handle state updates from the background script.
   *
   * @param {Function} callback
   *        A function that has the new state as an argument.
   */
  onNextState(callback) {
    _stateChangeCallbacks.push(callback);
  }
};
