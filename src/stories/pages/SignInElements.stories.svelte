<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../lib/components/Card.svelte";
  import LaunchCard from "./cards/LaunchCard.svelte";
  import SignInCard from "./cards/SignInCard.svelte";
  import CreateCard from "./cards/CreateCard.svelte";
  import CheckEmailCard from "./cards/CheckEmailCard.svelte";
  import ForgetPWCard from "./cards/ForgetPWCard.svelte";
  import ResetPwCard from "./cards/ResetPWCard.svelte";
  import ExternalLink from "../../lib/components/icons/ExternalLink.svelte";
  import TestSignIn from "../../lib/layouts/main/TestSignIn.svelte";
  // import isMounted from "../../lib/is-mounted";
  import "./SignIn.css";
  import "../components/RallyNavbar.css";
  import "../components/RallyDialog.css";

  // const mounted = isMounted();

  //launch card states
  let welcomeCard = true;
  let joinCard = false;
  let createAcctCard = false;
  let signinCard = false;
  let forgetPWCard = false;
  let resetPWCard = false;
  let checkEmailCard = false;
  let checkEmailPWCard = false;
  let cardHeight = "auto";

  //Card args
  const argTypes = {
    width: { control: "text" },
    height: { control: "text" },
    topPadding: { control: "text" },
    fontSize: { control: "text" },
  };

  let cardArgs = {
    width: "460px",
    fontSize: "38px",
    topPadding: "calc(10vh - 20px)",
  };

  let welcomeArgs = {
    ...cardArgs,
    title: "Welcome Back",
    body: "Text",
    cta1: "Continue with Google",
    cta2: "Continue with email",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
    welcomeCard,
  };

  let joinArgs = {
    ...cardArgs,
    title: "Join Rally",
    cta1: "Sign up with Google",
    cta2: "Sign up with email",
    bodyText: "Already have an account?",
    linkText: "Sign In",
  };

  let createArgs = {
    ...cardArgs,
    height: cardHeight,
    title: "Create Account",
    cta1: "Continue",
    bodyText: "Already have an account?",
    linkText: "Sign In",
    custom: "modal-body-signin",
  };

  let signinArgs = {
    ...cardArgs,
    title: "Welcome Back",
    cta1: "Sign In",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
    custom: "Card-body-signin",
    signinCard,
    cardHeight,
  };

  let forgetPWArgs = {
    ...cardArgs,
    height: "339px",
    title: "?Forgot Your Password",
    cta1: "Request Password Reset",
    bodyText: "We'll send you a link to reset your password",
    custom: "Card-body-signin",
    minHeight: "339px",
  };

  let checkEmailPWArgs = {
    ...cardArgs,
    height: "300px",
    title: "Check Your Email",
    body:
      "An email has been sent to [example@workmail.com] to reset your password",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-Card",
    minHeight: "300px",
    checkPW: true,
  };

  let checkEmailArgs = {
    ...cardArgs,
    height: "276px",
    title: "Check Your Email",
    body:
      "To finish creating your account with Rally, you will need to verify your email address.",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-Card",
    minHeight: "300px",
    checkPW: false,
  };

  let resetPWArgs = {
    ...cardArgs,
    height: "276px",
    title: "Reset Your Password",
    cta1: "Reset Password",
    minHeight: "400px",
    custom: "reset-pw",
  };

  // reactivity
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

  //methods

  const resetState = () => {
    welcomeCard = true;
    joinCard = false;
    createAcctCard = false;
    signinCard = false;
    forgetPWCard = false;
    resetPWCard = false;
    checkEmailCard = false;
    checkEmailPWCard = false;
    cardHeight = "auto";
  };
  const triggerCard = (event) => {
    console.log("TRIGGER", event.detail.text);
    switch (event.detail.text) {
      case "join":
        welcomeCard = false;
        joinCard = true;
        break;
      case "welcome":
        resetState()
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

<Meta title="Pages/SignIn" component={Card} {argTypes} />

<Template let:args>
  <div class="sign-in-container">
    <TestSignIn />

    <div class="cards-wrapper">
      {#if welcomeCard || joinCard}
        <LaunchCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if signinCard && !welcomeCard && !joinCard}
        <SignInCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if createAcctCard && !welcomeCard && !joinCard && !signinCard}
        <CreateCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if (checkEmailCard || checkEmailPWCard) && !welcomeCard && !joinCard}
        <CheckEmailCard {...cardArgs} on:type={triggerCard} />
      {/if}

      {#if forgetPWCard && !welcomeCard && !signinCard}
        <ForgetPWCard {...cardArgs} on:type={triggerCard} />
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
</style>
