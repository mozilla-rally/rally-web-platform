<script>
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 import { createEventDispatcher } from "svelte";
 import isMounted from "../../is-mounted";
 import ExternalLink from "../../components/icons/ExternalLink.svelte";
 import { fly } from "svelte/transition";

 const dispatch = createEventDispatcher();

 export let storeInitialized = true;
 export let profileQuestionsAnswered = 0;
 export let totalProfileQuestions = 7;
 export let path;

 const mounted = isMounted();

</script>

<style>
  .sidebar {
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--color-light-gray-20);
    width: 15rem;
    padding: 2rem 2.5rem;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: [header] max-content [nav] auto [app] max-content;
    align-content: stretch;
    align-items: start;
    grid-row-gap: 2rem;
    border-right: 1px solid #E1E1E3;
  }

h1 {
    align-self: start;
}
a, button {
    background-color: none;
    padding: 0;
    border: none;
    text-align: left;
    cursor: pointer;
    color: var(--color-dark-gray-10);
    font-weight: 700;
    text-decoration: none;
    display: block;
    width: max-content;
    position: relative;
    transition: color .15s;
}

a:hover, ul button:hover {
    color: var(--color-dark-gray-90);
}

a::before, ul button::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0%;
    background-color: var(--color-dark-gray-10);
    visibility: hidden;
    transform: scaleX(0);
    transform-origin: left center;
    transition: all 0.15s ease-in-out 0s;
}

a:hover::before, ul button:hover::before {
    visibility: visible;
    opacity: .4;
    transform: scaleX(1);
}
ul a.active::before, ul a.active:hover::before {
    visibility: visible;
    transform: scaleX(1);
    background-color: var(--color-dark-gray-90);
}

ul li + li {
    margin-top: 2rem;
}

li a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.app-controls {
    align-self: end;
}

.app-controls button {
    font-size: 14px;
}

/* reset the header link anchor tag to have no mouseover effect */
.header-link::before, .header-link:hover::before {
    background-color: transparent;
}

.profile-completed-container {
    color: var(--color-light-gray-90); 
    font-size: 10px; 
    font-weight: 400; 
    padding-top: 4px;
}

.profile-completed {
    position: relative;
    display: inline-block;
    transform: translateY(-11.5px);
    font-variant-numeric: tabular-nums;
    min-width: 6.5px;
}

.profile-completed-numbers {
    display: inline-block; 
    position: absolute;
}

</style>

<div class="sidebar">
  <a class="header-link" href="/studies" sveltekit:prefetch>
    {#if $mounted}
        <h1 in:fly={{duration:800, x: -15}}>
            <img src="img/logo-tall.svg" alt="Mozilla Rally Logo" />
        </h1>
    {/if}
  </a>
  <ul >
    {#if storeInitialized}
        <li in:fly={{duration:800, delay: 200, x: -15}}>
            <a class:active={path === '/studies'} href="/studies"  sveltekit:prefetch>
                Current Studies
            </a>
        </li>
        <li in:fly={{duration:800, delay: 200, x: -15}}>
            <a class="external" target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/about-mozilla-rally">Support
            <ExternalLink /></a>
        </li>
        <li in:fly={{duration:800, delay: 200, x: -15}}>
            <a class="external" target="_blank" rel="noopener noreferrer" href="__BASE_SITE__/how-rally-works/faqs/">FAQ
            <ExternalLink /></a>
        </li>
    {/if}
</ul>
  <ul class="app-controls">
      {#if storeInitialized}
              <li in:fly={{duration:800, delay: 400, x: -15}}>
                  <a class:active={path === '/profile'} href="/profile"  sveltekit:prefetch>
                      Manage Profile
                  </a>
              <div class="profile-completed-container">
              <!-- FIXME: why are these styles inline? Let's move them into the component's css. -->
              <span class="profile-completed">
                  {#key profileQuestionsAnswered}
                      <span class="profile-completed-numbers" in:fly={{duration: 500, y: -24}} out:fly={{duration: 500, y: 24}}>{profileQuestionsAnswered}</span>
                  {/key}
              </span>
                  / {totalProfileQuestions} Questions Answered
              </div>

          </li>
          <li in:fly={{duration:800, delay: 400, x: -15}}><a class:active={path === '/terms'} href="/terms"  sveltekit:prefetch>Privacy Notice</a></li>
          <li in:fly={{duration:800, delay: 400, x: -15}}><button on:click={() => dispatch('sign-out')}>Sign Out</button></li>
        <li in:fly={{duration:800, delay: 400, x: -15}}><button on:click={() => dispatch('leave-rally')}>Leave Mozilla Rally</button></li>
    {/if}
</ul>
</div>