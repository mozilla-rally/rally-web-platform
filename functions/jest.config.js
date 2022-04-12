export default {
  preset: "ts-jest/presets/default-esm",
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  resolver: "ts-jest-resolver",
  moduleNameMapper: {
    "^@mozilla/glean/plugins/encryption": "@mozilla/glean/dist/plugins/encryption.js",
    "^@mozilla/glean/uploader": "@mozilla/glean/dist/core/upload/uploader.js"
  },
  testRegex: "src(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["lib/", "node_modules/", "setupTests.js"],
  moduleFileExtensions: ["js", "ts", "tsx", "jsx", "json", "node"],
  testEnvironment: "node",  
};
