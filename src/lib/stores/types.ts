import type { Writable } from "svelte/store";

interface FirebaseError {
  EMAIL_ALREADY_IN_USE: string,
  INVALID_EMAIL: string,
  USER_NOT_FOUND: string,
  WRONG_PASSWORD: string,
  USER_MISMATCH: string,
  POPUP_BLOCKED: string,
  EMAIL_NOT_VERIFIED: string,
  GOOGLE_ONLY_ACCOUNT: string,
  EMAIL_IS_CURRENT_EMAIL: string
}

export interface AppStore extends Omit<Writable<State>, "update"> {
  loginWithGoogle: Function;
  signupWithEmailAndPassword: Function;
  loginWithEmailAndPassword: Function;
  signOutUser: Function;
  sendUserPasswordResetEmail: Function;
  resetUserPassword: Function;
  resendUserVerificationEmail: Function;
  changeEmail: Function;
  isUserVerified: Function;
  getUserEmail: Function;
  getUserProvider: Function,
  deleteUserAccount: Function;
  updateOnboardedStatus: Function;
  updateStudyEnrollment: Function;
  updatePlatformEnrollment: Function;
  updateDemographicSurvey: Function;
  ERROR: FirebaseError;
}

export interface State {
  userStudies: UserStudies;
  _initialized: boolean;
  user?: User;
  studies?: Array<StudyMetadata>;
}

export interface User {
  uid: string;
  createdOn: { seconds: number; nanoseconds: number; };
  enrolled: boolean;
  onboarded: boolean;
  demographicsData: object;
  providerData: object
}

export interface UserStudies {
  [key: string]: UserStudy;
}

export interface UserStudy {
  joinedOn: { seconds: number; nanoseconds: number; };
  enrolled: boolean;
  studyId: string;
}

export interface StudyMetadata {
  name: string;
  description: string;
  studyId?: string;
  tags: string[];
  icons: Record<string, string>;
  addonId?: string;
  authors: {
    name: string;
    url?: string;
  };
  endDate: string;
  version: string;
  studyEnded: boolean;
  studyPaused: boolean;
  downloadLink: string;
  schemaNamespace?: string;
  studyDetailsLink: string;
  minimumCoreVersion?: string;
  dataCollectionDetails: string[];
}