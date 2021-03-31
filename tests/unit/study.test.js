jest.mock("../../src/attention-reporter", () => {
    return {
        onPageData: { addListener: jest.fn() },
        stopMeasurement: jest.fn()
    }
})

import runStudy from "../../src/study";
import * as AttentionReporter from "../../src/attention-reporter";
jest.mock('webextension-polyfill', () => require('sinon-chrome/webextensions'));
import browser from 'webextension-polyfill';

describe("study.js", function() {
    beforeEach(function() {
        browser.runtime = {
            sendMessage() { return Promise.resolve({
                type: "core-check-response",
                data: { enrolled: true }
            }) },
        }
        // onMessageExternal is not mocked by sinon-chrome/webextensions.
        // provide a global mock here so the initialization works as expected
        // and we can call methods like study._pause();
        global.browser.runtime.onMessageExternal = {
            addListener: () => jest.fn()
        }
        // suppress the console.debug and console.warn calls for the test.
        global.console.debug = () => {};
        global.console.warn = () => {};
    })
    it('successfully initializes a Rally instance', async function() {
        const study = await runStudy(true);
        expect(study._initialized).toBe(true);
    })
    it('successfully calls AttentionReporter.onPageData on initialization', async function() {
        await runStudy(true);
        expect(AttentionReporter.onPageData.addListener.mock.calls.length).toBe(1);
    })
    it('calls stopMeasurement if the rally instance receives a "pause" message', async function() {
        const study = await runStudy(true)
        study._pause();
        expect(AttentionReporter.stopMeasurement.mock.calls.length).toBe(1);
    })
    afterEach(function () {
        jest.resetModules();
        jest.clearAllMocks();
    });
})
