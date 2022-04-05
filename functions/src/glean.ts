import PingEncryptionPlugin from "@mozilla/glean/plugins/encryption";
import axios from "axios";
import { Worker, workerData, isMainThread } from "worker_threads";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

import {
  Uploader,
  UploadResult,
  UploadResultStatus,
} from "@mozilla/glean/uploader";

const GLEAN_DEBUG_VIEW_TAG = "MozillaRally";
const GLEAN_RALLY_APP_ID = "my-app-id";
const GLEAN_APP_DISPLAY_VERSION = "TODO-rally-firestore-server";
const GLEAN_ENCRYPTION_JWK = {
  crv: "P-256",
  kid: "rally-core",
  kty: "EC",
  x: "m7Gi2YD8DgPg3zxora5iwf0DFL0JFIhjoD2BRLpg7kI",
  y: "zo35XIQME7Ct01uHK_LrMi5pZCuYDMhv8MUsSu7Eq08",
};

// Worker thread for handling ping
// This is only run when spawnPingThread creates a new worker
async function main() {
  if (!isMainThread) {
    const { taskName, rallyID, studyID, demographicsData } = workerData;
    switch (taskName) {
      case "platformEnrollment":
        await platformEnrollmentImpl(rallyID);
        break;
      case "platformUnenrollment":
        await platformUnenrollmentImpl(rallyID);
        break;
      case "studyEnrollment":
        await studyEnrollmentImpl(rallyID, studyID);
        break;
      case "studyUnenrollment":
        await studyUnenrollmentImpl(rallyID, studyID);
        break;
      case "demographics":
        await demographicsImpl(rallyID, demographicsData);
        break;
      default:
        throw new Error(`unknown taskName ${taskName} passed to workerThread`);
    }
    process.exit();
  }
}
main();

async function spawnPingThread(params: any) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, {
      workerData: params,
    });
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`stopped with ${code} exit code`));
      resolve(code);
    });
  });
}

/*
 * platformEnrollment
 * Glean ping: enrollment
 */
export async function platformEnrollment(rallyID: string) {
  await spawnPingThread({ taskName: "platformEnrollment", rallyID: rallyID });
}

async function platformEnrollmentImpl(rallyID: string) {
  const { default: Glean } = await import("@mozilla/glean/node");
  const rallyPings = await initializeGlean(Glean, GLEAN_RALLY_APP_ID, rallyID);

  rallyPings.enrollment.submit();

  await Glean.shutdown();
}

/*
 * platformUnenrollment
 * Glean ping: unenrollment, deletion-request
 *
 */
export async function platformUnenrollment(rallyID: string) {
  await spawnPingThread({ taskName: "platformUnenrollment", rallyID: rallyID });
}

async function platformUnenrollmentImpl(rallyID: string) {
  const { default: Glean } = await import("@mozilla/glean/node");
  const rallyPings = await initializeGlean(Glean, GLEAN_RALLY_APP_ID, rallyID);

  rallyPings.unenrollment.submit();
  Glean.setUploadEnabled(false); // automatically trigger a deletion-request ping

  await Glean.shutdown();
}

/*
 * demographics
 * Glean ping: demographics
 */
export async function demographics(rallyID: string, demographicsData: any) {
  await spawnPingThread({
    taskName: "demographics",
    rallyID: rallyID,
    demographicsData: demographicsData,
  });
}

async function demographicsImpl(rallyID: string, demographicsData: any) {
  const { default: Glean } = await import("@mozilla/glean/node");
  const rallyPings = await initializeGlean(Glean, GLEAN_RALLY_APP_ID, rallyID);

  const userMetrics = await import("./generated/user.js");
  setUserMetrics(userMetrics, demographicsData);
  rallyPings.demographics.submit();

  await Glean.shutdown();
}

/*
 * studyEnrollment
 * Glean ping: study-enrollment
 */
export async function studyEnrollment(rallyID: string, studyID: string) {
  await spawnPingThread({
    taskName: "studyEnrollment",
    rallyID: rallyID,
    studyID: studyID,
  });
}

