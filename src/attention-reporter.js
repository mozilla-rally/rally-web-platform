/**
 * This module contains function for initializing the attention reporting
 * and collecting in RS01 in a background script.
 * It is responsible for initialization through `startMeasurement` 
 * and exports a callback function
 * to consume the stream of attention and audio events, `onPageData`.
 * It handles the registration of [`attention-collector.js`](/RS01.module_attention-collector.html).
 * @example
 * import { startMeasurement, stopMeasurement, onPageData } from "./attention-reporter";
 * 
 * // Starts the measurement by activating the attention-collector.js content script.
 * // and creating new listeners for it.
 * startMeasurement();
 * 
 * // Initializes the page data callback.
 * onPageData(userEvent => {
 *  console.log('attention event collected', userEvent);
 * });
 * 
 * // Stop the measurement when some other arbitrary event fires.
 * // This will unregister the attention-collector.js content script
 * // and remove the associated listeners.
 * someOtherModule.onError(stopMeasurement);
 *
 * @module RS01.attention-reporter
 */

import browser from 'webextension-polyfill';

import * as Events from "../WebScience/Utilities/Events.js"
import * as Messaging from "../WebScience/Utilities/Messaging.js"
import * as PageManager from "../WebScience/Utilities/PageManager.js"

/** 
 * The generic interface that defines the shared properties for `AttentionEvent` and `AudioEvent`.
 * @typedef {Object} UserEvent
 * 
 * @property {number} pageId - The ID for the page, unique across browsing sessions.
 * @property {number} tabId - The ID for the tab containing the page, unique to the browsing session.
 * @property {number} windowId - The ID for the window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @property {boolean} privateWindow - Whether the page is in a private window.
 * @property {string} url - The URL of the page loading in the tab, without any hash.
 * @property {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @property {number} pageVisitStartTime - A unix timestamp (in miliseconds) when the page visit start event fired.
 * @property {number} pageVisitStopTime - A unix timestamp (in miliseconds) when the page visit stop event fired.
 * @property {number} duration - Time in miliseconds that the event lasted.
 * @property {string} reason - the reason the attention event was activated.
 * @property {string} title - the page's <title> contents, taken from the <head> tag.
 * @property {string} ogDescription - the page's og:description <meta> tag, taken from the <head> tag.
 * @property {string} ogType - the page's og:type <meta> tag, taken from the <head> tag.
 * @interface
 */

/** 
 * This web extension reports an attention event after the PageManager FIXME event is fired.
 * See [`UserEvent`](/RS01.module_attention-reporter-UserEvent.html) for additional properties.
 * @typedef {Object} AttentionEvent
 * 
 * @implements {UserEvent}
 * @property {number} MaxPixelScrollDepth - The largest reported pixel value on the active page the user has scrolled.
 * @property {number} maxRelativeScrollDepth - The largest reported proportion of the active page that has been scrolled already.
 * @interface
 */

/** 
 * This web extension reports an audio event after the Pagemanager FIXME event is fired.
 * See [`UserEvent`](/RS01.module_attention-reporter-UserEvent.html) for additional properties.
 * @typedef {Object} AudioEvent
 * 
 * @implements {UserEvent}
 * @property {number} audioStartTime - A unix timestamp (in miliseconds) when the audio start event fired.
 * @property {number} audioEndTime - A unix timestamp (in miliseconds) when the audio start event fired.
 * @interface
 */

/**
 * A callback function for the page data event.
 * @callback pageDataCallback
 * @param {(AttentionEvent|AudioEvent)} details - FIXME.
 */

/**
 * Options when adding a page data event listener.
 * @typedef {Object} PageDataOptions
 * @property {Array<string>} [matchPattern=[]] - The webpages of interest for the measurement, specified with WebExtensions match patterns.
 * @property {boolean} [privateWindows=false] - Whether to measure pages in private windows.
 */

/**
 * Function to start measurement when a listener is added
 * TODO: deal with multiple listeners with different match patterns
 * @private
 * @param {EventCallbackFunction} listener - new listener being added
 * @param {PageDataOptions} options - configuration for the events to be sent to this listener
 */
function addListener(listener, options) {
    startMeasurement(options);
}

/**
 * Function to end measurement when the last listener is removed
 * @private
 * @param {EventCallbackFunction} listener - listener that was just removed
 */
function removeListener(listener) {
    if (!this.hasAnyListeners()) {
        stopMeasurement();
    }
}

/**
 * The registered page navigation content script.
 * @private
 * @type {RegisteredContentScript|null}
 */
let registeredContentScript = null;

/**
 * Whether to notify the page data listener about private windows.
 * @private
 */
let notifyAboutPrivateWindows = false;

/**
 * A function that is called when the content script sends a page data event message.
 * @private
 * @param {PageData} pageData - Information about the page.
 */
function pageDataListener(pageData) {
    // If the page is in a private window and the module should not measure private windows,
    // ignore the page
    if(!notifyAboutPrivateWindows && pageData.privateWindow)
        return;

    // Delete the type string from the content script message
    // There isn't (yet) a good way to document this in JSDoc, because there isn't support
    // for object inheritance
    delete pageData.type;

    onPageData.notifyListeners([ pageData ]);
}

/**
 * This function will start the attention measurement. 
 * It
 * - initializes the PageManager module from WebScience 
 * - registers a content script, aattention-collector.js
 * - registers listeners RS01.attentionEvent and RS02.audioEvent
 * 
 * @function 
 * @param {PageDataOptions} options - A set of options for the measurement.
 */
export async function startMeasurement({
    matchPatterns = [ ],
    privateWindows = false
}) {
    await PageManager.initialize();

    notifyAboutPrivateWindows = privateWindows;

    registeredContentScript = await browser.contentScripts.register({
        matches: matchPatterns,
        js: [{
            file: "/src/attention-collector.js"
        }],
        runAt: "document_start"
    });
    /**
     * @event
     */
    Messaging.registerListener("RS01.attentionEvent", pageDataListener, {
        pageId: "string",
        url: "string",
        referrer: "string",
        pageVisitStartTime: "number",
        pageVisitStopTime: "number",
        duration: "number",
        maxRelativeScrollDepth: "number",
        maxPixelScrollDepth: "number",
        privateWindow: "boolean",
        reason: "string",
        title: "string",
        ogType: "string",
        ogDescription: "string"
    });

    Messaging.registerListener("RS01.audioEvent", pageDataListener, {
        pageId: "string",
        url: "string",
        referrer: "string",
        pageVisitStartTime: "number",
        pageVisitStopTime: "number",
        duration: "number",
        audioStartTime: "number",
        audioEndTime: "number",
        privateWindow: "boolean",
        reason: "string",
        title: "string",
        ogType: "string",
        ogDescription: "string"
    });
}

/**
 * This function will stop the attention measurement.
 * 
 */
export async function stopMeasurement() {
    Messaging.unregisterListener("RS01.attentionEvent", pageDataListener);
    Messaging.unregisterListener("RS01.audioEvent", pageDataListener);
    registeredContentScript.unregister();
    registeredContentScript = null;
    notifyAboutPrivateWindows = false;
}

/**
 * An event that is fired when an attention event is emitted.
 * This is the main function to be consumed. `pageDataCallback` is a function
 * that has an `AudioEvent` or `AttentionEvent` as the first argument.
 * @type {Events.Event<pageDataCallback, PageVisitStartListenerOptions>}
 */
 export const onPageData = new Events.Event({
    addListenerCallback: addListener,
    removeListenerCallback: removeListener});