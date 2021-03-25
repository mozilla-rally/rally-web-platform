import browser from "webextension-polyfill";
import { onPageData } from "./attention-reporter";
import EventStreamStorage from "./event-stream-storage";

export default class AttentionStream {
    constructor() {
        this._connectionPort = {};
        this.storage = new EventStreamStorage();
        this.initialize();
    }

    initialize() {
        // connect here for messages to the options page
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

    onPageData(callback) {
        onPageData.addListener(callback, {
            matchPatterns: ["<all_urls>"],
            privateWindows: false
        });
    }
}