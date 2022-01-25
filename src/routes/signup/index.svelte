<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { getContext } from "svelte";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import * as state from "$lib/components/auth-cards/state.svelte";
  import SignInCard from "$lib/components/auth-cards/SignInCard.svelte";
  import LaunchCard from "$lib/components/auth-cards/LaunchCard.svelte";
  import CreateCard from "$lib/components/auth-cards/CreateCard.svelte";
  import ForgetPwCard from "$lib/components/auth-cards/ForgetPWCard.svelte";
  import CheckEmailCard from "$lib/components/auth-cards/CheckEmailCard.svelte";
  import ResetPwCard from "$lib/components/auth-cards/ResetPWCard.svelte";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";

  import type { AppStore } from "$lib/stores/types";
  const store: AppStore = getContext("rally:store");
  let isLoading = false;
  let showCardsWrapper = true;
  let loadingItem = null;

  onMount(() => {
    localStorage.removeItem("loading");
  });

  let userEmail;

  let {
    cardArgs,
    welcomeArgs,
    joinArgs,
    createArgs,
    signinArgs,
    forgetPWArgs,
    checkEmailPWArgs,
    checkEmailArgs,
    resetPWArgs,
  } = state;

  let {
    welcomeCard,
    joinCard,
    createAcctCard,
    signinCard,
    forgetPWCard,
    checkEmailCard,
    checkEmailPWCard,
    resetPWCard,
  } = state.card;

  $: if ($store._initialized && $store?.user?.uid) {
    if (!$store?.user?.enrolled) {
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
  } else if (signinCard) {
    cardArgs = signinArgs;
  } else if (forgetPWCard) {
    cardArgs = forgetPWArgs;
  } else if (checkEmailPWCard) {
    cardArgs = checkEmailPWArgs;
  } else if (checkEmailCard) {
    cardArgs = checkEmailArgs;
  } else if (resetPWCard) {
    cardArgs = resetPWArgs;
  }

  const showSpinner = (event) => {
    loadingItem = event.detail.item;
    if (loadingItem) {
      isLoading = true;
      showCardsWrapper = false;
    }
  };

  const resetState = () => {
    welcomeCard = true;
    joinCard = false;
    createAcctCard = false;
    signinCard = false;
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
        signinCard = false;
        createAcctCard = true;
        break;
      case "signin":
        welcomeCard = false;
        joinCard = false;
        createAcctCard = false;
        signinCard = true;
        break;
      case "forget":
        welcomeCard = false;
        signinCard = false;
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
</script>

<section class="mzp-c-call-out">
  <div class="mzp-l-content sign-in-container">
    <h2 class="mzp-c-call-out-title mzp-has-zap-1">
      <img src="img/logo-wide.svg" alt="Mozilla Rally Logo" />
    </h2>

    <p
      class="mzp-c-call-out-desc"
      style="color: var(--color-marketing-gray-70);"
    >
      This is a feasibility spike exploring a web-based Rally user experience.
    </p>
    <div class="cards-wrapper">
      {#if isLoading}
        <svg
          class="spinner"
          width="65px"
          height="65px"
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
      {/if}

      {#if showCardsWrapper}
        {#if welcomeCard || joinCard}
          <LaunchCard
            {...cardArgs}
            {store}
            on:type={triggerCard}
            on:item={showSpinner}
          />
        {/if}

        {#if signinCard && !welcomeCard && !joinCard}
          <SignInCard {...cardArgs} {store} on:type={triggerCard} />
        {/if}

        {#if createAcctCard && !welcomeCard && !joinCard && !signinCard}
          <CreateCard {...cardArgs} {store} on:type={triggerCard} />
        {/if}

        {#if (checkEmailCard || checkEmailPWCard) && !welcomeCard && !joinCard}
          <CheckEmailCard {...cardArgs} {userEmail} on:type={triggerCard} />
        {/if}

        {#if forgetPWCard && !welcomeCard && !joinCard && !signinCard && !createAcctCard && !checkEmailCard}
          <ForgetPwCard
            {...cardArgs}
            {sendUserInfo}
            {store}
            on:type={triggerCard}
          />
        {/if}

        {#if resetPWCard && !checkEmailPWCard}
          <ResetPwCard {...cardArgs} {store} on:type={triggerCard} />
        {/if}
      {/if}
    </div>

    <div class="how-it-works">
      <a
        class="external-link"
        target="_blank"
        rel="noopener noreferrer"
        href="__BASE_SITE__/how-rally-works/"
        >Wait – how does it work again?
        <ExternalLink /></a
      >
    </div>
  </div>
</section>

<style>
  .sign-in-container {
    backface-visibility: hidden;
  }
  .mzp-c-call-out-title {
    animation: moveInLeft 1s ease-out;
  }

  .mzp-c-call-out {
    background-color: transparent;
    min-height: calc(100vh - 2.5rem);
    padding: 0;
  }

  .mzp-l-content {
    padding-left: 0;
    padding-right: 0;
    /* this is Main + required padding to meet 120px */
    padding-top: 80px;
  }

  .mzp-c-call-out-title {
    margin-bottom: 12px;
  }

  .cards-wrapper {
    margin-top: 40px;
  }

  .how-it-works {
    margin-top: 24px;
    text-align: center;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  .spinner {
    -webkit-animation: rotator 1.4s linear infinite;
    animation: rotator 1.4s linear infinite;
    height: 400px;
  }

  @-webkit-keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    -webkit-animation: dash 1.4s ease-in-out infinite,
      colors 5.6s ease-in-out infinite;
    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  }

  @-webkit-keyframes colors {
    0% {
      stroke: #4285f4;
    }
    25% {
      stroke: #de3e35;
    }
    50% {
      stroke: #f7c223;
    }
    75% {
      stroke: #1b9a59;
    }
    100% {
      stroke: #4285f4;
    }
  }

  @keyframes colors {
    0% {
      stroke: #4285f4;
    }
    25% {
      stroke: #de3e35;
    }
    50% {
      stroke: #f7c223;
    }
    75% {
      stroke: #1b9a59;
    }
    100% {
      stroke: #4285f4;
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
</style>
