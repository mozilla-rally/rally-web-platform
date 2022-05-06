<script lang="ts">
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";

  import SettingsReadOnly from "$lib/views/account-settings/SettingsReadOnly.svelte";
  import SettingsCard from "$lib/views/account-settings/SettingsCard.svelte";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";
  import type { NotificationStore } from "$lib/components/notifications";
import TwoFactAuth from "$lib/views/account-settings/TwoFactAuth.svelte";

  const store: AppStore = getContext("rally:store");

  const isAuthenticated: Readable<boolean> = getContext(
    "rally:isAuthenticated"
  );
  const notifications: NotificationStore = getContext("rally:notifications");

  const settingsList = {
    email: "update-email",
    password: "update-pw",
    twoFactor: "update-2fa",
    leaveRally: "leave-rally"
  };

  let isEmail = false;
  let isPW = false;
  let isReadOnly = true;
  let is2FA = false;
  let settingsTitle = "Account Settings";
  let settingsDecription =
    "Manage your info, privacy, and security to make Rally work better for you.";

  let cardArgs = {
    width: "700px",
    height: "auto",
    fontSize: "38px",
    custom: "settings",
  };

  let isReadOnlyArgs = {
    ...cardArgs,
    custom: "settings extra-padding is-read-only",
  };

  const displayCard = (event) => {
    switch (event.detail.text) {
      case "update-email":
        isEmail = true;
        isPW = false;
        isReadOnly = false;
        settingsTitle = "Change your email address";
        settingsDecription = "Change your current email with a new one.";
        break;
      case "update-pw":
        isPW = true;
        isEmail = false;
        settingsTitle = "Change your password";
        settingsDecription = "Change your current password.";
        isReadOnly = false;
        break;
      case "update-2fa":
        isPW = false;
        is2FA = true;
        isEmail = false;
        settingsTitle = "Change your 2fa";
        settingsDecription = "Change your current 2fa settings.";
        isReadOnly = false;
        break;
      case "read-only":
        showReadOnly();
        break;
      default:
        break;
    }
  };

  const showReadOnly = () => {
    isReadOnly = true;
    isEmail = false;
    isPW = false;
    is2FA = false;
    settingsTitle = "Account Settings";
    settingsDecription =
      "Manage your info, privacy, and security to make Rally work better for you.";
  };

  $: if ($store._initialized) {
    if (!$store?.user?.uid) {
      goto("/signup");
    } else if (!$store?.user?.enrolled) {
      goto("/welcome/terms");
    }
  }

  $: if (isReadOnly) {
    cardArgs = isReadOnlyArgs;
  }
</script>

<svelte:head>
  <title>Account Settings | Mozilla Rally</title>
</svelte:head>

{#if $store._initialized && $isAuthenticated === true}
  <section>
    {#if is2FA}
          <TwoFactAuth {store} on:type={displayCard} {settingsList} />
    {:else}
    <div in:fly={{ duration: 800, y: 5 }} class="account-settings-container">
      <div class="title-wrapper">
        {#if !isReadOnly}
          <button class="arrow-btn" on:click={showReadOnly}>
            <img class="back-arrow" alt="back arrow" src="/img/Back.svg" />
          </button>
        {/if}
        <h2 class="section-header">{settingsTitle}</h2>
      </div>

      <p class="description">
        {settingsDecription}
      </p>
      <hr />
      <div class="account-settings-main">
        {#if isReadOnly}
          <SettingsReadOnly on:type={displayCard} {settingsList} />
        {/if}
      </div>
    </div>
        {/if}
  </section>
{/if}

<style>
  .title-wrapper {
    display: flex;
  }
  .arrow-btn {
    background: transparent;
    border: none;
    padding: 0;
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
