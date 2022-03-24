<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { getContext } from "svelte";
  import type { Readable } from "svelte/store";
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

<section class="signin md-container-signin">
  <h2 class="mzp-c-call-out-title mzp-has-zap-1 signin__logo">
    <img src="img/logo-wide.svg" alt="Mozilla Rally Logo" />
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
        <ResetPwCard {...cardArgs} on:type={triggerCard} />
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
</section>


<style>
  .spinner-wrapper{
    text-align: center;
  }
</style>