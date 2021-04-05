export const sharedEventProperties = {
    "eventType": {
      "type": "string",
      "description": "the type of event this object represents",
      "enum": ["attention", "audio"]
    },
    "pageId": {
        "type": "string",
        "description": "each page ID is 128-bit value, randomly generated with the Web Crypto API and stored as a hexadecimal `String`. While this representation is less efficient than a `Uint8Array` or similar, it is more convenient for development and debugging. The page ID is available in the content script environment."
      },
      "canonicalOrOGURL": {
        "type": "string",
        "description": "The canonical URL as found in the the page's head element (e.g. <link rel='canonical' href='...' />). If the canonical URL isn't present, looks for and uses the og:url tag contents. if neither are present, will be an empty string."
      },
      "origin": {
        "type": "string",
        "description": "the origin of the URL associated with the page visit. Calculated by applying new URL(url).origin. See https://developer.mozilla.org/en-US/docs/Web/API/URL/origin"
      },
      "referrerOrigin": {
        "type": "string",
        "description":'The origin of the referrer URL for the page loading in the tab, or `""` if there is no referrer.'
      },
      "pageVisitStartTime": {
        "type": "integer",
        "description": "a unix timestamp in miliseconds specifying the start time of the page visit"
      },
      "pageVisitStopTime": {
        "type": "integer",
        "description": "a unix timestamp in miliseconds specifying the start time of the page visit. NOTE: this field will not necessarily represent the page visit stop time, just the largest time value at the time of the event creation. For a given page id, look for the largest value of pageVisitStopTime to get more accurate information."
      },
      "duration": {
        "type": "integer",
        "description": "duration of the event in miliseconds"
      },
      "eventStartTime": { 
        "type": "integer", 
        "description": "a unix timestamp in miliseconds specifying the start time of the event" 
      },
      "eventStopTime": { 
        "type": "integer", 
        "description": "a unix timestamp in miliseconds specifying the stop time of the event" 
      },
      "eventTerminationReason": {
        "type": "string",
        "description": "user-initiated reason this event ended"
      },
      "title": {
        "type": "string",
        "description": "the contents of the title element in the head of the page"
      },
      "description": {
        "type": "string",
        "description": "the og:description meta tag contents. If this isn't supplied, then attempts to look at the meta description"
      },
      "ogType": {
        "type": "string",
        "description": "the og:type meta tag contents"
      }
}

export const requiredEvents = [
  // note that pageVisitStopTime is not a required field.
  "eventType", "pageId", "url", "referrer", "pageVisitStartTime",
  "duration", "eventStartTime", "eventStopTime", "eventTerminationReason",
  "description", "title", "ogType"
]

export const attentionEventProperties = {
  "maxPixelScrollDepth": {
    "type": "integer",
    "description": "the largest scroll pixel depth reached on the page"
  },
  "maxRelativeScrollDepth": {
    "type": "number",
    "description": "the largest depth reach on the page, as a proportion of the total page height"
  },
  "scrollHeight": {
    "type": "number",
    "description": "the total scroll height of the page, taken from document.documentElement.scrollHeight"
  }
}

export const audioEventProperties = {
}