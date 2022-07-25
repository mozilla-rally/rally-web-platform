<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, getContext } from "svelte";
  import { goto } from "$app/navigation";
  import * as state from "$lib/components/auth-cards/state.svelte";
  import LaunchCard from "$lib/components/auth-cards/LaunchCard.svelte";
  import CreateCard from "$lib/components/auth-cards/CreateCard.svelte";
  import ForgetPwCard from "$lib/components/auth-cards/ForgetPWCard.svelte";
  import CheckEmailCard from "$lib/components/auth-cards/CheckEmailCard.svelte";
  import ResetPwCard from "$lib/components/auth-cards/ResetPWCard.svelte";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");

  let isLoading = false;
  let loadingText = localStorage.getItem("isLoading");

  onMount(() => {
    localStorage.removeItem("isLoading");
  });

  let {
    cardArgs,
    welcomeArgs,
    joinArgs,
    createArgs,
    forgetPWArgs,
    checkEmailPWArgs,
    checkEmailArgs,
    resetPWArgs,
  } = state;

  let {
    welcomeCard,
    joinCard,
    createAcctCard,
    forgetPWCard,
    checkEmailCard,
    checkEmailPWCard,
    resetPWCard,
  } = state.card;

  $: if ($store._initialized) {
    if (!$store?.user?.uid) {
      goto("/signup");
    } else if (!$store?.user?.enrolled) {
      goto("/welcome/terms");
    } else {
      goto("/studies");
    }
  }

  $: if (welcomeCard) {
    cardArgs = welcomeArgs;
  } else if (joinCard) {
    cardArgs = joinArgs;
  } else if (createAcctCard) {
    cardArgs = createArgs;
  } else if (forgetPWCard) {
    cardArgs = forgetPWArgs;
  } else if (checkEmailPWCard) {
    cardArgs = checkEmailPWArgs;
  } else if (checkEmailCard) {
    cardArgs = checkEmailArgs;
  } else if (resetPWCard) {
    cardArgs = resetPWArgs;
  }

  $: if (loadingText === "loading") isLoading = true;

  const resetState = () => {
    isLoading = false;
    welcomeCard = true;
    joinCard = false;
    createAcctCard = false;
    forgetPWCard = false;
    resetPWCard = false;
    checkEmailCard = false;
    checkEmailPWCard = false;
    state.card.cardHeight = "auto";
  };

  const triggerCard = (event) => {
    let text = event.detail.text;
    switch (text) {
      case "join":
        welcomeCard = false;
        joinCard = true;
        break;
      case "welcome":
        resetState();
        break;
      case "create":
        joinCard = false;
        createAcctCard = true;
        break;
      case "forget":
        welcomeCard = false;
        forgetPWCard = true;
        break;
      case "reset":
        checkEmailPWCard = false;
        resetPWCard = true;
        break;
      case "check-pw":
        forgetPWCard = false;
        checkEmailPWCard = true;
        break;
      case "check-create":
        createAcctCard = false;
        forgetPWCard = false;
        checkEmailCard = true;
        break;
      default:
        break;
    }
  };

  const sendUserInfo = (info) => {
    userEmail = info;
  };

  let isCreateAccountShown = !isLoading && joinCard;

  $: {
    isCreateAccountShown = !isLoading && joinCard;
  }
</script>

<div class={isCreateAccountShown ? "sign-in-background" : ""}>
  <section class="signin md-container-signin">
    <h2 class="mzp-c-call-out-title mzp-has-zap-1 signin__logo">
      <a class="external-link rwp-link"
        target="_blank"
        rel="noopener noreferrer"
        href="__BASE_SITE__/how-rally-works/">
        <img src="img/logo-wide.svg" alt="Mozilla Rally Logo" />
      </a>
    </h2>

    <div class="cards-wrapper signin__cards">
      {#if isLoading}
        <div class="spinner-wrapper">
          <svg
            class="spinner"
            width="100px"
            height="100px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="path"
              fill="none"
              stroke-width="6"
              stroke-linecap="round"
              cx="33"
              cy="33"
              r="30"
            />
          </svg>
        </div>
      {/if}

      {#if !isLoading}
        {#if welcomeCard || joinCard}
          <div class="launch-card-container">
            {#if isCreateAccountShown}
              <div class="launch-card-text">
                <h5>Use your data to build a better internet</h5>
                <ul>
                  <li>
                    Monitor big tech platforms
                  </li>
                  <li>
                    Improve user privacy and control
                  </li>
                  <li>
                    Leave at any time. We'll delete your data
                  </li>
                </ul>
              </div>
            {/if}

            <LaunchCard
              {...cardArgs}
              {store}
              on:type={triggerCard}
              storyBookTest={false}
              {welcomeCard}
            />
          </div>
        {/if}

        {#if createAcctCard && !welcomeCard && !joinCard}
          <CreateCard
            {...cardArgs}
            {store}
            on:type={triggerCard}
            storyBookTest={false}
          />
        {/if}

        {#if (checkEmailCard || checkEmailPWCard) && !welcomeCard && !joinCard}
          <CheckEmailCard
            isSettings={false}
            {...cardArgs}
            on:type={triggerCard}
          />
        {/if}

        {#if forgetPWCard && !welcomeCard && !joinCard && !createAcctCard && !checkEmailCard}
          <ForgetPwCard
            {...cardArgs}
            on:type={triggerCard}
            storyBookTest={false}
          />
        {/if}

        {#if resetPWCard && !checkEmailPWCard}
          <ResetPwCard {...cardArgs} on:type={triggerCard} />
        {/if}
      {/if}
    </div>
  </section>
</div>
<style>
  .spinner-wrapper {
    text-align: center;
  }

  .sign-in-background {
    width: 100%;
    height: 100vh;
    background: no-repeat;
    background-image: url('/img/network-background.png');
    background-position: right top;
  }

  .launch-card-container {
    display: flex;
    flex-direction: row;
  }

  .launch-card-container .launch-card-text {
    margin-right: 60px;
    margin-top: 50px;
  }

  .launch-card-container .launch-card-text h5 {
    margin-bottom: 24px;
  }

  .launch-card-container .launch-card-text ul li {
    background: no-repeat;
    background-image: url('/img/checkmark-static.png');
    line-height: 35px;
    padding-left: 40px;
    white-space: nowrap;
    vertical-align: middle;
  }
</style>
