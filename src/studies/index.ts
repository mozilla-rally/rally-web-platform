import { Browser } from "./Browser";
import { currentBrowserType, isEmulatorMode, isTest } from "./environment";
import type { Study } from "./Study";

export const firefoxStudies: Study[] = [
  {
    name: "Facebook Pixel Hunt",
    tags: [
      "social media"
    ],
    icons: {
      32: "https://addons.mozilla.org/user-media/addon_icons/2732/2732005-32.png",
      64: "https://addons.mozilla.org/user-media/addon_icons/2732/2732005-64.png",
      128: "https://addons.mozilla.org/user-media/addon_icons/2732/2732005-128.png"
    },
    browser: Browser.FireFox,
    order: 1,
    addonId: "facebook-pixel-hunt@rally.mozilla.org",
    authors: {
      url: "https://addons.mozilla.org/en-US/firefox/addon/facebook-pixel-hunt/",
      name: "Mozilla Rally and the Markup"
    },
    endDate: "2022-07-13",
    version: "0.1.6",
    studyEnded: false,
    description: "According to its own policy, Facebook may collect information about you across the web even if you don\u2019t have a Facebook account. One way Facebook performs this tracking is through a network of \u201Cpixels\u201D that may be installed on many of the sites you visit. By joining this study, you will help Rally and The Markup investigate and report on where Facebook is tracking you and what kind of information they are collecting.",
    studyPaused: false,
    downloadLink: "https://addons.mozilla.org/firefox/downloads/latest/facebook-pixel-hunt",
    schemaNamespace: "rally-markup-legacy-fb-pixel-hunt",
    studyDetailsLink: "https://rally.mozilla.org/current-studies/facebook-pixel-hunt/index.html",
    minimumCoreVersion: "1.3.7",
    dataCollectionDetails: [
      "The data sent to Facebook through Facebook Pixels",
      "The URLs of the web pages you browse",
      "The time you spend browsing pages",
      "The presence of Facebook login cookies in your browser",
      "A study survey that the user completes"
    ]
  },
  {
    name: "Political and COVID-19 News",
    tags: [
      "misinformation",
      "social media"
    ],
    icons: {
      32: "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-32.png?modified=41769f42",
      64: "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-64.png?modified=41769f42",
      128: "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-128.png?modified=41769f42"
    },
    addonId: "princeton-news-study@rally.mozilla.org",
    authors: {
      name: "Researchers at Princeton"
    },
    browser: Browser.FireFox,
    endDate: "2021-12-14",
    version: "2.0.3",
    studyEnded: false,
    description: "In a collaboration between researchers at Princeton University's Center for Information Technology Policy and Mozilla, this study seeks to examine the flow of both political and COVID-19 related news information across the internet. During the enrollment process, you'll receive more information about the study and you'll be asked by researchers at Princeton to consent to participation.",
    studyPaused: true,
    downloadLink: "https://addons.mozilla.org/firefox/downloads/latest/political-and-covid19-news",
    schemaNamespace: "pioneer-citp-news-disinfo-two",
    studyDetailsLink: "https://rally.mozilla.org/past-studies/political-and-covid-19-news-v2/",
    minimumCoreVersion: "1.3.4",
    dataCollectionDetails: [
      "Visits, shares, and exposures to specific websites from an established list to spread authoritative information and disinformation",
      "Whether you post links to these websites on social media",
      "Your Rally demographics and a short Qualtrics survey"
    ]
  },
  {
    name: "Beyond the Paywall",
    tags: [
      "advertising",
      "news"
    ],
    icons: {
      32: "https://addons.cdn.mozilla.net/user-media/addon_icons/2709/2709123-32.png?modified=d0ad1d1b",
      64: "https://addons.cdn.mozilla.net/user-media/addon_icons/2709/2709123-64.png?modified=d0ad1d1b",
      128: "https://addons.cdn.mozilla.net/user-media/addon_icons/2709/2709123-128.png?modified=d0ad1d1b"
    },
    browser: Browser.FireFox,
    order: 2,
    addonId: "beyond-the-paywall@rally.mozilla.org",
    authors: {
      name: "Researchers at Stanford GSB"
    },
    endDate: "2022-12-31",
    version: "0.1.3",
    studyEnded: false,
    description: "Local newspapers are essential in the chain of democratic accountability, but changes in the economics of how news is produced, delivered and consumed threaten their survival. This project measures your engagement with news from different outlets in response to newsworthy events at the local and national scale. The results will help build our understanding of how the modern news environment works, and which alternative funding models for local journalism may be feasible.",
    studyPaused: false,
    downloadLink: "https://addons.mozilla.org/firefox/downloads/latest/beyond-the-paywall",
    schemaNamespace: "pioneer-sgsb-beyond-the-paywall",
    studyDetailsLink: "https://rally.mozilla.org/current-studies/beyond-the-paywall/",
    minimumCoreVersion: "1.3.4",
    dataCollectionDetails: [
      "On specific news websites: the full URL of the website you are on, the full text of the article you are reading, the size of ads on the article\u2019s webpage, and the amount of time you spend browsing and playing media",
      "On news aggregators, search engines, and social media websites: the domain (no webpage information) of the website, and the amount of time you spend browsing and playing media",
      "All other websites: the amount of time you spend browsing and playing media (no domain or webpage information)"
    ]
  },
  {
    name: "Your Time Online and \"Doomscrolling\"",
    tags: [
      "community insights",
      "product discovery"
    ],
    icons: {
      32: "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-32.png",
      64: "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-64.png",
      128: "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-128.png"
    },
    addonId: "rally-study-01@mozilla.org",
    authors: {
      name: "Mozilla Rally Team"
    },
    browser: Browser.FireFox,
    endDate: "2021-10-13",
    version: "0.1.3",
    studyEnded: false,
    description: "When you participate in this study you are helping Rally discover how our community browses the internet. We will explore interesting online patterns like \"doomscrolling\" \u2013 the popular term for browsing outrageous or sad online news for a long period of time. Our findings will lead to new Rally features or blog posts about aggregate online behavior.",
    studyPaused: true,
    downloadLink: "https://addons.mozilla.org/firefox/downloads/latest/time-online-and-doomscrolling",
    schemaNamespace: "rally-zero-one",
    studyDetailsLink: "https://rally.mozilla.org/current-studies/your-time-online-and-doomscrolling/",
    minimumCoreVersion: "1.3.4",
    dataCollectionDetails: [
      "Specific actions you take while browsing the web: loading a new URL, changing a tab, watching a video, or listening to audio (we do not collect the audio you are listening to, just that you have performed that action)",
      "The domains you visit as you browse the web (e.g., wikipedia.org) and the title, description, and type of page that you're on (e.g., article, video, website)",
      "The time spent on each page and how far you scroll down a page"
    ]
  },
  {
    name: "Search Engine Usage and Result Quality",
    tags: [
      "internet usage"
    ],
    icons: {
      32: "https://addons.mozilla.org/user-media/addon_icons/2735/2735426-32.png",
      64: "https://addons.mozilla.org/user-media/addon_icons/2735/2735426-64.png",
      128: "https://addons.mozilla.org/user-media/addon_icons/2735/2735426-128.png"
    },
    order: 3,
    addonId: "search-engine-usage@rally.mozilla.org",
    authors: {
      name: "Researchers at Princeton University"
    },
    browser: Browser.FireFox,
    endDate: "2022-12-31",
    version: "1.0.1",
    studyEnded: false,
    description: "The goal of this research is to understand how users interact with and make choices about search engines. Understanding the search engine marketplace will inform competition policy, promoting a diverse digital ecosystem that benefits users. This study may prompt you to consider your choice of search engine in your browser settings, and we may minimize or omit search results that highlight a search engine\u2019s own services or a direct answer from a third-party source. You will remain free to select any search engine or any other online service of your choice, and we will not alter any ordinary search results or search engine advertising.",
    studyPaused: false,
    downloadLink: "https://addons.mozilla.org/firefox/downloads/latest/search-engine-usage-study",
    schemaNamespace: "pioneer-legacy-search-engine-usage",
    studyDetailsLink: "https://rally.mozilla.org/current-studies/search-engine-usage/",
    minimumCoreVersion: "1.4.0",
    dataCollectionDetails: [
      "Your responses to survey questions, including the Rally demographics survey.",
      "How you use search engines and information about the search engine result pages that you navigate. For example, we may collect that you ran a search in a topic category, how the search results were organized on the page, and whether you clicked any results.",
      "How often you used search engines prior to joining the study, going back up to 30 days in your browser\u2019s history.",
      "If we prompt you to consider your choice of search engine, how you interact with that prompt.",
      "How popular online services appear in your search results. These services are specified in a predefined list, and include categories such as mapping, shopping, and travel.",
      "Your interactions with these same online services, including whether you make a purchase.",
      "We will not collect the URLs of web pages that you visit, the content of web pages that you visit, your search queries, or the details of any transactions that you complete."
    ]
  },
  {
    name: "Political and COVID-19 News",
    tags: [
      "misinformation",
      "social media"
    ],
    icons: {
      32: "https://addons.mozilla.org/user-media/addon_icons/2735/2735428-32.png",
      64: "https://addons.mozilla.org/user-media/addon_icons/2735/2735428-64.png",
      128: "https://addons.mozilla.org/user-media/addon_icons/2735/2735428-128.png"
    },
    order: 4,
    addonId: "princeton-political-and-covid-19-news-study@rally.mozilla.org",
    authors: {
      name: "Researchers at Princeton"
    },
    browser: Browser.FireFox,
    endDate: "2022-12-14",
    version: "3.0.1",
    studyEnded: false,
    description: "In a collaboration between researchers at Princeton University's Center for Information Technology Policy and Mozilla, this study seeks to examine the flow of both political and COVID-19 related news information across the internet. During the enrollment process, you'll receive more information about the study and you'll be asked by researchers at Princeton to consent to participation.",
    studyPaused: false,
    downloadLink: "https://addons.mozilla.org/firefox/downloads/latest/political-covid-19-news-study",
    schemaNamespace: "pioneer-citp-news-disinfo-two",
    studyDetailsLink: "https://rally.mozilla.org/current-studies/political-and-covid-19-news-v3/",
    minimumCoreVersion: "1.4.0",
    dataCollectionDetails: [
      "Visits, shares, and exposures to specific websites from an established list to spread authoritative information and disinformation",
      "Whether you post links to these websites on social media",
      "Your Rally demographics and a short Qualtrics survey"
    ]
  }
];

