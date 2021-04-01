# Rally Study 01 (RS01)

_status: in development_

An exploratory study on what sites people use and how long they use them.

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
```

## Understanding this repository

This repository contains everything need to generate documentation and build the study web extension itself.

As of this writing, this repository uses a vendored version of `web-science`, contained in `/WebScience`. We will remove this vendored version once
[we have published `0.1.0` of the library](https://github.com/mozilla-rally/web-science/issues/34).

Below is a curated description of the important modules:

- `src/main.js` - the main entrypoint for the study. Configures the Rally API, establishes the callback for page data, etc.
- `src/attention-reporter.js` - the reporting module for the data collection. Registers the `src/content-scripts/attention-collector.js` content script and handles the starting and stopping of measurement.

## the event data collected by this study

This study *collects* two types of events:
1. *attention events* (`RS01.attentionCollection`), defined by `web-science` as an active tab in an active window
2. *audio events* (`RS01.audioCollection`), defined by `web-science` as an audio event playing on an active tab in an active window

And it *submits* one kind of event, `RS01.event`. We collect as two events because of current limitations in WebScience's messaging schema validation. We don't have this limitation when submitting the final payload to the endpoint.

The events submitted in this study are defined by the measurements schema, kept in `schema/`. All of the building & watching NPM commands in this repository will first generate this schema. To do it yourself and see all the fields collected by this study, run `npm run build:schema` and observe the results in `schema/measurements.1.schema.json`.
