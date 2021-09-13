import { Rally, runStates } from "@mozilla/rally";

const devMode = true;
const rallySite = "http://localhost:5000";
const studyName = "exampleStudy1";

// TODO load from JSON file in /config/
const firebaseConfig = {
    "apiKey": "abc123",
    "authDomain": "demo-rally.firebaseapp.com",
    "projectId": "demo-rally",
    "storageBucket": "demo-rally.appspot.com",
    "messagingSenderId": "abc123",
    "appId": "1:123:web:abc123",
    "functionsHost": "http://localhost:5001"
}

const stateChangeCallback = async (state) => {
    switch (state) {
        case runStates.RUNNING:
            console.log("Start data collection");
            console.log(`RallyID: ${rally.rallyId}`);
            break;
        case runStates.PAUSED:
            console.log("Pause data collection");
            break;
        case runStates.ENDED:
            console.log("Pause data collection, study has ended");
            break;
        default:
            console.log("Unknown run state", state);
            break;
    }
};

const rally = new Rally(devMode, stateChangeCallback, rallySite, studyName, firebaseConfig);
