/**
 * Content script attention-collector for RS01.
 *
 * Responsible for the collection of the `RS01.attentionEvent` and `RS01.audioEvent`, which is sent
 * to attention-reporter.js.
 * 
 * This content script is organized as follows:
 * - constants
 * - DOM element collection functions
 * - collection-sending functions
 * - callbacks used in the PageManager events system
 * 
 * ## Known Issues
 *   * When sending page data during a page visit stop event, sometimes
 *     Firefox generates an error ("Promise resolved while context is inactive")
 *     because the content script execution environment is terminating while the
 *     message sending Promise remains open. This error does not affect functionality,
 *     because we do not depend on resolving the Promise (i.e., a response to the
 *     page visit stop message).
 * 
 * @module RS01.attention-collector
 */

// Tell eslint that PageManager isn't actually undefined
/* global PageManager */

// Outer function encapsulation to maintain unique variable scope for each content script
(function () {
    // Inner function encapsulation to wait for PageManager load
    const attentionCollector = function() {
        // CONSTANTS
        /**
         * How long the page has had the user's attention.
         * @type {number}
         */
        let attentionDuration = 0;

        /**
         * When the page attention state was last updated.
         * @type {number}
         */
        let lastAttentionUpdateTime = 0;

        /**
         * How long the page has played audio.
         * @type {number}
         */
        let audioDuration = 0;

        /**
         * When the page last began playing audio.
         * @type {number}
         */
        let lastAudioUpdateTime = 0;

        /**
         * How often (in milliseconds) to check maximum page scroll depth.
         * @constant
         * @type {number}
         */
        const scrollDepthUpdateInterval = 1000;

        /**
         * How often (in milliseconds) after the first time the page gains attention (or after
         * page visit start if `scrollDepthWaitForAttention` is `false`) to begin checking the
         * maximum relative scroll depth. A delay is helpful because some pages have placeholder
         * content while loading (e.g., on YouTube) or lazily load contnt (e.g., on Twitter).
         * @constant
         * @type {number}
         */
        const scrollDepthUpdateDelay = 2000;

        /**
         * The minimum page height required (in pixels, using `document.documentElement.offsetHeight` rather
         * than `scrollHeight` or `clientHeight` to avoid clamping to screen size) to check the maximum
         * relative scroll depth. A minimum height is helpful because some pages have placeholder content
         * while loading (e.g., on YouTube) or lazily load contnt (e.g., on Twitter).
         * @constant
         * @type {number}
         */
        const scrollDepthMinimumHeight = 50;

        /**
         * Whether to wait until the first time the page gains attention before checking the maximum relative
         * scroll depth. Delaying until the first instance of attention is helpful because some pages have
         * placeholder content while loading (e.g., on YouTube) or lazily load contnt (e.g., on Twitter).
         * @constant
         * @type {boolean}
         */
        const scrollDepthWaitForAttention = true;

        /**
         * The first time the page had attention, or 0 if the page has never had attention.
         * @type {number}
         */
        let firstAttentionTime = 0;

        /**
         * The maximum relative scroll depth, defined as the depth of the bottom of
         * the content window divided by the depth of the page:
         * (`window.scrollY` + `document.documentElement.clientHeight`) / `document.documentElement.scrollHeight`.
         * Note that `document.documentElement.clientHeight` and `document.documentElement.scrollHeight`
         * include padding but not margin or border.
         * @type {number}
         */

        let maxRelativeScrollDepth = 0;
        /** 
         * The maximum absolute scroll depth in pixels, defined as the depth of the bottom of
         * the content window.
         * @type {number}
         */
        let maxPixelScrollDepth = 0;

        /** 
         * The total scroll height of the page.
         * @type {number}
         */
        let scrollHeight = 0;

        /**
         * An interval timer ID for checking scroll depth.
         * @type {number}
         */
        let scrollDepthIntervalId = 0;

        /**
         * The title element contents of the page.
         * @type {string}
         */
        let title = "";

        /**
         * The og:description element contents of the page.
         * @type {string}
         */
        let ogDescription = "";

        /**
         * The og:type meta element.
         * @type {string}
         */
        let ogType = "";

        /** 
         * The start time (unix timestamp in ms) the attention event started.
         * @type {number}
         */
        let attentionStartTime = 0;
        /** 
         * The start time (unix timestamp in ms) the attention event stopped.
         * @type {number}
         */
        let attentionStopTime = 0;
        /** 
         * The start time (unix timestamp in ms) the audio event started.
         * @type {number}
         */
        let audioStartTime = 0;
        /** 
         * The start time (unix timestamp in ms) the audio event stopped.
         * @type {number}
         */
        let audioStopTime = 0;

        // DOM ELEMENT COLLECTION FUNCTIONS
        /**
         * 
         * @param {*} documentElement 
         * @returns {string} the content or innerText of the selected DOM element
         */
        function getContentsHavingSelector(str, documentElement) {
            const e = documentElement.querySelector(str);
            return e === null ? undefined : e.content || e.innerText;
        }

        /**
         * 
         * @param {*} documentElement 
         * @returns {string} the content of the title element
         */
        function getTitle(documentElement) {
            return getContentsHavingSelector("title", documentElement);
        }
        
        /**
         * 
         * @param {*} documentElement 
         * @returns {string} the content of the meta og:type tag
         */
        function getOGType(documentElement) {
            return getContentsHavingSelector("meta[property='og:type']", documentElement);
        }

        /**
         * 
         * @param {*} documentElement 
         * @returns {string} the content of the meta og:description tag
         */
        function getOGDescription(documentElement) {
            return getContentsHavingSelector("meta[property='og:description']", documentElement);
        }

        /**
         * 
         * @param {*} documentElement 
         * @returns {string} the content of the meta description tag
         */
        function getMetaDescription(documentElement) {
            return getContentsHavingSelector("meta[name='description']", documentElement);
        }
        /**
         * Gather the measurements from the DOM.
         */
        function getDOMElements() {
            title = getTitle(document) || "";
            ogDescription = getOGDescription(document) || getMetaDescription(document) || "";
            ogType = getOGType(document) || "";
        }

        function getOrigin(url) {
            try {
                return new URL(url).origin;
            } catch {
                return "";
            }
            
        }

        // COLLECTION-SENDING FUNCTIONS
        /**
         * Send the collected attention data through the RS01.attentionCollection message namespace.
         * @param {number} timestamp unix timestamp used to note the pageVisitStopTime
         * @param {string} eventTerminationReason the reason the event has ended
         */
        function sendAttentionData(timestamp, eventTerminationReason) {
            PageManager.sendMessage({ 
                type: "RS01.attentionCollection",
                pageId: PageManager.pageId,
                origin: getOrigin(PageManager.url),
                referrerOrigin: getOrigin(PageManager.referrer),
                pageVisitStartTime: PageManager.pageVisitStartTime,
                pageVisitStopTime: timestamp,
                duration: attentionDuration,
                maxRelativeScrollDepth,
                maxPixelScrollDepth,
                scrollHeight,
                eventTerminationReason,
                title,
                ogType,
                description: ogDescription,
                eventStartTime: attentionStartTime,
                eventStopTime: attentionStopTime,
                eventType: "attention"
            });
        }

        /**
         * Send the collected attention data through the RS01.audioCollection message namespace.
         * @param {number} timestamp unix timestamp used to note the pageVisitStopTime
         * @param {string} eventTerminationReason the reason the event has ended
         */
        function sendAudioData(timestamp, eventTerminationReason) {
            PageManager.sendMessage({ 
                type: "RS01.audioCollection",
                pageId: PageManager.pageId,
                origin: getOrigin(PageManager.url),
                referrerOrigin: getOrigin(PageManager.referrer),
                pageVisitStartTime: PageManager.pageVisitStartTime,
                pageVisitStopTime: timestamp,
                duration: audioDuration,
                eventTerminationReason,
                title,
                ogType,
                description: ogDescription,
                eventStartTime: audioStartTime,
                eventStopTime: audioStopTime,
                eventType: "audio"
            });
        }

        // CALLBACKS USED IN THE PAGEMANAGER EVENTS SYSTEM
        /** 
         * Callback for the PageManager.onPageVisitStart event
         * @callback
         */
        const pageVisitStart = function ({ timeStamp }) {
            // Reset page attention and page audio tracking
            attentionDuration = 0;
            lastAttentionUpdateTime = timeStamp;
            firstAttentionTime = PageManager.pageHasAttention ? timeStamp : 0;
            audioDuration = 0;
            lastAudioUpdateTime = timeStamp;

            // Reset scroll depth tracking and set an interval timer for checking scroll depth
            maxRelativeScrollDepth = 0;
            scrollDepthIntervalId = setInterval(function() {
                if((scrollDepthWaitForAttention || ((Date.now() - PageManager.pageVisitStartTime) >= scrollDepthUpdateDelay)) &&
                   (!scrollDepthWaitForAttention || ((firstAttentionTime > 0) && ((Date.now() - firstAttentionTime) >= scrollDepthUpdateDelay))) &&
                   (document.documentElement.offsetHeight >= scrollDepthMinimumHeight)) {
                    
                    scrollHeight = document.documentElement.scrollHeight;

                    maxPixelScrollDepth =
                        Math.min(scrollHeight,
                            Math.max(maxPixelScrollDepth, window.scrollY + document.documentElement.clientHeight)
                        );
                    maxRelativeScrollDepth = Math.min(
                        Math.max(maxRelativeScrollDepth, (window.scrollY + document.documentElement.clientHeight) / scrollHeight),
                        1);
                   }    
            }, scrollDepthUpdateInterval);
        };

        /** 
         * Callback for the PageManager.onPageVisitStop event
         * @callback
         */
        function onPageVisitStop({ timeStamp }) {
            // Update the attention and audio durations
            if(PageManager.pageHasAttention) {
                attentionDuration = timeStamp - lastAttentionUpdateTime;
            }
            if(PageManager.pageHasAudio) {
                audioDuration = timeStamp - lastAudioUpdateTime;
            }
            
            // Clear the interval timer for checking scroll depth
            clearInterval(scrollDepthIntervalId);
            if (PageManager.pageHasAttention) {
                attentionStopTime = timeStamp;
                audioStopTime = timeStamp;
                // if the page had audio, it's time to send the audio data event.
                if (PageManager.pageHasAudio) {
                    sendAudioData(timeStamp, "page-visit-stop");
                } 
                // always send an attention event regardless of whether an audio
                // event is playing or not.
                sendAttentionData(timeStamp, "page-visit-stop");
            }
        }

        /** 
         * Callback for the PageManager.onPageAttentionUpdate event.
         * @callback
         */
        function onPageAttentionUpdate({timeStamp, reason}) {
            if(PageManager.pageHasAttention) {
                attentionStartTime = timeStamp;
                getDOMElements();
            }

            // If the page just gained attention for the first time, store the time stamp
            if(PageManager.pageHasAttention && (firstAttentionTime < PageManager.pageVisitStartTime)) {
                firstAttentionTime = timeStamp;
            }
            
            // If the page just lost attention, add to the attention duration
            // and possibly the attention and audio duration
            if(!PageManager.pageHasAttention) {
                attentionDuration = timeStamp - lastAttentionUpdateTime;
            }
            lastAttentionUpdateTime = timeStamp;
            if(!PageManager.pageHasAttention) {
                attentionStopTime = timeStamp;
                sendAttentionData(timeStamp, reason);
            }
        }

        /** 
         * Callback for the PageManager.onPageAudioUpdate event
         * @callback
         */
        function onPageAudioUpdate({ timeStamp }) {
            if (PageManager.pageHasAudio) {
                lastAudioUpdateTime = timeStamp;
                audioStartTime = timeStamp;
            } else {
                audioDuration = timeStamp - lastAudioUpdateTime;
                audioStopTime = timeStamp;
                getDOMElements();
                sendAudioData(timeStamp, "audio-event-finished");
            }
            lastAudioUpdateTime = timeStamp;
        }

        // register all the required events here.
        if (PageManager.pageVisitStarted) {
            pageVisitStart({ timeStamp: PageManager.pageVisitStartTime });
        }
        PageManager.onPageVisitStart.addListener(pageVisitStart);
        PageManager.onPageVisitStop.addListener(onPageVisitStop);
        PageManager.onPageAttentionUpdate.addListener(onPageAttentionUpdate);
        PageManager.onPageAudioUpdate.addListener(onPageAudioUpdate);
    };

    // Wait for PageManager load
    if ("PageManager" in window) {
        attentionCollector();
    } else {
        if(!("pageManagerHasLoaded" in window)) {
            window.pageManagerHasLoaded = [];
        }
        window.pageManagerHasLoaded.push(attentionCollector);
    }

})();