async function studyEnrollmentImpl(rallyID: string, studyID: string) {
  const { default: Glean } = await import("@mozilla/glean/node");
  const rallyPings = await initializeGlean(Glean, studyID, rallyID); // study ID is app ID

  const enrollmentMetrics = await import("./generated/enrollment.js");
  enrollmentMetrics.studyId.set(studyID);
  rallyPings.studyEnrollment.submit();

  await Glean.shutdown();
}

/*
 * studyUnenrollment
 * Glean ping: study-unenrollment, deletion-request
 */
export async function studyUnenrollment(rallyID: string, studyID: string) {
  await spawnPingThread({
    taskName: "studyUnenrollment",
    rallyID: rallyID,
    studyID: studyID,
  });
}

async function studyUnenrollmentImpl(rallyID: string, studyID: string) {
  const { default: Glean } = await import("@mozilla/glean/node");
  const rallyPings = await initializeGlean(Glean, studyID, rallyID); // study ID is app ID

  const unenrollmentMetrics = await import("./generated/unenrollment.js");
  unenrollmentMetrics.studyId.set(studyID);
  rallyPings.studyUnenrollment.submit();

  Glean.setUploadEnabled(false); // automatically trigger a deletion-request ping
  await Glean.shutdown();
}

/*
 * Helper function for initializing Glean
 */
async function initializeGlean(
  Glean: any,
  appID: string,
  rallyID: string,
  uploadEnabled: boolean = true
) {
  Glean.setDebugViewTag(GLEAN_DEBUG_VIEW_TAG);
  Glean.setLogPings(true);
  Glean.initialize(appID, true, {
    appDisplayVersion: GLEAN_APP_DISPLAY_VERSION,
    plugins: [new PingEncryptionPlugin(GLEAN_ENCRYPTION_JWK)],
    httpClient: new CustomPingUploader(),
  });

  Glean.setUploadEnabled(uploadEnabled);
  const rallyMetrics = await import("./generated/rally.js");
  rallyMetrics.id.set(rallyID);
  const rallyPings = await import("./generated/pings.js");
  return rallyPings; // Always need rallyPings, so return it to initializer
}

/*
 * Helper function for setting user metrics
 * from demographic data (mapping)
 */
function setUserMetrics(userMetrics: any, data: any) {
  if ("age" in data) {
    userMetrics.age[`band_${data["age"]}`].set(true);
  }

  if ("gender" in data) {
    userMetrics.gender[data["gender"]].set(true);
  }

  if ("hispanicLatinxSpanishOrigin" in data) {
    const label =
      data["hispanicLatinxSpanishOrigin"] === "other"
        ? "other"
        : "hispanic_latinx_spanish";
    userMetrics.origin[label].set(true);
  }

  if ("race" in data) {
    for (const raceLabel of data["race"]) {
      const label =
        raceLabel === "american_indian_or_alaska_native"
          ? "am_indian_or_alaska_native"
          : raceLabel;
      userMetrics.races[label].set(true);
    }
  }

  if ("school" in data) {
    const KEY_FIXUP: any = {
      high_school_graduate_or_equivalent: "high_school_grad_or_eq",
      some_college_but_no_degree_or_in_progress: "college_degree_in_progress",
    };

    const originalLabel = data["school"];
    const label =
      originalLabel in KEY_FIXUP ? KEY_FIXUP[originalLabel] : originalLabel;
    userMetrics.school[label].set(true);
  }

  if ("exactIncome" in data) {
    userMetrics.exactIncome.set(data["exactIncome"]);
  }

  if ("zipcode" in data) {
    userMetrics.zipcode.set(data["zipcode"]);
  }
}

/**
 * Custom Ping Uploader for Glean
 * TODO: replace direct POST request with Google Cloud Task
 */
class CustomPingUploader extends Uploader {
  async post(
    url: string,
    body: string | Uint8Array,
    headers: any
  ): Promise<UploadResult> {
    return await axios
      .post(url, body, { headers: headers })
      .then(function (response) {
        // console.log(response);
        return {
          status: response.status,
          result: UploadResultStatus.Success,
        };
      })
      .catch(function (error) {
        console.log(error);
        return {
          status: 500,
          result: UploadResultStatus.UnrecoverableFailure,
        };
      });
  }
}
