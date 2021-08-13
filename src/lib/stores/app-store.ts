/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { writable, derived } from "svelte/store";
import { browser } from "$app/env";
import firestoreAPI from "./api";

export function createAppStore(api = firestoreAPI) {
  const { subscribe, set } = writable({ _initialized: false });
  
  api.initialize(browser).then(state => {
    set(state);
  });

  api.onNextState((state) => {
    const nextState = {...state, _initialized: true };
    set(nextState);
  });

  return {
    subscribe,
    set,
    async loginWithGoogle() {
      return api.loginWithGoogle();
    },
    async loginWithEmailAndPassword(email, password) {
      return api.loginWithEmailAndPassword(email, password);
    },
    async signupWithEmailAndPassword(email, password) {
      return api.signupWithEmailAndPassword(email, password);
    },
    async updateOnboardedStatus(onboardingOrNot) {
      return api.updateOnboardedStatus(onboardingOrNot);
    },
    async updateStudyEnrollment(studyID, enroll) {
      // Enforce the truthyness of `enroll`, to make sure
      // it's always a boolean.
      const coercedEnroll = !!enroll;
      console.debug(
        `Rally - changing study ${studyID} enrollment to ${coercedEnroll}`);

      // send study enrollment message
      try {
        return await api.updateStudyEnrollment(studyID, coercedEnroll);
      } catch (err) {
        console.error(err);
      }
    },
    async updatePlatformEnrollment(enroll) {
      // Enforce the truthyness of `enroll`, to make sure
      // it's always a boolean.
      const coercedEnroll = !!enroll;
      console.debug(`Rally - changing enrollment to ${coercedEnroll}`);

      // send the ion enrollment message
      try {
        return await api.updatePlatformEnrollment(coercedEnroll);
      } catch (err) {
        console.error(err);
      }
    },
    async updateDemographicSurvey(data) {
      try {
        await api.updateDemographicSurvey(data);
      } catch (err) {
        console.error("Rally - failed to update the demographic survey", err);
      }
    },
    async setFirstRunCompletion(firstRun) {
      try {
        await api.setFirstRunCompletion(firstRun);
      } catch (err) {
        console.error("Rally - failed to set first run flag", err);
      }
    }
  };
}

/**
 * Creates a store whose value is a boolean that logs whether the current user is
 * authenticated into Rally or not.
 * @returns WritableStore<boolean>["subscribe"]
 */
function isAuthenticatedStore() {
  const { subscribe, set } = writable(undefined);
  firestoreAPI.onAuthStateChanged((authState) => {
    set(authState !== null);
  });
  return { subscribe };
}

export const isAuthenticated = browser ? isAuthenticatedStore() : writable(undefined);
export const store = browser ? createAppStore() : writable(undefined);

export const appIsReady = derived([isAuthenticated, store], ($isAuthenticated, $store) => {
  return $isAuthenticated !== undefined && $store._initialized;
}, false);