export const chromeStudies: Study[] = [
  {
    name: "Facebook Pixel Hunt",
    authors: {
      name: "Mozilla Rally and the Markup"
    },
    dataCollectionDetails: [
      "The data sent to Facebook through Facebook Pixels",
      "The URLs of the web pages you browse",
      "The time you spend browsing pages",
      "The presence of Facebook login cookies in your browser",
      "A study survey that the user completes"],
    browser: Browser.Chrome,
    description: `According to its own policy, Facebook may collect information about you across the web even if you don't have a Facebook account. One way Facebook performs this tracking is through a network of \"pixels\" that may be installed on many of the sites you visit. By joining this study, you will help Rally and The Markup investigate and report on where Facebook is tracking you and what kind of information they are collecting.`,
    downloadLink: "",
    endDate: "2022-07-13",
    icons: {
      32: "https://addons.mozilla.org/user-media/addon_icons/2732/2732005-32.png",
      64: "https://addons.mozilla.org/user-media/addon_icons/2732/2732005-64.png",
      128: "https://addons.mozilla.org/user-media/addon_icons/2732/2732005-128.png"
    },
    studyDetailsLink: "",
    studyEnded: false,
    studyId: "facebookPixelHunt",
    studyPaused: false,
    tags: [
      "social media"],
    version: "0.2.0"
  }
];

