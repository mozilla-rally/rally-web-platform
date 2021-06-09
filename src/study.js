import Glean from "@mozilla/glean/webext";
import PingEncryptionPlugin from "@mozilla/glean/webext/plugins/encryption";

import { Rally, runStates } from "@mozilla/rally";
import { onPageData, stopMeasurement } from "./attention-reporter";

import * as pageMetrics from "../src/generated/page.js";
import * as pageVisitMetrics from "../src/generated/pageVisit.js";
import * as eventMetrics from "../src/generated/event.js";
import * as pageAttentionMetrics from "../src/generated/pageAttention.js";
import * as rs01Pings from "../src/generated/pings.js";

function collectEventDataAndSubmit(rally, devMode) {
  // note: onPageData calls startMeasurement.
  onPageData.addListener(async (data) => {
    if (devMode) {
      console.debug("RS01.event", data);
    }

    // Report the data using Glean.
    pageMetrics.id.set(data.pageId);
    pageMetrics.origin.set(data.origin);
    pageMetrics.referrerOrigin.set(data.referrerOrigin);
    pageVisitMetrics.start.set(new Date(data.pageVisitStartTime));
    pageVisitMetrics.stop.set(new Date(data.pageVisitStopTime));
    eventMetrics.start.set(new Date(data.eventStartTime));
    eventMetrics.stop.set(new Date(data.eventStopTime));
    // `setRawNanos` expects the input to be in nanoseconds so
    // convert it before setting.
    eventMetrics.duration.setRawNanos(data.duration * 1000000);
    eventMetrics.terminationReason.set(data.eventTerminationReason);
    pageMetrics.title.set(data.title);
    pageMetrics.ogType.set(data.ogType);
    pageMetrics.ogDescription.set(data.description);

    if (data.eventType === "attention") {
      pageAttentionMetrics.maxRelativeScrollDepth.set(data.maxRelativeScrollDepth);
      pageAttentionMetrics.maxPixelScrollDepth.set(data.maxPixelScrollDepth);
      pageAttentionMetrics.scrollHeight.set(data.scrollHeight);
    }

    rs01Pings.rs01Event.submit(data.eventType);

    // though we collect the data as two different event types using Web Science,
    // we send the payload using one schema, "RS01.event".
    // Once https://github.com/mozilla-rally/web-science/issues/33 is resolved,
    // we will change the collection schema (but keep this pipeline schema the same).
    rally.sendPing("measurements", data);
  }, {
      matchPatterns: ["<all_urls>"],
      privateWindows: false
  });
}

export default async function runStudy(devMode) {
    const rally = new Rally();
    try {
      await rally.initialize(
        // the schema namespace provided by Mozilla
        "rally-zero-one",
        // the public jwk token provided by Mozilla
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
            Glean.setUploadEnabled(true);
            collectEventDataAndSubmit(rally, devMode);
          } else {
            console.debug("~~~ RS01 not running ~~~");
            // stop the measurement here.
            stopMeasurement();
            Glean.setUploadEnabled(false);
          }
      });

      // If we got to this poin, then Rally is properly
      // initialized and we can flip collection on.
      Glean.initialize("rally-study-zero-one", true, {
        debug: { logPings: true },
        plugins: [
          new PingEncryptionPlugin({
            "crv": "P-256",
            "kid": "rally-study-zero-one",
            "kty": "EC",
            "x": "-a1Ths2-TNF5jon3MlfQXov5lGA4YX98aYsQLc3Rskg",
            "y": "Cf8PIvq_CV46r_DBdvAc0d6aN1WeWAWKfiMtwkpNGqw"
          })
        ]
      });
    } catch (err) {
      throw new Error(err);
    }
    // if initialization worked, commence data collection.
    console.debug("~~~ RS01 running ~~~");
    collectEventDataAndSubmit(rally, devMode);
    return rally;
}
