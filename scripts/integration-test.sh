#!/bin/bash
set -eo pipefail

./node_modules/.bin/firebase emulators:exec "npm run test:integration:jest" --import tests/integration/testdata 2>&1 | tee integration.log