export const testChromeStudies: Study[] = [{
  name: "Rally Test",
  icons: {},
  authors: {
    name: "Rally Devs",
  },
  browser: Browser.Chrome,
  version: "0.0.1",
  addonId: "abc123",
  studyId: "exampleStudy1",
  downloadLink: "http://example.com",
  endDate: "2021-10-27",
  studyEnded: false,
  studyPaused: false,
  description: "Test",
  studyDetailsLink: "http://example.com",
  dataCollectionDetails: ["Nothing"],
  tags: ["test"],
}];

export const testFirefoxStudies: Study[] = [{
  name: "Rally Test",
  icons: {},
  authors: {
    name: "Rally Devs",
  },
  browser: Browser.FireFox,
  version: "0.0.1",
  addonId: "abc123",
  studyId: "exampleStudy1",
  downloadLink: "http://example.com",
  endDate: "2021-10-27",
  studyEnded: false,
  studyPaused: false,
  description: "Test",
  studyDetailsLink: "http://example.com",
  dataCollectionDetails: ["Nothing"],
  tags: ["test"],
}];

function getBrowserStudies() {
  if (isTest) {
    return testChromeStudies;
  }

  if (currentBrowserType === Browser.Chrome) {
    if (isEmulatorMode) {
      return testChromeStudies;
    }

    return chromeStudies;
  }

  if (currentBrowserType === Browser.FireFox) {
    if (isEmulatorMode) {
      return testFirefoxStudies;
    }

    return firefoxStudies;
  }
}

export function getAllStudiesForBrowser() {
  const studies = getBrowserStudies();
  return studies.sort((a, b) => {
    if (a.order && b.order) {
      return a.order - b.order;
    }

    return (a.order) ? -1 : 1;
  });
}