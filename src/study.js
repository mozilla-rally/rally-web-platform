import { Rally, runStates } from "@mozilla/rally";
import { onPageData, stopMeasurement } from "./attention-reporter";
  
function collectEventDataAndSubmit(rally, devMode) {
  // note: onPageData calls startMeasurement.
  onPageData.addListener(async (data) => {
    if (devMode) {
      console.debug("RS01.event", data);
    }
    // though we collect the data as two different event types using Web Science,
    // we send the payload using one schema, "RS01.event".
    // Once https://github.com/mozilla-rally/web-science/issues/33 is resolved,
    // we will change the collection schema (but keep this pipeline schema the same).
    rally.sendPing("RS01.event", data);
  }, {
      matchPatterns: ["<all_urls>"],
      privateWindows: false
  });
}

export default async function runStudy(devMode) {
    const rally = new Rally();
    try {
      await rally.initialize(
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
      devMode,
      (newState) => {
          if (newState === runStates.RUNNING) {
          // if the study is running but wasn't previously, let's re-initiate the onPageData listener.
          console.debug("~~~ RS01 running ~~~");
          collectEventDataAndSubmit(rally, devMode);
          } else {
          console.debug("~~~ RS01 not running ~~~");
          // stop the measurement here.
          stopMeasurement();
          }
      })
    } catch (err) {
      throw new Error(err);
    }
    // if initialization worked, commence data collection.
    console.debug("~~~ RS01 running ~~~");
    collectEventDataAndSubmit(rally, devMode);
    return rally;
}
