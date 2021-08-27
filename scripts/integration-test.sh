#!/bin/bash
set -eo pipefail

export PATH=$PATH:./node_modules/.bin

firebase emulators:exec "npm run test:integration:jest -- --test_browser=firefox --load_extension=false --headless_mode=true" --import tests/integration/testdata 2>&1 | tee integration.log
firebase emulators:exec "npm run test:integration:jest -- --test_browser=firefox --load_extension=true --headless_mode=true" --import tests/integration/testdata 2>&1 | tee integration.log
firebase emulators:exec "npm run test:integration:jest -- --test_browser=chrome --load_extension=false --headless_mode=true" --import tests/integration/testdata 2>&1 | tee integration.log

# FIXME Chrome Headless mode does not support extensions, need to set up a display server if we want this to work.
# ./node_modules/.bin/firebase emulators:exec "npm run test:integration:jest --test_browser=chrome --load_extension=talse --headless_mode=false" --import tests/integration/testdata 2>&1 | tee integration.log
