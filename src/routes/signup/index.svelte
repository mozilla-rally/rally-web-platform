<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";
  import * as state from "$lib/components/auth-cards/state.svelte";
  import SignInCard from "$lib/components/auth-cards/SignInCard.svelte";
  import LaunchCard from "$lib/components/auth-cards/LaunchCard.svelte";
  import CreateCard from "$lib/components/auth-cards/CreateCard.svelte";
  import ForgetPwCard from "$lib/components/auth-cards/ForgetPWCard.svelte";
  import CheckEmailCard from "$lib/components/auth-cards/CheckEmailCard.svelte";
  import ResetPwCard from "$lib/components/auth-cards/ResetPWCard.svelte";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";
  import "$lib/components/auth-cards/Auth.css";

  import type { AppStore } from "$lib/stores/types";
  const store: AppStore = getContext("rally:store");

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
    switch (event.detail.text) {
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
        checkEmailCard = true;
        break;
      default:
        break;
    }
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
      {#if welcomeCard || joinCard}
        <LaunchCard {...cardArgs} {store} on:type={triggerCard} />
      {/if}

      {#if signinCard && !welcomeCard && !joinCard}
        <SignInCard {...cardArgs} {store} on:type={triggerCard} />
      {/if}

      {#if createAcctCard && !welcomeCard && !joinCard && !signinCard}
        <CreateCard {...cardArgs} {store} on:type={triggerCard} />
      {/if}

      {#if (checkEmailCard || checkEmailPWCard) && !welcomeCard && !joinCard}
        <CheckEmailCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if forgetPWCard && !welcomeCard && !signinCard}
        <ForgetPwCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if resetPWCard && !checkEmailPWCard}
        <ResetPwCard {...cardArgs} on:type={triggerCard} />
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
</style>
