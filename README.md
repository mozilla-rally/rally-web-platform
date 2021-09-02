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
- & [Java SDK](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html) – needed for integration tests

## Versioning

You can always access the current version by going to `<hostname>/version.json`.

## Quickstart

1. Clone this repository.
2. Run `npm run install`
3. Run `npm run dev` to spin up the dev environment at `http://localhost:3000`
4. Run `npm run build` to build the app; the results will be in `/build`

The site will be ready for use when you see Svelte start up:
```
  SvelteKit v1.0.0-next.141

  local:   http://localhost:3000
  network: not exposed

  Use --host to expose server to other devices on this network
```

## Emulating the server backend (Firebase)

The `npm run dev` command automatically runs the full set of Firebase emulators required for Rally, as well as the
Svelte web app. There is a Firebase emulator UI which you may use that runs on `http://localhost:4000`.

It then watches for changes and automatically reloads services:

- the Rally Svelte website (`./src`)
- Rally Cloud Functions (`./functions/src`)
  - this includes the static list of studies in `./functions/src/studies.ts`
- Firestore Rules (`./firestore.rules`)

NOTE: if you only want to run the Svelte web app and nothing else, you may use:
`npm run dev:web`

However, you must configure a valid Firebase backend in `./firebase.config.js` for the site to function.

### Configuring the Rally Web Platform website and WebExtensions to use the emulators

When the website is re-built in "test integration" mode, it will automatically deploy to the emulated Firebase Hosting:
`npm run build:test:integration`

Clients wishing to connect to the Firebase emulators, including the website any WebExtensions, must set
this explicitly in their code after initializing the services.

Connecting to the Firebase Authentication emulator:
```ts
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');
```

Connecting to the Firebase Firestore emulator:
```ts
db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8080);
```

For the Rally Web Platform, this is done in: `./src/lib/stores/initialize-firebase.js`

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

## Storybook

To start storybook in development mode, run npm run storybook

Test existing components by adding a "story" in `src/stories/components`, using the `stories.svelte` extension

Please check [the Storybook documentation] https://storybook.js.org/docs/svelte/writing-stories/introduction for proper story definition
