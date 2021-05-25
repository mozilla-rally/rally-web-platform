// Kudos to JamesHenry for providing a nice workaround
// https://github.com/jsdom/jsdom/issues/2524#issuecomment-736672511 to the lack of
// `TextDecoder`
const Environment = require("jest-environment-jsdom");

module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === "undefined") {
      const { TextEncoder, TextDecoder } = require("util");
      this.global.TextEncoder = TextEncoder;
      this.global.TextDecoder = TextDecoder;
    }
  }
};
