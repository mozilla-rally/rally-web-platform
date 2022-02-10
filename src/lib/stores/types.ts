import type { Writable } from "svelte/store";

export interface AppStore extends Omit<Writable<State>, "update"> {
  loginWithGoogle: Function;
  signupWithEmailAndPassword: Function;
  loginWithEmailAndPassword: Function;
  signOutUser: Function;
  sendUserPasswordResetEmail: Function;
  resetUserPassword: Function;
  changeEmail: Function;
  isUserVerified: Function;
  getUserEmail: Function;
  updateOnboardedStatus: Function;
  updateStudyEnrollment: Function;
  updatePlatformEnrollment: Function;
  updateDemographicSurvey: Function;
}

export interface State {
  userStudies: UserStudies;
  _initialized: boolean;
  user?: User;
  studies?: Array<StudyMetadata>;
}

export interface User {
  uid: string;
  createdOn: { seconds: number; nanoseconds: number };
  enrolled: boolean;
  onboarded: boolean;
  demographicsData: object;
}

export interface UserStudies {
  [key: string]: UserStudy;
}

export interface UserStudy {
  joinedOn: { seconds: number; nanoseconds: number };
  enrolled: false;
}

// FIXME: this should be well-defined and probably should live elsewhere.
export interface StudyMetadata { }
