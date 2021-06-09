# Rally Web Platform Spike

_status: in development_

A demo supporting a Rally Web Platform spike, investigating whether we can move to a web-centric model and away from the rally-core-addon.

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Mozilla web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)

This repository contains the code needed to build the Rally Study 01 Web Extension. 
The study submits data through [Mozilla Rally's Web Extension](https://github.com/mozilla-rally/rally-core-addon),
or can be run locally without Mozilla Rally installed on your computer.

## Quickstart

```bash
# install all dependencies
npm install

# run developer mode.
# this will run web-ext and listen for all input files, 
# and will rebuild and auto-reload for you.
npm run watch

# build the addon and output the xpi so that it can be side-loaded in Firefox Nightly.
# See the "running thiis study to collect your own data" 
# section below for further instructions.
npm run build:addon

# --- Other commands you might be interested in ---
# generate documentation for all modules in the doc/ directory.
npm run doc

# run unit tests
npm run test:unit

# build and run website
npm run build:web
npm run start:web
```

## Understanding this spike

This repository contains both the RS01 Mozilla Rally study, as well as the Svelte web UI from the Rally Core Add-on.
The intent is for a user to be able to install and manage studies from a static site, which uses authentication both on the
website and inside the study extension.

Users should be able to:

1. log into the website
2. consent to joining Rally, and also a study
3. install a study, and authenticate (to obtain the consent from step 2)
4. the study should be able to deliver a "giveback" to the user, which is unique to that user, and only available after authentication.
