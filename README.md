# Rally Web Platform

This repository contains the code needed to build the Rally Web Platform.
Mozilla Rally is an opt-in data collection platform.

The Rally Web Platform consists of:

- A static website, built with Svelte.
- A storage and authentication backend, powered by Firebase.
- One or more WebExtensions which collect and submit user browsing data.

The website is used to create/log in to a Rally account, and allows users to
log in from one or more WebExtensions to configure what data may be collected.

WebExtensions are built from the [Rally Study Template](https://github.com/mozilla-rally/study-template).

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Firebase](https://firebase.google.com/docs/cli)
  * Authentication
  * Functions
  * Firestore
  * Hosting
* [Java SDK](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html) for Firebase emulators


## Versioning

You can always access the current version of the site by fetching `<hostname>/version.json`.

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

`npm run test:integration`

This uses Selenium and the Firebase Emulators to run the full Rally Web Platform stack and test that
the various supported UX flows work as expected.

This repository comes (aspirationally) with unit tests:
- run `npm run test:unit`

These are currently severely underdeveloped right now, we are currently prioritizing
integration testing.

## Deploying

CircleCI is used to generate build artifacts, which are pushed to the `deploy` branch on this repository.
A deploy job is then triggered from this branch to the dev environment on merge to the `master` branch:
https://rally-web-spike.web.app/

NOTE: if you want to deploy to your own environment, you must either:

1. `firebase login` and use your own GCP account.
2. point `GOOGLE_APPLICATION_CREDENTIALS` shell variable to a GCP service account JSON file. The service account must have the role "Cloud Build Service Account".

The first option is the simplest for occasional manual deployments, the second is necessary if you're doing automated deployment from CI.

NOTE: if the Firebase environment you are deploying to is not set up yet, see the next section.

Review the `./firebase.json` which contains the server configuration, and `./firebaserc` which contains your project names and aliases.
When ready, deploy to your project:

`firebase deploy --project {YOUR_FIREBASE_PROJECT_NAME}`

## One-time Firebase server setup

The `./firebase.json` holds the desired services and basic configuration, but there are a number of one-time configuration changes that must be made using the [Firebase console](https://console.firebase.google.com/):

1. Create new Web app in UI under Project Settings -> Your apps
​
Place the returned configuration into `./firebase.config.{YOUR_FIREBASE_PROJECT_NAME}.json`, then set up your project and an alias (dev/stage/prod/etc):
`firebase use --add`

And complete the prompts:

```
? Which project do you want to add?
? What alias do you want to use for this project? (e.g. staging)
```
​
Then, enable the following in the Firebase console:

- Authentication, along with the email and Google providers.
- Cloud Firestore
- Hosting

1. Grant the ability to generate custom tokens to your Firebase functions:
   1. Add the IAM Service Account Credentials API at https://console.developers.google.com/apis/api/iamcredentials.googleapis.com/overview?project=211360280873
   2. Give the "Service Account Token Creator" role to your appspot service account in https://console.cloud.google.com/iam-admin/iam?authuser=0&project={YOUR_FIREBASE_PROJECT_NAME}.

2. Deploy

Build the site in production mode:
`firebase use {YOUR_FIREBASE_PROJECT_NAME}`
`npm run build`
`npm run config:web`

NOTE - if you are not logged into Firebase then it will not be able to automatically detect project name and details.
If you want to build in a restricted environment, then make sure to copy the correct configuration file after building:

`npm run build`
`cp config/firebase.config.{YOUR_FIREBASE_PROJECT_NAME}.json ./static/firebase.config.json`

Then deploy to your Firebase project:
`firebase deploy --project {YOUR_FIREBASE_PROJECT_NAME}`

If you are still on the free billing plan, you will get a message similar to the following:
​
```
Error: Your project {YOUR_FIREBASE_PROJECT_NAME} must be on the Blaze (pay-as-you-go) plan to complete this command. Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL:
​
https://console.firebase.google.com/project/{YOUR_FIREBASE_PROJECT_NAME}/usage/details
​
Having trouble? Try firebase [command] --help
```

Upgrading to the Blaze plan is necessary for access to Firebase Cloud Functions.

You should now be able to access your site at:
https://{YOUR_FIREBASE_PROJECT_NAME}.web.app

## Organization

- `src/lib` – the components and utility functions utilized in the frontend.
  - `src/lib/stores` – contains the overarching application store & any derived stores. These set in the context of the layouts in `src/routes`, which gives access to the global store to all children components (including pages).
  - `src/lib/views` – the standalone views that get utilized for individual pages. We are breaking these out separately because we utilize the same content & functionality blocks on multiple routes (e.g. for onboarding, `/welcome/terms` and for the main view, `/terms`).
  - The rest of the components and functions in `/src/lib/` are used throughout the page components and the views.
- `src/routes` – the page components utilized in the routes. Sveltekit's routing is directory-based; so `src/routes/terms/index.svelte` maps to `/terms`, and `src/routes/welcome/profile/index.svelte` maps to `/welcome/profile`.

- `functions` - Firebase functions needed to support the Rally Web Platform.

`svelte.config.js` – contains the configuration of the Sveltekit app. Sveltekit utilizes Vite under the hood, and has support for both Vite and Rollup plugins.

`config/firebase.config.*.json` – the Firebase configuration files used by the Svelte site.

`firebase.json` - contains the server-side configuration for this Firebase project.

## Storybook

To start storybook in development mode, run npm run storybook

Test existing components by adding a "story" in `src/stories/components`, using the `stories.svelte` extension

Please check [the Storybook documentation] https://storybook.js.org/docs/svelte/writing-stories/introduction for proper story definition
