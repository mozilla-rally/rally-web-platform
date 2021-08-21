import initializeFirebase from "../src/lib/stores/initialize-firebase.js";
import config from "../firebase.config.js";
import { setDoc, collection } from "firebase/firestore";

const { db } = initializeFirebase(config);

// one-time opp to put the studies into firebase

function addStudiesToFirebase() {
    const studies = [
      {
        "name": "The Rally Web Spike",
        "icons": {
          "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-32.png",
          "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-64.png",
          "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2695/2695892-128.png"
        },
        "authors": {
          "name": "Mozilla Rally Team"
        },
        "version": "0.1.3",
        "addonId": "rally-web-platform-test@rally.mozilla.org",
        "downloadLink": "https://addons.mozilla.org/firefox/downloads/latest/time-online-and-doomscrolling",
        "endDate": "2021-10-13",
        "studyEnded": false,
        "studyPaused": false,
        "description": "This is a really, really cool demo utilizing Firestore. I can't wait to show you how it works.",
        "studyDetailsLink": "https://rally.mozilla.org/current-studies/your-time-online-and-doomscrolling/",
        "dataCollectionDetails": [
          "Pretty much nothing!",
        ],
        "tags": ["product discovery"],
        "schemaNamespace": "rally-zero-one"
      },
      {
        "name": "Political and COVID-19 News",
        "icons": {
          "32": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-32.png",
          "64": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-64.png",
          "128": "https://addons.cdn.mozilla.net/user-media/addon_icons/2706/2706717-128.png"
        },
        "authors": {
          "name": "Researchers at Princeton"
        },
        "version": "2.0.0",
        "addonId": "princeton-news-study@rally.mozilla.org",
        "downloadLink": "https://github.com/citp/news-disinformation-study/releases/download/v2.0.1/princeton_university_news_study-2.0.1.xpi",
        "endDate": "2021-10-27",
        "studyEnded": false,
        "studyPaused": false,
        "description": "In a collaboration between researchers at Princeton University's Center for Information Technology Policy and Mozilla, this study seeks to examine the flow of both political and COVID-19 related news information across the internet. During the enrollment process, you'll receive more information about the study and you'll be asked by researchers at Princeton to consent to participation.",
        "studyDetailsLink": "https://rally.mozilla.org/current-studies/political-and-covid-19-news/",
        "dataCollectionDetails": [
          "Visits, shares, and exposures to specific websites from an established list to spread authoritative information and disinformation",
          "Whether you post links to these websites on social media",
          "Your Rally demographics and a short Qualtrics survey"
        ],
        "tags": ["misinformation", "social media"],
        "schemaNamespace": "pioneer-citp-news-disinfo-two"
      }
    ]
  
    studies.forEach(study => {
        setDoc(collection(db, "studies", study.addonId), { merge: true });
    });
    return studies;
  }
  
addStudiesToFirebase();
  
