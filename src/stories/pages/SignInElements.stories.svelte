<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import * as state from "../../lib/components/auth-cards/state.svelte";
  import Card from "../../lib/components/Card.svelte";
  import SignInCard from "../../lib/components/auth-cards/SignInCard.svelte";
  import LaunchCard from "../../lib/components/auth-cards/LaunchCard.svelte";
  import CreateCard from "../../lib/components/auth-cards/CreateCard.svelte";
  import ForgetPwCard from "../../lib/components/auth-cards/ForgetPWCard.svelte";
  import CheckEmailCard from "../../lib/components/auth-cards/CheckEmailCard.svelte";
  import ResetPwCard from "../../lib/components/auth-cards/ResetPWCard.svelte";
  import ExternalLink from "../../lib/components/icons/ExternalLink.svelte";
  import TestSignIn from "../../lib/layouts/main/TestSignIn.svelte";
  import "./SignIn.css";
  import "../components/css/RallyNavbar.css";
  import "../../lib/components/auth-cards/Auth.css";

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
    console.log("TRIGGER", event.detail.text);
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

<Meta title="Pages/SignIn" component={Card} argTypes={state.card.argTypes} />

<Template let:args>
  <div class="sign-in-container">
    <TestSignIn />

    <div class="cards-wrapper">
      {#if welcomeCard || joinCard}
        <LaunchCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if signinCard && !welcomeCard && !joinCard}
        <SignInCard {...cardArgs} test={true} on:type={triggerCard} />
      {/if}

      {#if createAcctCard && !welcomeCard && !joinCard && !signinCard}
        <CreateCard {...cardArgs} test={true} on:type={triggerCard} />
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
</Template>

<Story name="SignIn" args={cardArgs} />

<style>
  .cards-wrapper {
    position: relative;
  }

  .how-it-works{
    margin-top: 45px; 
  }
</style>
