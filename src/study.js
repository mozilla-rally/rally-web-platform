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
        "zero-one",
        {
          "crv": "P-256",
          "kid": "zero-one",
          "kty": "EC",
          "x": "edhPpqhgK9dD7NaqhQ7Ckw9sU6b39X7XB8HnA366Rjs",
          "y": "GzsfM19n-iH-DVR0iKEoA8BE2CFF46wR__siJ3SdiNs"
        },          
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
