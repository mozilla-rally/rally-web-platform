<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import Card from "../../../lib/components/Card.svelte";
  import UpdatePassword from "../account/UpdatePassword.svelte";
  import UpdateEmail from "../account/UpdateEmail.svelte";
  import LeaveRally from "../account/LeaveRally.svelte";
  import TwoFactAuth from "../account/TwoFactAuth.svelte";
  import { onMount } from "svelte";
  import "../../../lib/components/auth-cards/Auth.css";
  import "../css/RallySettings.css";

  let titleEl;
  let textWidth;

  export let isEmail;
  export let isPW;
  export let is2FA;
  export let isLeaveRally;
  export let cardArgs;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
</script>

<Card {...cardArgs}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{cardArgs.title}</div>
  </div>
  <div class="card-body-content" slot="card-body">
    <!-- update email -->
    {#if isEmail}
      <UpdateEmail />
    {/if}

    <!-- update password -->
    {#if isPW}
      <UpdatePassword />
    {/if}

    <!-- enable 2FA -->
    {#if isLeaveRally}
      <LeaveRally />
    {/if}

    <!-- leave Rally -->
    {#if is2FA}
      <TwoFactAuth />
    {/if}
  </div>
</Card>

<style>
  .title-highlight {
    background-color: var(--color-yellow-35);
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }
</style>
