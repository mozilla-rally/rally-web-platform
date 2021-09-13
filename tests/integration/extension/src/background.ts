import { Rally, runStates } from "@mozilla/rally";

const devMode = true;
const studyName = "exampleStudy1";
const rallySite = "http://localhost:5000";

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

const rally = new Rally(devMode, stateChangeCallback, rallySite, studyName);
