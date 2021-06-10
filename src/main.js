import { setupAuth, googleSignIn, emailSignIn } from "./auth.js";
//import runStudy from "./study.js";

// runStudy(__ENABLE_DEVELOPER_MODE__);
setupAuth();
let port;
chrome.runtime.onConnect.addListener(p => {
    port = p;
    p.onMessage.addListener(message => {
        if ("email" in message && "password" in message) {
            emailSignIn(message);
        } else if ("provider" in message && message.provider === "google") {
            googleSignIn();
        }
    });
});
// emailSignIn({ email: "test@example.com", password: "test" });