import runStudy from "./study.js";
import { setupAuth, googleSignIn, emailSignIn } from "./auth.js";

setupAuth();

// Listen for login messages from the options UI.
chrome.runtime.onConnect.addListener(port => {
    // NOTE - `port` is bi-directional, if we want to use it to communicate back to the options page we can.
    port.onMessage.addListener(message => {
        if ("email" in message && "password" in message) {
            emailSignIn(message);
        } else if ("provider" in message && message.provider === "google") {
            googleSignIn();
        }
    });
});

// FIXME - our webextension polyfill doesn't seem to be working, getting errors about `browser.*` missing in Chrome?!
// runStudy(__ENABLE_DEVELOPER_MODE__);