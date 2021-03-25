# Rally Study 01 (RS01)

_status: in development_

This repository contains the code needed to build the Rally Study 01 Web Extension. 
The study works with [Mozilla Rally's Web Extension](https://github.com/mozilla-rally/rally-core-addon)
or can be run locally without Mozilla Rally installed on your computer.

To use this repository to collect your own data and play with it:

1. fork or clone this repository
2. run `npm install`
3. if you are:
   1. a chrome user: run `npm run build-addon`, then [follow the instructions to load an unpacked web extension](https://developer.chrome.com/docs/extensions/mv2/getstarted/). That's it!
   2. a firefox user: 
      1. you'll have to use Nightly & set `xpinstall.signatures.required` to `false` in `about:config`. 
      2. then run `npm run build-addon` in this directory.
      3. Then you can load the add-on from `about:addons`.
4. browse for a few days to generate data.
5. Go the the extension page and click the `download JSON` on the top right.

