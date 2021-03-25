import EventStreamManager from "./event-stream-manager";

const stream = new EventStreamManager();

stream.onPageData(async (data) => {
    console.debug('output', `
${data.url}
${data.reason}
${data.referrer}
`, 
    data,
    "-------------------------");
    await stream.storage.push(data);
});

function openPage() {
    browser.runtime.openOptionsPage().catch(e => {
      console.error(`Study Add-On - Unable to open the control panel`, e);
    });
  }
  
  browser.browserAction.onClicked.addListener(openPage);