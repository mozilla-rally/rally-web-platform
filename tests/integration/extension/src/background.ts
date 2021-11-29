import { Rally, runStates } from "@mozilla/rally";

const enableDevMode = false;
const rallySite = "http://localhost:5000";
const studyId = "exampleStudy1";

// TODO load from JSON file in /config/
const firebaseConfig = {
  apiKey: "abc123",
  authDomain: "demo-rally.firebaseapp.com",
  projectId: "demo-rally",
  storageBucket: "demo-rally.appspot.com",
  messagingSenderId: "abc123",
  appId: "1:123:web:abc123",
  functionsHost: "http://localhost:5001",
};

const enableEmulatorMode = true;

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

const rally = new Rally({
  enableDevMode,
  stateChangeCallback,
  rallySite,
  studyId,
  firebaseConfig,
  enableEmulatorMode,
});
