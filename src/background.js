import { Rally, runStates } from "@mozilla/rally";
import EventStreamManager from "./event-stream-manager";

function openPage() {
    browser.runtime.openOptionsPage().catch(e => {
      console.error(`Study Add-On - Unable to open the control panel`, e);
    });
  }
  
const rally = new Rally();

rally.initialize(
  // A sample key id used for encrypting data.
  "sample-invalid-key-id",
  // A sample *valid* JWK object for the encryption.
  {
    "kty":"EC",
    "crv":"P-256",
    "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
    "kid":"Public key used in JWS spec Appendix A.3 example"
  },
  // The following constant is automatically provided by
  // the build system.
  __ENABLE_DEVELOPER_MODE__,
  (newState) => {
    if (newState === runStates.RUNNING) {
      console.debug("~~~ RS01 running ~~~");
    } else {
      console.error("~~~ RS01 not running ~~~");
    }
  }
).then(() => {
    const stream = new EventStreamManager();

    stream.onPageData(async (data) => {
        console.debug('output',
        data);
        if (__ENABLE_DEVELOPER_MODE__) {
          await stream.storage.push(data); 
        } 
        rally.sendPing("FIXME_ADD_PING_NAME_HERE", data);
    });
    browser.browserAction.onClicked.addListener(openPage);

}, reject => {
  // Do not start the study in this case. Something
  // went wrong.
});