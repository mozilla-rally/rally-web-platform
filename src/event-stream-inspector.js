/** 
 * This module manages the following:
 * - provides a storage endpoint for saving `AttentionEvent` and `AudioEvent` instances
 * - handles communication with the extension page that enables the user to inspect the events already collected and
 * download them
 * This functionality is hhandled through the {@link EventStreamIInspector} class.
 * @example
 * // basic usage with the `onPageData` listener from {@link attention-reporter}
 * onPageData.addListener(async (data) => {
 *  // this datapoint will be viewable on the extension page
 *  await stream.storage.push(data); 
 * }, {
 *     matchPatterns: ["<all_urls>"],
 *     privateWindows: false
 * });
 * @module EventStreamInspector
 */
import browser from "webextension-polyfill";
import EventStreamStorage from "./event-stream-storage";

/**
 * @class EventStreamInspector
 * @classdesc In dev mode, manages the following:
 * - instead of sending the data to an endpoint, it stores it locally
 * - handles communication with the extension page that enables the user to inspect the events already collected and
 * download them
 * @property {EventStreamStorage} storage - The {@link EventStreamStorage} instance.
 */
export default class EventStreamInspector {
    constructor() {
        this._connectionPort = {};
        this.storage = new EventStreamStorage();
        this.initialize();
    }

	/**
	 * Initializes the listener used to communicate with this web extension's optional
     * extension page.
	 *
	 * @private
	 */
    initialize() {
        browser.runtime.onConnect.addListener(
            p => {
                this._onPortConnected(p);
            }
        );
    }

    _onPortConnected(port) {
        const sender = port.sender;
        if ((sender.id != browser.runtime.id)) {
            console.error("Rally Study - received message from unexpected sender");
            port.disconnect();
            return;
        }

        this._connectionPort = port;
        this._connectionPort.onMessage.addListener(
            m => this._handleMessage(m, sender));
        this._connectionPort.onDisconnect.addListener(e => {
            console.log("Rally Study - disconnect or error", e);
            this._connectionPort = null;
        });
    }

    /**
     * @private
     */
    async _sendDataToUI() {
        // Send a message to the UI to update the list of studies.
        const events = await this.storage.get();
        this._connectionPort.postMessage(
            {type: "receive-data", data: events });
    }

    async _handleMessage(message) {
        switch (message.type) {
            case "get-data":
            this._sendDataToUI();
            break;
            case "reset":
            this._reset();
            break;
            default:
            return Promise.reject(
                new Error(`Rally Study - unexpected message type ${message.type}`));
        }
    }
}