import { Rally, runStates } from "@mozilla/rally";
import { browser } from "webextension-polyfill-ts";

const devMode = true;
const stateChangeCallback = (state) => {
    console.log("Rally state changed: ", state)
};
const rallySite = "http://localhost:5000";
const rally = new Rally(devMode, stateChangeCallback, rallySite);
