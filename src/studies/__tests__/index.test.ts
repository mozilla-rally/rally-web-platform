jest.mock("../environment");

import { Browser } from "../Browser";
import { chromeStudies, firefoxStudies, testChromeStudies, testFirefoxStudies } from "../index";
import type { Study } from "../Study";

const mockFirefox = Browser.FireFox;
const mockChrome = Browser.Chrome;

describe("getAllStudiesForBrowser", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("returns test studies when running in test mode", () => {
    jest.mock("../environment", () => ({
      isTest: true
    }));

    const { getAllStudiesForBrowser } = require("../");

    expect(getAllStudiesForBrowser()).toStrictEqual(testChromeStudies);
  });

  it("returns test chrome studies when browser is chrome and emulator mode is set to true", () => {
    jest.mock("../environment", () => ({
      isTest: false,
      isEmulatorMode: true,
      currentBrowserType: mockChrome
    }));

    const { getAllStudiesForBrowser } = require("../");

    expect(getAllStudiesForBrowser()).toStrictEqual(testChromeStudies);
  });

  function ensureStrictOrdering(result: Study[], browser: Browser) {
    // Ensure that order is incresing until it disappears (is undefined) altogether
    let lastMax: number | undefined = Number.MIN_VALUE;
    result.forEach((s, i) => {
      expect(s.browser).toBe(browser);

      if (i === 0) {
        lastMax = s.order;
        return;
      }

      if (s.order) {
        expect(lastMax).not.toBe(undefined);
        expect(lastMax).toBeLessThan(s.order);
      } else {
        lastMax = undefined;
      }
    });
  }

  it("returns production chrome studies when browser is chrome and emulator mode is set to false", () => {
    jest.mock("../environment", () => ({
      isTest: false,
      isEmulatorMode: false,
      currentBrowserType: mockChrome
    }));

    const { getAllStudiesForBrowser } = require("../");

    const result = getAllStudiesForBrowser();
    expect(result.length).toBe(chromeStudies.length);

    ensureStrictOrdering(result, mockChrome);
  });

  it("returns test firefox studies when browser is firefox and emulator mode is set to true", () => {
    jest.mock("../environment", () => ({
      isTest: false,
      isEmulatorMode: true,
      currentBrowserType: mockFirefox
    }));

    const { getAllStudiesForBrowser } = require("../");

    const result: Study[] = getAllStudiesForBrowser();
    expect(result).toStrictEqual(testFirefoxStudies);
  });

  it("returns production firefox studies when browser is firefox and emulator mode is set to false", () => {
    jest.mock("../environment", () => ({
      isTest: false,
      isEmulatorMode: false,
      currentBrowserType: mockFirefox
    }));

    const { getAllStudiesForBrowser } = require("../");

    const result: Study[] = getAllStudiesForBrowser();
    expect(result.length).toBe(firefoxStudies.length);

    ensureStrictOrdering(result, mockFirefox);
  });
});