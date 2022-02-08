<script lang="ts">
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";

  import SettingsReadOnly from "$lib/views/account-settings/SettingsReadOnly.svelte";
  import SettingsCard from "$lib/views/account-settings/SettingsCard.svelte";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";
  import type { NotificationStore } from "$lib/components/notifications";

  const store: AppStore = getContext("rally:store");

  const isAuthenticated: Readable<boolean> = getContext(
    "rally:isAuthenticated"
  );
  const notifications: NotificationStore = getContext("rally:notifications");

  const listArr = ["update-email", "update-pw", "enable-2FA", "leave-rally"];

  let isEmail = false;
  let isPW = false;
  let is2FA = false;
  let isLeaveRally = false;
  let isReadOnly = true;
  let settingsTitle = "Account Settings";
  let settingsDecription =
    "Manage your info, privacy, and security to make Rally work better for you.";

  let cardArgs = {
    width: "700px",
    height: "auto",
    fontSize: "38px",
  };

  let updateEmailArgs = {
    ...cardArgs,
    custom: "settings",
  };

  let updatePWArgs = {
    ...cardArgs,
    custom: "settings",
  };

  let enable2FAArgs = {
    ...cardArgs,
    custom: "settings extra-padding",
  };

  let leaveRallyArgs = {
    ...cardArgs,
    custom: "settings extra-padding",
  };

  let isReadOnlyArgs = {
    ...cardArgs,
    custom: "settings extra-padding is-read-only",
  };

  //   function joinStudy(studyId) {
  //     store.updateStudyEnrollment(studyId, true);
  //     notifications.send({ code: "SUCCESSFULLY_JOINED_STUDY" });
  //   }
  //   function leaveStudy(studyId) {
  //     store.updateStudyEnrollment(studyId, false);
  //     notifications.send({ code: "SUCCESSFULLY_LEFT_STUDY" });
  //   }

  const displayCard = (event) => {
    console.log("event", event.detail.text);
    switch (event.detail.text) {
      case "update-email":
        isEmail = true;
        isPW = false;
        is2FA = false;
        isLeaveRally = false;
        isReadOnly = false;
        settingsTitle = "Change your email address";
        settingsDecription = "Change your current email with a new one.";
        break;
      case "update-pw":
        isPW = true;
        isEmail = false;
        is2FA = false;
        isLeaveRally = false;
        settingsTitle = "Change your password";
        settingsDecription = "Change your current password.";
        isReadOnly = false;
        break;
      case "enable-2FA":
        is2FA = true;
        isEmail = false;
        isPW = false;
        isLeaveRally = false;
        isReadOnly = false;
        settingsTitle = "Two factor authentication";
        settingsDecription =
          "Enable SMS verification to sign in using a one time passcode sent as a SMS to your mobile phone.";
        break;
      case "read-only":
        isReadOnly = true;
        isLeaveRally = false;
        isEmail = false;
        isPW = false;
        is2FA = false;
        settingsTitle = "Account Settings";
        settingsDecription =
          "Manage your info, privacy, and security to make Rally work better for you.";
        break;
      default:
        break;
    }
  };

  const showReadOnly = () => {
    isReadOnly = true;
    isLeaveRally = false;
    isEmail = false;
    isPW = false;
    is2FA = false;
    settingsTitle = "Account Settings";
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
  } else if (isEmail) {
    cardArgs = updateEmailArgs;
  } else if (isPW) {
    cardArgs = updatePWArgs;
  } else if (is2FA) {
    cardArgs = enable2FAArgs;
  } else if (isLeaveRally) {
    cardArgs = leaveRallyArgs;
  }
</script>

<svelte:head>
  <title>Account Settings | Mozilla Rally</title>
</svelte:head>

{#if $store._initialized  && $isAuthenticated === true}
  <section>
    <div
      in:fly={{ duration: 800, y: 5 }}
      class="account-settings-container"
    >
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
          <SettingsReadOnly on:type={displayCard} {listArr} />
        {/if}

        {#if !isReadOnly}
          <SettingsCard
            {isEmail}
            {isPW}
            {is2FA}
            {cardArgs}
            {displayCard}
            on:type={displayCard}
          />
        {/if}
      </div>
    </div>
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
