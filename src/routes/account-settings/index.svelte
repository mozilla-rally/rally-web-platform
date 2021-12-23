<script lang="ts">
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";
  import ContentContainer from "$lib/layouts/main/ContentContainer.svelte";
  import SettingsCard from "$lib/views/account-settings/SettingsCard.svelte";
  import MiniSider from "$lib/components/MiniSider.svelte";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";
  import type { NotificationStore } from "$lib/components/notifications";

  const store: AppStore = getContext("rally:store");
  const isAuthenticated: Readable<boolean> = getContext(
    "rally:isAuthenticated"
  );
  const notifications: NotificationStore = getContext("rally:notifications");

  const listArr = [
    { text: "Update email", highlight: false, class: "", type: "update-email" },
    { text: "Update password", highlight: false, class: "", type: "update-pw" },
    { text: "Enable 2FA", highlight: false, class: "", type: "enable-2FA" },
    {
      text: "Leave Rally",
      highlight: false,
      class: "",
      type: "leave-rally",
    },
  ];
  let isEmail = false;
  let isPW = false;
  let is2FA = false;
  let isLeaveRally = false;
  let isReadOnly = true;
  let settingsTitle = "read-only";

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
    switch (event.detail.text) {
  
      case "update-email":
        isEmail = true;
        isPW = false;
        is2FA = false;
        isLeaveRally = false;
        isReadOnly = false;
        settingsTitle = "Update email";
        break;
      case "update-pw":
        isPW = true;
        isEmail = false;
        is2FA = false;
        isLeaveRally = false;
        settingsTitle = "Update password";
        isReadOnly = false;
        break;
      case "enable-2FA":
        is2FA = true;
        isEmail = false;
        isPW = false;
        isLeaveRally = false;
        isReadOnly = false;
        settingsTitle = "Two-factor authentication";
        break;
      case "leave-rally":
        isLeaveRally = true;
        isEmail = false;
        isPW = false;
        is2FA = false;
        isReadOnly = false;
        settingsTitle = "Leave Rally";
        break;
      case "read-only":
        isReadOnly = true;
        isLeaveRally = false;
        isEmail = false;
        isPW = false;
        is2FA = false;
        settingsTitle = "read-only"
        break;
      default:
        break;
    }
  
  };

  $: if ($isAuthenticated === false) {
    goto("/signup");
  }
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

{#if $store._initialized}
  <section>
    <h2 class="section-header">Account Settings</h2>
    <p class="description">
      Manage your info, privacy, and security to make Rally work better for you
    </p>
    <hr />
    <ContentContainer custom="account-settings">
      <div class="settings-sider">
        <MiniSider
          on:type={displayCard}
          {listArr}
          width="214px"
          fontSize="1rem"
        />
      </div>
      <div class="settings-main">
        <SettingsCard
          {isEmail}
          {isPW}
          {is2FA}
          {isLeaveRally}
          {isReadOnly}
          {cardArgs}
          {settingsTitle}
          {displayCard}
          on:type={displayCard}
        />
      </div>
    </ContentContainer>
  </section>
{/if}
