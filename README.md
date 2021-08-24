# Rally Web Platform

This repository contains the code needed to build the Rally Web Platform.
Mozilla Rally is an opt-in data collection platform.

The Rally Web Platform consists of:

- A static website, built with Svelte.
- A storage and authentication backend, powered by Firebase.
- One or more WebExtensions which collect and submit user browsing data.

The website is used to create/log in to a Rally account, and allows users to
control what data is collected by any installed WebExtension(s).

WebExtensions are built from the [Rally Study Template](https://github.com/mozilla-rally/study-template).

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Firebase](https://firebase.google.com/docs/cli)
  * Authentication
  * Functions
  * Firestore
  * Hosting

## Quickstart

1. Clone this repository.
2. Run `npm run install`
3. Run `npm run dev` to spin up the dev environment at `localhost:3000`
4. Run `npm run build` to build the app; the results will be in `/build`

## Emulating the server backend (Firebase)

### Starting the emulators
The `firebase-tools` node package provides a suite of emulators for the various Firebase services:
`npm install -g firebase-tools`

By default, all emulators specified in `./firebase.json` will be started with an empty database and no user accounts:
`firebase emulators:start`

NOTE: any modifications you make within the emulators will not be saved, by default! You can save all data on exit
by passing `--export-on-exit`:
`firebase emulators:start --export-on-exit ./my-test-data/`

You may then load this data into the emulator on startup:
`firebase emulators:start --import ./my-test-data/`

You may find the test data used for integration tests helpfully for local development too:
`firebase emulators:start ./tests/integration/testdata`

### Configuring and using the emulators

Firebase will output something similar to the following:

```
┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://localhost:4000                │
└─────────────────────────────────────────────────────────────┘

┌────────────────┬────────────────┬─────────────────────────────────┐
│ Emulator       │ Host:Port      │ View in Emulator UI             │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Authentication │ localhost:9099 │ http://localhost:4000/auth      │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Functions      │ localhost:5001 │ http://localhost:4000/functions │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Firestore      │ localhost:8080 │ http://localhost:4000/firestore │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Hosting        │ localhost:5000 │ n/a                             │
└────────────────┴────────────────┴─────────────────────────────────┘
  Emulator Hub running at localhost:4400
  Other reserved ports: 4500

Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.
```

You may now browse to http://localhost:4000 to access the various emulator control panels,
which allow you to add/remove users and documents from the Firestore database.

### Configuring the Rally Web Platform website and WebExtensions to use the emulators

When the website is re-built in "test integration" mode, it will automatically deploy to the emulated Firebase Hosting:
`npm run build:test:integration`

Clients wishing to connect to the Firebase emulators, including the website any WebExtensions, must set
this explicitly in their code after initializing the services.

Connecting to the Firebase Authentication
```ts
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');
```

Connecting to the Firebase Firestore emulator:
```ts
db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8080);
```

## Tests

Integration tests can be run with:

- integration tests: run `npm run test:integration`

This uses Selenium and the Firebase Emulators to run the full Rally Web Platform stack and test that
the various supported UX flows work as expected.

This repository comes (aspirationally) with unit tests:
- run `npm run test:unit`

These are currently severely underdeveloped right now, we are currently prioritizing
integration testing.


## Organization

- `src/lib` – the components and utility functions utilized in the frontend.
  - `src/lib/stores` – contains the overarching application store & any derived stores. These set in the context of the layouts in `src/routes`, which gives access to the global store to all children components (including pages).
  - `src/lib/views` – the standalone views that get utilized for individual pages. We are breaking these out separately because we utilize the same content & functionality blocks on multiple routes (e.g. for onboarding, `/welcome/terms` and for the main view, `/terms`).
  - The rest of the components and functions in `/src/lib/` are used throughout the page components and the views.
- `src/routes` – the page components utilized in the routes. Sveltekit's routing is directory-based; so `src/routes/terms/index.svelte` maps to `/terms`, and `src/routes/welcome/profile/index.svelte` maps to `/welcome/profile`.

- `functions` - Firebase functions needed to support the Rally Web Platform.

`svelte.config.js` – contains the configuration of the Sveltekit app. Sveltekit utilizes Vite under the hood, and has support for both Vite and Rollup plugins.

`firebase.config.js` – contains our public firebase configuration for this application.

`firebase.json` - contains the server-side configuration for this Firebase project.
