<script>
  import { onMount } from "svelte";
  import LaunchCard from "./cards/LaunchCard.svelte";
  import SignInCard from "./cards/SignInCard.svelte";
  import ExternalLink from "../../lib/components/icons/ExternalLink.svelte";
  import isMounted from "../../lib/is-mounted";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TestSignIn from "../../lib/layouts/main/TestSignIn.svelte";
  import Button from "../../lib/components/Button.svelte";
  import Card from "../../lib/components/Card.svelte";
  import "./SignIn.css";
  import "../components/RallyNavbar.css";
  import "../components/RallyDialog.css";
import { EventEmitter } from "selenium-webdriver";

  const mounted = isMounted();

  //launch card states
  let welcomeCard = true;
  let joinCard = false;
  let createAcctCard = false;
  let signinCard = false;
  let forgetPWCard = false;
  let resetPWCard = false;
  let checkEmailCard = false;
  let checkEmailPWCard = false;
  let startState;

  //create account states
  let email;
  let password;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let number;
  let length;
  let capital;
  let letter;
  // let errorMsg = false;
  const minPasswordLength = 8;
  let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  let passwordInputVisible = "none";
  let CardHeight = "auto";
  let formHeight = "auto";

  //nav states
  let ariaExpanded = false;
  let ariaHidden = true;
  let isOpaque = false;
  let navOpacity = 0;

  //title text states
  let titleEl;
  let textWidth;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  // reactivity
  $: if (welcomeCard === true) {
    cardArgs = welcomeArgs;
    // setTimeout(() => {
    //   if (titleEl) {
    //     textWidth = titleEl.clientWidth;
    //   }
    // }, 100);
    // console.log("THE WELCOME", textWidth);
  } else if (joinCard === true) {
    cardArgs = joinArgs;
    // setTimeout(() => {
    //   if (titleEl) {
    //     textWidth = titleEl.clientWidth;
    //   }
    // }, 100);
    // console.log("THE JOIN", textWidth);
  } else if (createAcctCard === true) {
    cardArgs = createArgs;
  } else if (signinCard === true) {
    cardArgs = signinArgs;
  } else if (forgetPWCard === true) {
    cardArgs = forgetPWArgs;
  } else if (checkEmailPWCard === true) {
    cardArgs = checkEmailPWArgs;
  } else if (checkEmailCard === true) {
    cardArgs = checkEmailArgs;
  }
  $: titleEl ? (textWidth = titleEl.clientWidth) : null;

  $: cssVarStyles1 = `--nav-opacity:${navOpacity}`;



  //input reactivity
  $: inputStyles = `--inputVisible:${passwordInputVisible}`;
  $: formStyles = `--formHeight:${formHeight}`;

  //methods
  const triggerCardEvent = (event) => {
    console.log("TRIGGER", event.detail.text);
    switch (event.detail.text) {
      case "join":
        welcomeCard = false;
        joinCard = true;
        break;
      case "welcome":
        joinCard = false;
        welcomeCard = true;
        break;
      case "create":
        joinCard = false;
        createAcctCard = true;
        break;
      case "signin":
        welcomeCard = false;
        setTimeout(() => {
          signinCard = true;
        }, 500);
        break;
      case "forget":
        welcomeCard = false;
        signinCard = false;
        setTimeout(() => {
          forgetPWCard = true;
        }, 500);
        break;
      case "check-pw":
        forgetPWCard = false;
        setTimeout(() => {
          checkEmailPWCard = true;
        }, 500);
        break;
      case "check-create":
        createAcctCard = false;
        setTimeout(() => {
          checkEmailCard = true;
        }, 500);
        break;
      default:
        break;
    }
  };

  const toggleNavIcon = () => {
    ariaExpanded = !ariaExpanded;
    ariaHidden = !ariaHidden;
    isOpaque = !isOpaque;
    checkOpacity();
  };

  const checkOpacity = () => {
    isOpaque ? (navOpacity = 1) : (navOpacity = 0);
  };

  //input methods
  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (email) {
      email.length > 0 ? (btnDisabled = false) : (btnDisabled = true);
    }
    if (passwordEl) {
      // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;
      passwordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("valid")
        : letter.classList.remove("valid");

      // Validate capital letters
      let upperCaseLetters = /[A-Z]/g;
      passwordEl.value.match(upperCaseLetters)
        ? capital.classList.add("valid")
        : capital.classList.remove("valid");

      // Validate numbers
      let numbers = /[0-9]/g;
      passwordEl.value.match(numbers)
        ? number.classList.add("valid")
        : number.classList.remove("valid");

      // Validate length
      passwordEl.value.length >= 8
        ? length.classList.add("valid")
        : length.classList.remove("valid");

      if (name === "id_user_pw") {
        // password.length <= minPasswordLength
        //   ? (errorMsg = false)
        //   : (errorMsg = true);
        if (
          password.length >= minPasswordLength &&
          passwordEl.value.match(numbers) &&
          passwordEl.value.match(upperCaseLetters) &&
          passwordEl.value.match(lowerCaseLetters)
        ) {
          btnDisabled = false;
        } else {
          btnDisabled = true;
        }
      }
    }
  };

  const showPasswordInput = () => {
    console.log(passwordEl.value.length);
    if (passwordEl.value.length <= 0) {
      btnDisabled = true;
      passwordInputVisible = "block";
      CardHeight = "626px";
      formHeight = "270px";
    } else {
      triggerCardEvent("check-create");
    }
  };

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
    joinCard,
    startState
  };

  let joinArgs = {
    ...cardArgs,
    title: "Join Rally",
    body: "Text",
    cta1: "Sign up with Google",
    cta2: "Sign up with email",
    bodyText: "Already have an account?",
    linkText: "Sign In",
  };

  let createArgs = {
    ...cardArgs,
    height: CardHeight,
    title: "Create Account",
    body: "Text",
    cta1: "Continue",
    bodyText: "Already have an account?",
    linkText: "Sign In",
  };

  let signinArgs = {
    ...cardArgs,
    title: "Welcome Back",
    body: "Text",
    cta1: "Sign In",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
    custom: "Card-body-signin",
  };

  let forgetPWArgs = {
    ...cardArgs,
    height: "339px",
    title: "?Forgot Your Password",
    body: "Text",
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
    minHeight: "null",
  };
</script>

<Meta title="Pages/SignInCard" component={Card} {argTypes} />

<Template let:args>
  <div class="sign-in-container" style={cssVarStyles1}>
    <TestSignIn />

    {#if isMounted}
      <div class="cards-wrapper">
        <LaunchCard on:message={triggerCardEvent} {...cardArgs} />
      </div>
    {/if}

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

<Story name="SignInCard" args={cardArgs} />

<style>
  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
    transition: width 0.2s ease-in;
  }

  .body-text-action button,
  .forgot-pw button {
    border-color: transparent;
    background: transparent;
    cursor: pointer;
  }

  .body-text-action button {
    font-weight: 700;
    text-decoration: underline;
  }

  .forgot-pw button {
    color: var(--color-blue-50);
    font-weight: 600;
    font-size: 12px;
  }

  .field-pw {
    display: var(--inputVisible);
  }

  .title-wrapper {
    padding-bottom: 10px;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }
</style>
