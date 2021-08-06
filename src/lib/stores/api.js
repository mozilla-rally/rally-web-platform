import CONFIG, { demoConfig } from "../../../firebase.config"
//import { produce } from "immer/dist/immer.cjs.production.min";
import { produce } from "immer/dist/immer.esm";
import firebase from "firebase/app";
// eslint-disable-next-line node/no-extraneous-import
import "@firebase/firestore";
// eslint-disable-next-line node/no-extraneous-import
import "@firebase/auth";

let state = {
  user: undefined,
  onboarded: false
};

let app;
if( firebase.apps.length === 0 ){
  app = firebase.initializeApp(CONFIG);
}
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
const _authChangeCallbacks = [];

auth.onAuthStateChanged(change => {
  _authChangeCallbacks.forEach(callback => callback(change));
})

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
    await this.notifyStudies(userCredential.credential.idToken);
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

  async notifyStudies(idToken) {
    // Attempt to automatically log-in any valid study extensions, by passing them the ID token.
    // TODO only supports Chrome auth provider
    // TODO pull study IDs from metadata
    // if (window.chrome || window.browser) {
    //   for (const studyId of [demoConfig.id]) {
    //     (chrome || browser).runtime.sendMessage(studyId, idToken);
    //   }
    // }
  },

  async updateOnboardedStatus(onboarded) {
    user.update({ onboarded });
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

  onAuthChange(callback) {
    _authChangeCallbacks.push(callback);
  },

  onNextState(callback) {
    _stateChangeCallbacks.push(callback);
  }
};


// one-time opp to put the studies into firebase

function addStudiesToFirebase() {
  const studies = [
    {
      "name": "The Rally Web Spike",
      "icons": {
        "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-32.png",
        "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-64.png",
        "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-128.png"
      },
      "authors": {
        "name": "Mozilla Rally Team"
      },
      "version": "0.1.3",
      "addonId": demoConfig.id,
      "downloadLink": "https://addons.mozilla.org/firefox/downloads/latest/time-online-and-doomscrolling",
      "endDate": "2021-10-13",
      "studyEnded": false,
      "studyPaused": false,
      "description": "This is a really, really cool demo utilizing Firestore. I can't wait to show you how it works.",
      "studyDetailsLink": "https://rally.mozilla.org/current-studies/your-time-online-and-doomscrolling/",
      "dataCollectionDetails": [
        "Pretty much nothing!",
      ],
      "tags": ["product discovery"],
      "schemaNamespace": "rally-zero-one"
    },
    // {
    //   "name": "Your Time Online and \"Doomscrolling\"",
    //   "icons": {
    //     "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-32.png",
    //     "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-64.png",
    //     "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-128.png"
    //   },
    //   "authors": {
    //     "name": "Mozilla Rally Team"
    //   },
    //   "version": "0.1.3",
    //   "addonId": "rally-study-01@mozilla.org",
    //   "downloadLink": "https://addons.mozilla.org/firefox/downloads/latest/time-online-and-doomscrolling",
    //   "endDate": "2021-10-13",
    //   "studyEnded": false,
    //   "studyPaused": false,
    //   "description": "When you participate in this study you are helping Rally discover how our community browses the internet. We will explore interesting online patterns like \"doomscrolling\" – the popular term for browsing outrageous or sad online news for a long period of time. Our findings will lead to new Rally features or blog posts about aggregate online behavior.",
    //   "studyDetailsLink": "https://rally.mozilla.org/current-studies/your-time-online-and-doomscrolling/",
    //   "dataCollectionDetails": [
    //     "Specific actions you take while browsing the web: loading a new URL, changing a tab, watching a video, or listening to audio (we do not collect the audio you are listening to, just that you have performed that action)",
    //     "The domains you visit as you browse the web (e.g., wikipedia.org) and the title, description, and type of page that you're on (e.g., article, video, website)",
    //     "The time spent on each page and how far you scroll down a page"
    //   ],
    //   "tags": ["community insights", "product discovery"],
    //   "schemaNamespace": "rally-zero-one"
    // },
    {
      "name": "Political and COVID-19 News",
      "icons": {
        "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-32.png",
        "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-64.png",
        "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-128.png"
      },
      "authors": {
        "name": "Researchers at Princeton"
      },
      "version": "2.0.0",
      "addonId": "princeton-news-study@rally.mozilla.org",
      "downloadLink": "https://github.com/citp/news-disinformation-study/releases/download/v2.0.1/princeton_university_news_study-2.0.1.xpi",
      "endDate": "2021-10-27",
      "studyEnded": false,
      "studyPaused": false,
      "description": "In a collaboration between researchers at Princeton University's Center for Information Technology Policy and Mozilla, this study seeks to examine the flow of both political and COVID-19 related news information across the internet. During the enrollment process, you'll receive more information about the study and you'll be asked by researchers at Princeton to consent to participation.",
      "studyDetailsLink": "https://rally.mozilla.org/current-studies/political-and-covid-19-news/",
      "dataCollectionDetails": [
        "Visits, shares, and exposures to specific websites from an established list to spread authoritative information and disinformation",
        "Whether you post links to these websites on social media",
        "Your Rally demographics and a short Qualtrics survey"
      ],
      "tags": ["misinformation", "social media"],
      "schemaNamespace": "pioneer-citp-news-disinfo-two"
    }
  ]

  studies.forEach(study => {
    db.collection("studies").doc(study.addonId).set(study, { merge: true });
  });
  return studies;
}

addStudiesToFirebase();
