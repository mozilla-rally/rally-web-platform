import browser from 'browser-detect';
import { Browser } from './Browser';

const browserInfo = browser();

const isBrowser = browserInfo && browserInfo.name || false;

export const currentBrowserType = isBrowser && browserInfo.name.toLowerCase() === "chrome" ? Browser.Chrome :
  isBrowser && browserInfo.name.toLocaleLowerCase() === "firefox" ? Browser.FireFox : undefined;

export const isTest = isBrowser && browserInfo.name.toLocaleLowerCase() === "node";

export const isEmulatorMode = (() => {
  try {
    // @ts-ignore
    if (__EMULATOR_MODE__) {
      return true;
    }
  } catch {
  }

  return false;
})();