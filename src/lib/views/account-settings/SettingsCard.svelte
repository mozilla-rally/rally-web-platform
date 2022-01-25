<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { createEventDispatcher } from "svelte";
  import Card from "$lib/components/Card.svelte";
  import UpdatePassword from "./UpdatePassword.svelte";
  import UpdateEmail from "./UpdateEmail.svelte";
  import LeaveRally from "./LeaveRally.svelte";
  import TwoFactAuth from "./TwoFactAuth.svelte";
  import SettingsReadOnly from "./SettingsReadOnly.svelte";
  import "./RallySettings.css";

  const dispatch = createEventDispatcher();

  export let isEmail;
  export let isPW;
  export let is2FA;
  export let isLeaveRally;
  export let isReadOnly;
  export let cardArgs;
  export let settingsTitle;
  export let displayCard

  let hideTitle = "display: none;";
  let showTitle = "display: flex;";

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<Card {...cardArgs}>
  <div
    class="title-wrapper"
    slot="card-title"
    style={settingsTitle == "read-only" ? hideTitle : showTitle}
  >
    <button
    class="arrow-btn"
      on:click={() => {
        handleSelect("read-only");
      }}
    >
      <img class="back-arrow" alt="back arrow" src="/img/Back.svg" />
    </button>

    <div class="title-text">{settingsTitle}</div>
  </div>

  <div class="card-body-content" slot="card-body">
    <!-- readonly -->
    {#if isReadOnly}
      <SettingsReadOnly />
    {/if}

    <!-- update email -->
    {#if isEmail}
      <UpdateEmail on:type={displayCard} />
    {/if}

    <!-- update password -->
    {#if isPW}
      <UpdatePassword on:type={displayCard} />
    {/if}

    <!-- enable 2FA -->
    {#if isLeaveRally}
      <LeaveRally on:type={displayCard}  />
    {/if}

    <!-- leave Rally -->
    {#if is2FA}
      <TwoFactAuth  />
    {/if}
  </div>
</Card>

<style>
  .arrow-btn{
    background: transparent;
    border: none;
  }
  .back-arrow {
    padding-right: 10px;
    cursor: pointer;
  }
  .back-arrow:hover {
    transform: translateX(-4px);
    transition: ease-in;
  }
</style>
