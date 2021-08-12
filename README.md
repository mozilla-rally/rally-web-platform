# Rally Web Platform Spike

This repository contains the code for the user management experience. It is implemented in [Sveltekit](https://kit.svelte.dev/), a next.js-like framework for [Svelte](https://svelte.dev/).

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Mozilla web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)

This repository contains the code needed to build the Rally Study 01 Web Extension. 
The study submits data through [Mozilla Rally's Web Extension](https://github.com/mozilla-rally/rally-core-addon),
or can be run locally without Mozilla Rally installed on your computer.

## Quickstart

1. Clone this repository.
2. Run `npm run install`
3. Run `npm run dev` to spin up the dev environment at `localhost:3000`
4. Run `npm run build` to build the app; the results will be in `/build`

## Tests

This repository comes (aspirationally) with 
- unit tests: run `npm run test:unit`
- integration tests: run `npm run test:integration`

These are currently severely underdeveloped right now.
Once we feel a bit more comfortable with the state of this branch,
we will prioritize integration testing.

## Organization

There are two primary source file directories: `src/lib` and `src/routes`:
- `src/lib` – the components and utility functions utilized in the frontend.
  - `src/lib/stores` – contains the overarching application store & any derived stores. These set in the context of the layouts in `src/routes`, which gives access to the global store to all children components (including pages).
  - `src/lib/views` – the standalone views that get utilized for individual pages. We are breaking these out separately because we utilize the same content & functionality blocks on multiple routes (e.g. for onboarding, `/welcome/terms` and for the main view, `/terms`).
  - The rest of the components and functions in `/src/lib/` are used throughout the page components and the views.
- `src/routes` – the page components utilized in the routes. Sveltekit's routing is directory-based; so `src/routes/terms/index.svelte` maps to `/terms`, and `src/routes/welcome/profile/index.svelte` maps to `/welcome/profile`.

`svelte.config.js` – contains the configuration of the Sveltekit app. Sveltekit utilizes Vite under the hood, and has support for both Vite and Rollup plugins.

`firebase.config.js` – contains our public firebase configuration for this application.