import runStudy from "./study.js";
import { setupAuth, googleSignIn, emailSignIn } from "./auth.js";

setupAuth();

// Listen for login messages from the options UI.
chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(async message => {
        try {
            if ("email" in message && "password" in message) {
                const result = await emailSignIn(message);
                port.postMessage({ result });
            } else if ("provider" in message && message.provider === "google") {
                const result = await googleSignIn();
                console.debug("logged in via google:", result);
                port.postMessage({ result });
            }
        } catch (ex) {
            port.postMessage({ error: ex.message });
        }
    });
});

// FIXME - our webextension polyfill doesn't seem to be working, getting errors about `browser.*` missing in Chrome?!
// runStudy(__ENABLE_DEVELOPER_MODE__);

chrome.runtime.openOptionsPage();