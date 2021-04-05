# Manually Testing Rally Study 01

## setup

Make sure to go through all the installation requirements in [README.md](README.md#requirements).

You will need to run the following commands in this repository:

```
# install all the dependencies for building this study
npm install

# spin up the study in developer mode. This will
# launch another version of Firefox Nightly with the study web extension installed.
npm run watch
```

Once you are running the study in developmer mode, pull up the [Multiprocess Browser Console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console). You can open the Browser Console in one of two ways:

1. from the menu: select "Browser Console" from the Web Developer submenu in the Firefox Menu (or Tools menu if you display the menu bar or are on macOS).
2. from the keyboard: press `Ctrl+Shift+J` (or `Cmd+Shift+J` on a Mac).

We will use only the `debug` and `error` views here. These appear below the trashcan icon in the Browser Console window. Once you have found the `warnings`, `logs`, and `info` options, feel free to de-select them. You will otherwise likely see through this QA a very large number of messages appear in the console. This study utilizes the `debug` view for messages, which is typically a little less noisy.

## 1. testing the attention event collection

### a. test that a normal page load works

- open a new tab and go to `https://wikipedia.org`.
- click on any link on the page to begin a new page visit. For instance, click on the `Wiktionary` link on the left below the fold.
- in the **Browser Console** you should see a debug log that starts with `RS01.event`, along with a data payload that looks something like this:

```javascript
{
  "pageId": "59aad732a2bb6b3b9efbe80813711475",
  "canonicalOrOGURL": "",
  "origin": "https://www.wikipedia.org",
  "referrerOrigin": "",
  "pageVisitStartTime": 1617401158259,
  "pageVisitStopTime": 1617401161786,
  "duration": 3295, // this value should be comparable to the time you spent on the page before switching
  "maxRelativeScrollDepth": 0.8798882681564246,
  "maxPixelScrollDepth": 945,
  "scrollHeight": 1074,
  "eventTerminationReason": "page-visit-stop",  // check that your value matches this
  "title": "Wikipedia",
  "ogType": "",
  "description": "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.",
  "eventStartTime": 1617401158491,
  "eventStopTime": 1617401161786,
  "eventType": "attention" // check that your value matches this
}
```
### b. test that switching tabs & closing tabs works

- open a new tab and go to `https://wikipedia.org`.
- open another tab and go to `https://youtube.com`.
- switch back to the tab that has `https://wikipedia.org` loaded in it.
- in the **Browser Console** you should see a debug log that starts with `RS01.event`, along with a data payload.
```javascript
{
  "pageId": "9341e4dc5d35d6ac26687193be2c6535",
  "canonicalOrOGURL": "https://www.youtube.com/",
  "origin": "https://www.youtube.com",
  "referrerOrigin": "",
  "pageVisitStartTime": 1617135199869,
  "pageVisitStopTime": 1617135206895,
  "duration": 985, // this value should be comparable to the time you spent on the page before switching
  "maxRelativeScrollDepth": 0,
  "maxPixelScrollDepth": 0,
  "scrollHeight": 0,
  "eventTerminationReason": "tab-switched-away", // check that your value matches this
  "title": "YouTube",
  "ogType": "",
  "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  "eventStartTime": 1617135205910,
  "eventStopTime": 1617135206895,
  "eventType": "attention" // check that your value matches this
}
```
- now close the tab where Wikipedia was loaded. In the **Browser Console** you should see a debug log that starts with `RS01.event`, along with a data payload that looks something like this:
```javascript
{
  "pageId": "2e9109c1a64eb6615fa434f418ce6c77",
  "canonicalOrOGURL": "",
  "origin": "https://www.wiktionary.org",
  "referrerOrigin": "https://www.wikipedia.org",
  "pageVisitStartTime": 1617135086813,
  "pageVisitStopTime": 1617135352548, 
  "duration": 2569, // this value should be comparable to the time you spent on the page before closing
  "maxRelativeScrollDepth": 0.5724815724815725,
  "maxPixelScrollDepth": 932,
  "scrollHeight": 1628,
  "eventTerminationReason": "page-visit-stop", // check that your value matches this
  "title": "Wiktionary",
  "ogType": "",
  "description": "",
  "eventStartTime": 1617135349979,
  "eventStopTime": 1617135352548,
  "eventType": "attention" // check that your value matches this
}
```
### c. test that switching windows works

- open a new tab and go to `https://wikipedia.org`
- open a new window & tab, in in that new window / tab, go to `https://youtube.com`.
- click back to the first window where the Wikipedia page is open.
- in the **Browser Console** you should see a debug log that starts with `RS01.event`, along with a data payload.

```javascript
{
  "pageId": "f3d3f2d6f5a6f767ab0081d2d1f6dbcc",
  "canonicalOrOGURL": "https://www.youtube.com/",
  "origin": "https://www.youtube.com",
  "referrerOrigin": "",
  "pageVisitStartTime": 1617135289520,
  "pageVisitStopTime": 1617135296631,
  "duration": 2523,  // this value should be comparable to the time you spent on the page before switching
  "maxRelativeScrollDepth": 0,
  "maxPixelScrollDepth": 0,
  "scrollHeight": 0,
  "eventTerminationReason": "window-focus-lost", // check that your value matches this
  "title": "YouTube",
  "ogType": "",
  "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  "eventStartTime": 1617135294108,
  "eventStopTime": 1617135296631,
  "eventType": "attention" // check that your value matches this
}
```
### d. test that browser inactivity will end the attention event

- open a new tab and go to `https://wikipedia.org`.
- remove your hands from your keyboard and / or mouse, and wait around 15 seconds.
- - in the **Browser Console** you should see a debug log that starts with `RS01.event`, along with a data payload that should look like this:
```javascript
{
  "pageId": "e196594a6aa7edb7843ae1561945e899",
  "canonicalOrOGURL": "",
  "origin": "https://www.wikipedia.org",
  "referrerOrigin": "",
  "pageVisitStartTime": 1617135507676,
  "pageVisitStopTime": 1617136469767,
  "duration": 14938, // check that your value is close to 15000 or so
  "maxRelativeScrollDepth": 0.8677839851024208,
  "maxPixelScrollDepth": 932,
  "scrollHeight": 1074,
  "eventTerminationReason": "browser-idle", // check that your value matches this
  "title": "Wikipedia",
  "ogType": "",
  "description": "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.",
  "eventStartTime": 1617136454829,
  "eventStopTime": 1617136469767,
  "eventType": "attention" // check that your value matches this
}
```

## 2. testing the audio event collection

Audio events behave somewhat like attention events, with a few special distinctions:
- audio events and attention events and be concurrent. This is how WebScience has implemented the attention & audio model.
- an audio event may still be active even if the attention event isn't.

**NOTE**: audio events typically add around 3 seconds to the total `duration`. This is becuse the audio listener in WebScience is set to a cadence that waits a few seconds before sending the "end of audio" event.
### a. test that an audio event finishes when audio stops or tab is closed

- open a new tab and go to `https://youtube.com`.
- click on any video and make sure it is playing & that the audio in the player is not muted.
- after a few seconds, stop the video.
- in the **Browser Console** you should see a debug log that starts with `RS01.event`, along with a data payload that looks like this:
```javascript
{
  "pageId": "1c46f00f3b759b610eed697b2ed5ab7c",
  "canonicalOrOGURL": "https://www.youtube.com/",
  "origin": "https://www.youtube.com",
  "referrerOrigin": "",
  "pageVisitStartTime": 1617401335251,
  "pageVisitStopTime": 1617401341532,
  "duration": 4396,// check that this is comparable to about how long, plus a few seconds
  "eventTerminationReason": "audio-event-finished", // check that your value matches this
  "title": "lofi hip hop radio - beats to relax/study to - YouTube",
  "ogType": "",
  "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  "eventStartTime": 1617401337136,
  "eventStopTime": 1617401341532,
  "eventType": "audio" // check that your value matches this
}
```
- open another tab and to go `https://wikipedia.org`.
- click back into the tab where the Youtube video was, and resume play.
- while the video is playing, close the tab with the video.
- After you close the tab, look in the **Browser Console** you should see two separate events that are very similar. Both start with `RS01.event`, along with a data payload.
- here is the *audio event*:
```javascript
{
  "pageId": "1c46f00f3b759b610eed697b2ed5ab7c",
  "canonicalOrOGURL": "https://www.youtube.com/",
  "origin": "https://www.youtube.com",
  "referrerOrigin": "",
  "pageVisitStartTime": 1617401335251,
  "pageVisitStopTime": 1617401451852,
  "duration": 4550, // check that this value is comparable to about how long the audio played, plus a few seconds
  "eventTerminationReason": "page-visit-stop", // check that your value matches this
  "title": "lofi hip hop radio - beats to relax/study to - YouTube",
  "ogType": "",
  "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  "eventStartTime": 1617401447302,
  "eventStopTime": 1617401451852,
  "eventType": "audio" // check that your value matches this
}
```
- there will be an *atttention event* that is almost identical as well.