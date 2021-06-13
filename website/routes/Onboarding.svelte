<script>
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, getContext, createEventDispatcher, tick } from "svelte";
  import Layout from "../components/layouts/OnboardingLayout.svelte";
  import Main from "../components/layouts/OnboardingBody.svelte";
  import Welcome from "../routes/welcome/Content.svelte";
  import Demographics from "./demographics/Content.svelte";
  import TermsOfService from "./terms-of-service/Content.svelte";
  import OnboardingCTAContainer from "../components/OnboardingCTAContainer.svelte";

  import DemographicsCallToAction from "./demographics/CallToAction.svelte";
  import TermsCallToAction from "./terms-of-service/CallToAction.svelte";

  export let view = "welcome";
  export let firstRunCompleted = false;

  let mounted = false;

  const store = getContext("rally:store");

  const dispatch = createEventDispatcher();

  onMount(() => {
    mounted = true;
    // dispatch the first-run-initiated event.
    // This will tell the Core Add-On's store
    // that we don't need to show first-run graphics
    // such as the arrow pointing to the add-on
    // in the toolbar.

    // if authenticated already, skip welcome page.

    dispatch("first-run-initiated");
  });

  $: if (view === 'welcome' && $store.user && $store.user.uid && $store.user.enrolled) {
    console.log('send them out of onboarding!');
    finishOnboarding();
  }
  $: if (view === 'welcome' && $store.user && $store.user.uid && !$store.user.enrolled) {
    console.log('maybe it is terms time?')
    send('terms');
  } else {
    console.log(view === 'welcome', $store.user, $store.user?.uid, !$store.user?.enrolled);
  }

  function send(next) {
    view = next;
    window.scrollTo(0, 0);
  }

  function step(w) {
    if (w === "welcome") return 1;
    if (w === "terms") return 2;
    if (w === "demographics") return 3;
    return 1;
  }

  function finishOnboarding() {
    dispatch("onboarding-complete");
  }

  let formattedResults;
</script>

{#if mounted}
  <div>
    <Layout>
      <Main padForOnboarding={view !== 'welcome'}>
        {#if view === 'welcome'}
          <Welcome
            firstRunCompleted={firstRunCompleted}
            on:google-signup={async (event) => {
              if ($store.user) {
                send("terms");
              }
              // do something here.
              // then eventually call, once we are redirected, to
            }}
            on:signup-with-email-and-password
            />
        {:else if view === 'terms'}
          <TermsOfService />
        {:else if view === 'demographics'}
          <Demographics bind:formattedResults />
        {/if}
      </Main>
      <OnboardingCTAContainer
        step={step(view)}
        transparent={view === 'welcome'}>
        {#if view === 'terms'}
          <TermsCallToAction
            on:accept={() => {
              // Join Rally.
              store.updatePlatformEnrollment(true);
              send('demographics');
            }}
            on:cancel={() => {
              send('welcome');
            }} />
        {:else if view === 'demographics'}
          <DemographicsCallToAction
            on:save={() => {
              // Submit Demographics here.
              store.updateDemographicSurvey(formattedResults);
              // move to the main view.
              finishOnboarding();
            }}
            on:skip={finishOnboarding} />
        {/if}
      </OnboardingCTAContainer>
    </Layout>
  </div>
{/if}
