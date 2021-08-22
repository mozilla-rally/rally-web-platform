import { Rally, runStates } from "@mozilla/rally";

const devMode = true;
const stateChangeCallback = (state) => {
    switch (state) {
        case runStates.RUNNING:
            console.log("Start data collection");
            break;
        case runStates.PAUSED:
            console.log("Pause data collection");
            break;
        default:
            console.log("Unknown run state", state);
            break;
    }
};
const rallySite = "http://localhost:5000";
const rally = new Rally(devMode, stateChangeCallback, rallySite);
