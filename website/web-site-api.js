/* global firebase */

import { produce } from "immer/dist/immer.cjs.production.min";

let state = {
  user: undefined,
};

const app = firebase.initializeApp({
  apiKey: "AIzaSyCazJhY4l84PBetkKlBT2KNlxChF0cdE-A",
  authDomain: "ham-rally-spike.firebaseapp.com",
  projectId: "ham-rally-spike",
  storageBucket: "ham-rally-spike.appspot.com",
  messagingSenderId: "924108559325",
  appId: "1:924108559325:web:1ef147cfb7c0e54ce71c34"
})

const auth = firebase.auth();
const db = firebase.firestore(app);

const authentication = new Promise((resolve, reject) => {
  auth.onAuthStateChanged(user => {
    console.log("authentication in progress");
    resolve(user);
  })
});

const _stateChangeCallbacks = [];

async function _nextState(nextState) {
  _stateChangeCallbacks.forEach(callback => callback(nextState));
}

// userRef must update once we have a stable userID.
let userRef;

function setUserRef(userID) {
  userRef = db.collection("users").doc(userID);
}

async function getUser(userID) {
  return db.collection("users").doc(userID).get();
}

async function getStudies() {
  return db.collection("studies").get();
}

function update(updates, merge = true) {
  userRef.set(updates, {merge });
}

function updateUser(updates, merge = true) {
  update(updates, merge);
}

function _updateLocalState(callback) {
  state = produce(state, callback);
  _nextState(state);
}

function createUser(uid) {
  updateUser({ uid, createdOn: new Date() });
}

function listenForUserChanges(user) {
  db.collection("users").doc(user.uid)
    .onSnapshot(doc => {
      const nextState = doc.data();
      console.log("USER UPDATE", nextState);
      _updateLocalState((draft) => {
        draft.user = nextState;
      });
    })
}

function listenForStudyChanges() {
  // get initial study payload.
  db.collection("studies").onSnapshot((querySnapshot) => {
    console.log("STUDY UPDATE")
    const studies = [];
    querySnapshot.forEach(function(doc) {
        studies.push(doc.data());
    });
    _updateLocalState((draft) => {
      draft.studies = studies;
    });
  });
}

let USER_ID;


export default {

  async loginWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    let userCredential = undefined;
    try {
      userCredential = await firebase.auth().signInWithPopup(googleAuthProvider);
    } catch(err) {
      console.error("there was an error", err);
    }

    // create a new user.
    setUserRef(userCredential.user.uid);
    createUser(userCredential.user.uid);
    listenForUserChanges();    
  },
  async loginWithEmailAndPassword() {
    
  },
  async signupWithEmailAndPassword() {
    
  },  

  // login

  // initialize the frontend's store from the add-on local storage.
  async initialize() {
    
    // check for an authenticated user.
    const authenticatedUser = await authentication;
    const initialState = {};
    let user;

    // if the user is authenticated, then they must have a 
    // document in firestore. Retrieve it and listen for any changes
    // to the firestore doc.
    if (user !== null) {
      USER_ID = authenticatedUser.uid;
      setUserRef(USER_ID);
      initialState._isLoggedIn = true;
      user = await getUser(authenticatedUser.uid);
      user = user.data();
      listenForUserChanges(authenticatedUser);
    } else {
      initialState._isLoggedIn = false;
    }
    
    let studies = await getStudies();
    studies = studies.docs.map(doc => doc.data());
    
    listenForStudyChanges();
    initialState._initialized = true;

    if (user) {
      initialState.user = user;
    }

    if (studies) {
      initialState.studies = studies;
    }

    return initialState;

  },

  async markOnboardingComplete() {
    updateUser({ onboardingComplete: true });
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
    updateUser({ enrolled: enroll });
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
    userRef.update({ demographicsData: data });
    //updateUser({ demographicsData: data });
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


// one-time make this go into firebase

// const studies = [
//   {
//     "name": "Your Time Online and \"Doomscrolling\"",
//     "icons": {
//       "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-32.png",
//       "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-64.png",
//       "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-128.png"
//     },
//     "authors": {
//       "name": "Mozilla Rally Team"
//     },
//     "version": "0.1.3",
//     "addonId": "rally-study-01@mozilla.org",
//     "downloadLink": "https://addons.mozilla.org/firefox/downloads/latest/time-online-and-doomscrolling",
//     "endDate": "2021-10-13",
//     "studyEnded": false,
//     "studyPaused": false,
//     "description": "When you participate in this study you are helping Rally discover how our community browses the internet. We will explore interesting online patterns like \"doomscrolling\" – the popular term for browsing outrageous or sad online news for a long period of time. Our findings will lead to new Rally features or blog posts about aggregate online behavior.",
//     "studyDetailsLink": "https://rally.mozilla.org/current-studies/your-time-online-and-doomscrolling/",
//     "dataCollectionDetails": [
//       "Specific actions you take while browsing the web: loading a new URL, changing a tab, watching a video, or listening to audio (we do not collect the audio you are listening to, just that you have performed that action)",
//       "The domains you visit as you browse the web (e.g., wikipedia.org) and the title, description, and type of page that you're on (e.g., article, video, website)",
//       "The time spent on each page and how far you scroll down a page"
//     ],
//     "tags": ["community insights", "product discovery"],
//     "schemaNamespace": "rally-zero-one"
//   },
//   {
//     "name": "Political and COVID-19 News",
//     "icons": {
//       "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-32.png",
//       "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-64.png",
//       "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-128.png"
//     },
//     "authors": {
//       "name": "Researchers at Princeton"
//     },
//     "version": "2.0.0",
//     "addonId": "princeton-news-study@rally.mozilla.org",
//     "downloadLink": "https://github.com/citp/news-disinformation-study/releases/download/v2.0.1/princeton_university_news_study-2.0.1.xpi",
//     "endDate": "2021-10-27",
//     "studyEnded": false,
//     "studyPaused": false,
//     "description": "In a collaboration between researchers at Princeton University's Center for Information Technology Policy and Mozilla, this study seeks to examine the flow of both political and COVID-19 related news information across the internet. During the enrollment process, you'll receive more information about the study and you'll be asked by researchers at Princeton to consent to participation.",
//     "studyDetailsLink": "https://rally.mozilla.org/current-studies/political-and-covid-19-news/",
//     "dataCollectionDetails": [
//       "Visits, shares, and exposures to specific websites from an established list to spread authoritative information and disinformation",
//       "Whether you post links to these websites on social media",
//       "Your Rally demographics and a short Qualtrics survey"
//     ],
//     "tags": ["misinformation", "social media"],
//     "schemaNamespace": "pioneer-citp-news-disinfo-two"
//   }
// ]

// studies.forEach(study => {
//   db.collection("studies").doc(study.addonId).set(study, {merge: true });

// })
