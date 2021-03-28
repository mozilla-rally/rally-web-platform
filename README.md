# Rally Study 01 (RS01)

_status: in development_

An exploratory study on what sites people use and how long they use them.

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Mozilla web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)

This repository contains the code needed to build the Rally Study 01 Web Extension. 
The study submits data through [Mozilla Rally's Web Extension](https://github.com/mozilla-rally/rally-core-addon),
or can be run locally without Mozilla Rally installed on your computer.

## Understanding this repository

This repository contains everything need to generate documentation and build the study web extension itself.

As of this writing, this repository uses a vendored version of `web-science`. We will remove this vendored version once
[we have published `0.1.0` of the library](https://github.com/mozilla-rally/web-science/issues/3).

Look in `src/background.js` to see how we use the `attention-reporter.js` and `attention-collector.js` modules.

## running this study

1. fork or clone this repository
2. run `npm install`
3. if you are:
   1. a chrome user: run `npm run build-addon`, then [follow the instructions to load an unpacked web extension](https://developer.chrome.com/docs/extensions/mv2/getstarted/). That's it!
   2. a firefox user: 
      1. you'll have to use Nightly & set `xpinstall.signatures.required` to `false` in `about:config`. 
      2. then run `npm run build-addon` in this directory.
      3. Then you can load the add-on from `about:addons`.
4. browse for a few days to generate data.
5. Go the the extension page and click the `download JSON` button on the top right.
