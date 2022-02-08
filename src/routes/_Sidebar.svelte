<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { createEventDispatcher, getContext } from "svelte";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
  import SidebarContainer from "$lib/layouts/main/Sidebar.svelte";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";
  import isMounted from "$lib/is-mounted";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";
  import type { ProfileCompletionStatus } from "$lib/stores/profile-completion-status";

  const store: AppStore = getContext("rally:store");
  const profileCompletionStatus: Readable<ProfileCompletionStatus> = getContext(
    "rally:profileCompletionStatus"
  );

  const dispatch = createEventDispatcher();
  const mounted = isMounted();
</script>

<SidebarContainer>
  <a class="header-link" slot="header" href="/studies" sveltekit:prefetch>
    {#if $mounted}
      <h1 in:fly={{ duration: 800, x: -15 }}>
        <img src="img/logo-tall.svg" alt="Mozilla Rally Logo" />
      </h1>
    {/if}
  </a>
  <ul slot="navigation">
    {#if $store._initialized}
      <li in:fly={{ duration: 800, delay: 200, x: -15 }}>
        <a
          class:active={$page.path === "/studies"}
          href="/studies"
          sveltekit:prefetch
        >
          Current Studies
        </a>
      </li>
      <li in:fly={{ duration: 800, delay: 200, x: -15 }}>
        <a
          class="external"
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.mozilla.org/en-US/kb/about-mozilla-rally"
          >Support
          <ExternalLink /></a
        >
      </li>
      <li in:fly={{ duration: 800, delay: 200, x: -15 }}>
        <a
          class="external"
          target="_blank"
          rel="noopener noreferrer"
          href="__BASE_SITE__/how-rally-works/faqs/"
          >FAQ
          <ExternalLink /></a
        >
      </li>
    {/if}
  </ul>
  <ul slot="settings" class="app-controls">
    {#if $store._initialized}
      <li in:fly={{ duration: 800, delay: 400, x: -15 }}>
        <a
          class:active={$page.path === "/profile"}
          href="/profile"
          sveltekit:prefetch
        >
          Manage Profile
        </a>
        <div class="profile-completed-container">
          <!-- FIXME: why are these styles inline? Let's move them into the component's css. -->
          <span class="profile-completed">
            {#key $profileCompletionStatus.profileQuestionsAnswered}
              <span
                class="profile-completed-numbers"
                in:fly={{ duration: 500, y: -24 }}
                out:fly={{ duration: 500, y: 24 }}
                >{$profileCompletionStatus.profileQuestionsAnswered}</span
              >
            {/key}
          </span>
          / {$profileCompletionStatus.totalProfileQuestions} Questions Answered
        </div>
      </li>
      <li in:fly={{ duration: 800, delay: 400, x: -15 }}>
        <a
          class:active={$page.path === "/terms"}
          href="/terms"
          sveltekit:prefetch>Privacy Notice</a
        >
      </li>
      <li in:fly={{ duration: 800, delay: 400, x: -15 }}>
        <a
          class:active={$page.path === "/account-settings"}
          href="/account-settings"
          sveltekit:prefetch>Account Settings</a
        >
      </li>
      <!-- <li in:fly={{ duration: 800, delay: 400, x: -15 }}>
        <button on:click={() => dispatch("leave-rally")}
          >Leave Mozilla Rally</button
        >
      </li> -->
    {/if}
  </ul>
</SidebarContainer>

<style>
  h1 {
    align-self: start;
  }

  ul a.active::before,
  ul a.active:hover::before {
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
  /* reset the header link anchor tag to have no mouseover effect */
  .header-link::before,
  .header-link:hover::before {
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
