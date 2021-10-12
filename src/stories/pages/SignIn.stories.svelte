<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RallyNavbar from "../../lib/layouts/main/Navbar.svelte";
  import TestSignIn from "../../lib/layouts/main/TestSignIn.svelte";
  import { fly } from "svelte/transition";
  import isMounted from "../../lib/is-mounted";
  import Button from "../../lib/components/Button.svelte";
  import "./SignIn.css";
  import "../components/RallyNavbar.css";
  import "../components/RallyDialog.css";

  const dispatch = createEventDispatcher();
  const mounted = isMounted();

  //launch modal states
  let welcomeModal = false;
  let joinModal = false;
  let createAcctModal = false;
  let signinModal = false;
  let forgetPWModal = false;
  let resetPWModal = false;
  let checkEmailModal = false;
  let checkEmailPWModal = false;
  let Dialog;

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
  let dialogHeight = "auto";
  let formHeight = "auto";

  //nav states
  let ariaExpanded = false;
  let ariaHidden = true;
  let isOpaque = false;
  let navOpacity = 0;

  //title text states
  let titleEl;
  let textWidth;

  //modal args
  let args = {
    width: "460px",
    fontSize: "38px",
    topPadding: "calc(10vh - 20px)",
  };

  let welcomeArgs = {
    ...args,
    title: "Welcome Back",
    body: "Text",
    cta1: "Continue with Google",
    cta2: "Continue with email",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
  };

  let joinArgs = {
    ...args,
    title: "Join Rally",
    body: "Text",
    cta1: "Sign up with Google",
    cta2: "Sign up with email",
    bodyText: "Already have an account?",
    linkText: "Sign In",
  };

  let createArgs = {
    ...args,
    height: dialogHeight,
    title: "Create Account",
    body: "Text",
    cta1: "Continue",
    bodyText: "Already have an account?",
    linkText: "Sign In",
  };

  let signinArgs = {
    ...args,
    title: "Welcome Back",
    body: "Text",
    cta1: "Sign In",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
    custom: "modal-body-signin",
  };

  let forgetPWArgs = {
    ...args,
    height: "339px",
    title: "?Forgot Your Password",
    body: "Text",
    cta1: "Request Password Reset",
    bodyText: "We'll send you a link to reset your password",
    custom: "modal-body-signin",
    minHeight: "339px",
  };

  let checkEmailPWArgs = {
    ...args,
    height: "300px",
    title: "Check Your Email",
    body:
      "An email has been sent to [example@workmail.com] to reset your password",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-dialog",
    minHeight: "300px",
  };

  let checkEmailArgs = {
    ...args,
    height: "276px",
    title: "Check Your Email",
    body:
      "To finish creating your account with Rally, you will need to verify your email address.",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-dialog",
    minHeight: "null",
  }

  onMount(async () => {
    Dialog = (await import("../../lib/components/Dialog.svelte")).default;
  });

  // reactivity
  $: titleEl ? (textWidth = titleEl.clientWidth) : null;
  $: cssVarStyles1 = `--nav-opacity:${navOpacity}`;
  $: cssVarStyles2 = `--titleWidth:${textWidth}px`;
  $: if (welcomeModal === true) {
    args = welcomeArgs;
  } else if (joinModal === true) {
    args = joinArgs;
  } else if (createAcctModal === true) {
    args = createArgs;
  } else if (signinModal === true) {
    args = signinArgs;
  } else if (forgetPWModal === true) {
    args = forgetPWArgs;
  } else if (checkEmailPWModal === true) {
    args = checkEmailPWArgs;
  }else if (checkEmailModal === true) {
    args = checkEmailArgs;
  }
  //input reactivity

  $: inputStyles = `--inputVisible:${passwordInputVisible}`;
  $: formStyles = `--formHeight:${formHeight}`;

  //methods
  const triggerModal = (type) => {
    switch (type) {
      case "join":
        joinModal = true;
        break;
      case "welcome":
        welcomeModal = true;
        break;
      case "create":
        joinModal = false;
        createAcctModal = true;
        break;
      case "signin":
        welcomeModal = false;
        setTimeout(() => {
          signinModal = true;
        }, 500);
        break;
      case "forget":
        welcomeModal = false;
        signinModal = false;
        setTimeout(() => {
          forgetPWModal = true;
        }, 500);
        break;
      case "check-pw":
        forgetPWModal = false;
        setTimeout(() => {
          checkEmailPWModal = true;
        }, 500);
        break;
      case "check-create":
        createAcctModal = false;
        setTimeout(() => {
          checkEmailModal = true;
        }, 500);
        break;
      default:
        break;
    }

    if (!type) {
      if (welcomeModal) {
        welcomeModal = false;
        setTimeout(() => {
          joinModal = true;
        }, 500);
        // joinModal = true;
      } else {
        joinModal = false;
        setTimeout(() => {
          welcomeModal = true;
        }, 500);
      }
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
    console.log(passwordEl.value.length)
    if (passwordEl.value.length <= 0) {
      btnDisabled = true;
      passwordInputVisible = "block";
      dialogHeight = "626px";
      formHeight = "270px";
    } 

    if(password){
      triggerModal("check-create");
    }
  };
</script>

<Meta title="Pages/SignIn" component={TestSignIn} />

<Template>
  <div class="container" style={cssVarStyles1}>
    <header class="header">
      <RallyNavbar>
        <div class="header-logo-nav" slot="logo-nav">
          <!-- rally logo -->
          <a class="header-logo-link" href="/" alt="">
            {#if $mounted}
              <h1 in:fly={{ duration: 800, x: -15 }}>
                <img src="img/moz-rally-logo.svg" alt="Mozilla Rally Logo" />
              </h1>
            {/if}
          </a>

          <!-- main nav -->
          <div
            class="navbar-nav"
            id="nav"
            aria-hidden={ariaHidden}
            style={cssVarStyles1}
          >
            <nav class="nav" aria-label="Primary navigation">
              <ul class="nav-list">
                <li
                  class="nav-item"
                  in:fly={{ duration: 800, delay: 200, x: -15 }}
                >
                  <a
                    class="nav-link external"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.mozilla.org/en-US/kb/about-mozilla-rally"
                    >How Rally Works
                  </a>
                </li>

                <li
                  class="nav-item"
                  in:fly={{ duration: 800, delay: 200, x: -15 }}
                >
                  <a class="nav-link" href="/studies" sveltekit:prefetch>
                    Current Studies
                  </a>
                </li>

                <li
                  class="nav-item"
                  in:fly={{ duration: 800, delay: 200, x: -15 }}
                >
                  <a
                    class="nav-link external"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="__BASE_SITE__/how-rally-works/faqs/"
                    >About Us
                  </a>
                </li>
                <li class="nav-item nav-sign-up">
                  <div class="nav-btns sign-in-up">
                    <Button
                      on:click={() => triggerModal("welcome")}
                      customControl={true}
                      borderColor="transparent"
                      textColor="#000000"
                      background="#ffffff"
                      custom={"btn-sign-in-up sign-in"}
                      size={"lg"}
                      neutral={true}>Sign in</Button
                    >
                    <Button
                      on:click={() => triggerModal("join")}
                      custom={"btn-sign-in-up create"}
                      size={"lg"}>Create Account</Button
                    >
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <!-- main nav end -->

          <!-- mobile nav toggle -->
          <button
            on:click={toggleNavIcon}
            class="header-navToggle btn"
            type="button"
            data-expands="nav"
            data-expands-height
            aria-expanded={ariaExpanded}
          >
            <span class="header-navToggle-icon" />
            <span class="is-active-hide" aria-label="Open navigation menu." />
            <span class="is-active-show" aria-label="Close navigation menu." />
          </button>
        </div>

        <!-- signin create-->
        <div class="sign-in-up" slot="signup-login">
          <Button
            on:click={() => triggerModal("welcome")}
            customControl={true}
            borderColor="transparent"
            textColor="#000000"
            background="#ffffff"
            custom={"btn-sign-in-up sign-in"}
            size={"lg"}
            neutral={true}>Sign in</Button
          >
          <Button
            on:click={() => triggerModal("join")}
            custom={"btn-sign-in-up create"}
            size={"lg"}>Create Account</Button
          >
        </div>
      </RallyNavbar>
    </header>
    <TestSignIn />
    <footer/>
  </div>

  {#if (welcomeModal || joinModal) && mounted && Dialog}
    <Dialog
      {...args}
      height={args.height}
      topPadding={args.topPadding}
      width={args.width}
      on:dismiss={() => {
        joinModal = false;
        welcomeModal = false;
      }}
    >
      <div class="title-wrapper" slot="title">
        <div style={cssVarStyles2} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>

      <div class="modal-body-content" slot="body">
        <div class="button-wrapper">
          <Button
            size="lg"
            customControl={true}
            textColor="#000000"
            background="transparent !important"
            borderColor="#000000"
            custom="modal-button"
          >
            <img
              width="20px"
              height="20px"
              src="img/google-logo.svg"
              alt="Google logo in color"
            />
            <div class="button-text">{args.cta1}</div></Button
          >
        </div>

        <div class="button-wrapper">
          <Button
            size="lg"
            customControl={true}
            textColor="#000000"
            background="transparent"
            borderColor="#000000"
            custom="modal-button"
          >
            <img
              width="24px"
              height="24px"
              src="img/email.svg"
              alt="Email icon"
            />
            <div
              on:click={() => {
                welcomeModal ? triggerModal("signin") : triggerModal("create");
              }}
              class="button-text"
            >
              {args.cta2}
            </div></Button
          >
        </div>

        <p class="body-text-privacy">
          By proceeding, you agree to our <a href="/">Privacy Notice</a>
        </p>
        <p class="body-text-action">
          {args.bodyText}
          <button on:click={() => triggerModal(null)}>{args.linkText}</button>
        </p>
      </div>
    </Dialog>
  {/if}

  {#if createAcctModal && mounted && Dialog}
    <Dialog
      {...args}
      height={args.height}
      topPadding={args.topPadding}
      width={args.width}
      on:dismiss={() => {
        createAcctModal = false;
        joinModal = false;
      }}
    >
      <div class="title-wrapper" slot="title">
        <div style={cssVarStyles2} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>

      <div class="modal-body-content sigin-modal" slot="body">
        <form method="post" style={formStyles}>
          <fieldset class="mzp-c-field-set">
            <div class="mzp-c-field ">
              <input
                class="mzp-c-field-control "
                bind:value={email}
                bind:this={emailEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_email"
                name="id_user_email"
                type="email"
                width="100%"
                placeholder="enter your email address"
                required
              />
            </div>

            <div style={inputStyles} class="mzp-c-field field-pw">
              <div class="label-wrapper">
                <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                  >Choose a Password</label
                >
              </div>

              <input
                class="mzp-c-field-control"
                bind:value={password}
                bind:this={passwordEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_pw"
                name="id_user_pw"
                type="password"
                {pattern}
                width="100%"
                required
              />
              {#if passwordVisible}
                <img
                  src="img/eye-slash.svg"
                  alt="Eye with slash across it"
                  class="fas fa-eye-slash togglePassword"
                  id="hide-eye"
                  width="24px"
                  height="24px"
                  on:click|preventDefault={handleToggle}
                />
              {:else}
                <img
                  src="img/eye-open.svg"
                  alt="Open eye"
                  class="togglePassword"
                  id="show-eye"
                  width="24px"
                  height="24px"
                  on:click|preventDefault={handleToggle}
                />
              {/if}
              <p style={inputStyles} class="info-msg-active">
                Your password should be unique, and must contain:
              </p>
              <ul class="info-rules">
                <li bind:this={length} id="length" class="invalid">
                  At least 8 characters
                </li>
                <li bind:this={capital} id="capital" class="invalid">
                  At least 1 uppercase letter
                </li>
                <li bind:this={letter} id="letter" class="invalid">
                  At least 1 lowercase letter
                </li>
                <li bind:this={number} id="number" class="invalid">
                  At least 1 number
                </li>
              </ul>

              <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
              Please matching the password requirements 
            </p> -->
            </div>
          </fieldset>
        </form>
        <Button
          disabled={btnDisabled}
          size="xl"
          custom="modal-button create"
          on:click={showPasswordInput}
        >
          <div class="button-text">{args.cta1}</div></Button
        >
        <p class="body-text-privacy">
          By proceeding, you agree to our <a href="/">Privacy Notice</a>
        </p>

        <p class="body-text-action">
          {args.bodyText}
          <button
            on:click={() => {
              createAcctModal = false;
              triggerModal(null);
            }}>{args.linkText}</button
          >
        </p>
      </div>
    </Dialog>
  {/if}

  <!-- SIGNIN MODAL -->
  {#if signinModal && mounted && Dialog}
    <Dialog
      {...args}
      height={args.height}
      topPadding={args.topPadding}
      width={args.width}
      on:dismiss={() => {
        signinModal = false;
        welcomeModal = false;
      }}
    >
      <div class="title-wrapper" slot="title">
        <div style={cssVarStyles2} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>

      <div class="modal-body-content sigin-modal" slot="body">
        <form method="post">
          <fieldset class="mzp-c-field-set">
            <div class="mzp-c-field ">
              <input
                class="mzp-c-field-control "
                bind:value={email}
                bind:this={emailEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_email"
                name="id_user_email"
                type="email"
                width="100%"
                required
              />
            </div>
            <div class="mzp-c-field ">
              <div class="label-wrapper">
                <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                  >Enter your Password</label
                >
                <label class="mzp-c-field-label forgot-pw" for="id_user_pw">
                  <button
                    on:click={() => {
                      signinModal = false;
                      triggerModal("forget");
                    }}>Forget Password</button
                  >
                </label>
              </div>

              <input
                class="mzp-c-field-control"
                bind:value={password}
                bind:this={passwordEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_pw"
                name="id_user_pw"
                type="password"
                min={minPasswordLength}
                width="100%"
                required
              />
              {#if passwordVisible}
                <img
                  src="img/eye-slash.svg"
                  alt="Eye with slash across it"
                  class="fas fa-eye-slash togglePassword"
                  id="hide-eye"
                  width="24px"
                  height="24px"
                  on:click|preventDefault={handleToggle}
                />
              {:else}
                <img
                  src="img/eye-open.svg"
                  alt="Open eye"
                  class="togglePassword"
                  id="show-eye"
                  width="24px"
                  height="24px"
                  on:click|preventDefault={handleToggle}
                />
              {/if}
              <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
            Please choose a password that is at least 8 characters
          </p> -->
            </div>
          </fieldset>
        </form>
        <Button disabled={btnDisabled} size="xl" custom="modal-button signin">
          <div class="button-text">
            {args.cta1}
          </div></Button
        >

        <p class="body-text-action">
          {args.bodyText}
          <button
            on:click={() => {
              signinModal = false;
              triggerModal(null);
            }}>{args.linkText}</button
          >
        </p>
      </div>
    </Dialog>
  {/if}

  <!-- forget password modal -->
  {#if forgetPWModal && mounted && Dialog}
    <Dialog
      height={args.height}
      topPadding={args.topPadding}
      width={args.width}
      on:dismiss={() => {
        signinModal = false;
        welcomeModal = false;
        forgetPWModal = false;
      }}
    >
      <div class="title-wrapper" slot="title">
        <div style={cssVarStyles2} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>

      <div class="modal-body-content sigin-modal" slot="body">
        <form method="post" style={formStyles}>
          <fieldset class="mzp-c-field-set">
            <div class="mzp-c-field ">
              <input
                class="mzp-c-field-control "
                bind:value={email}
                bind:this={emailEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_email"
                name="id_user_email"
                type="email"
                width="100%"
                placeholder="enter your email address"
                required
              />
            </div>
          </fieldset>
        </form>
        <Button
          on:click={() => {
            forgetPWModal = false;
            triggerModal("check-pw");
          }}
          disabled={btnDisabled}
          size="xl"
          custom="modal-button create"
        >
          <div class="button-text">{args.cta1}</div></Button
        >

        <p class="body-text-action">
          {args.bodyText}
        </p>
      </div>
    </Dialog>
  {/if}
  <!-- 
  {#if resetPWModal && mounted && Dialog}{/if} -->

  <!-- check email modal -->
  {#if (checkEmailModal || checkEmailPWModal) && mounted && Dialog}
    <Dialog
      height={args.height}
      topPadding={args.topPadding}
      width={args.width}
      on:dismiss={() => {
        checkEmailPWModal = false;
        checkEmailModal = false;
      }}
    >
      <div class="title-wrapper" slot="title">
        <div style={cssVarStyles2} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>

      <div class="modal-body-content" slot="body">
        <p class="body-text-info">{args.body}</p>
        <p class="body-text-action">
          {args.bodyText} <a href="/">{args.linkText}</a>
        </p>
      </div>
    </Dialog>
  {/if}
</Template>

<Story name="SignIn" />

<style>
  /* navbar styles */
  a {
    text-decoration: none;
    color: black;
  }

  .header {
    padding-bottom: 1.125rem;
    padding-top: 1.125rem;
  }

  .header-navToggle {
    display: block;
  }

  .header-logo-nav {
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 1.0625rem;
    padding-right: 1.0625rem;
    position: relative;
    /* z-index: 901; */
  }

  .header-logo-link {
    max-width: 9.125rem;
  }

  .header-logo-link img {
    display: block;
    width: 100%;
  }

  .nav {
    padding: 0.9375rem 1.0625rem 1.1875rem;
  }

  .navbar-nav {
    max-height: 315px;
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 8px 12px 1px rgb(29 17 51 / 4%),
      0 20px 16px 2px rgb(9 32 77 / 12%), 0 5px 10px -3px rgb(29 17 51 / 12%);
    top: 42px;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 900;
    left: 0;
    visibility: visible;
  }

  .navbar-nav[aria-hidden="true"] {
    transition: max-height 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
      visibility 0s linear 0.4s;
    max-height: 0 !important;
  }

  .navbar-nav[aria-hidden="false"] {
    transition: max-height 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
      visibility 0s linear 0s;
    visibility: visible;
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-list li {
    margin-right: 0;
  }

  .nav-list a {
    transition: all 0.15s ease-in-out;
  }

  .nav-link,
  .nav-btns {
    font-weight: 700;
    font-size: 1.125rem;
    border-top: 1px solid #e7e5e2;
    display: block;
    font-size: 1.125rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .nav-sign-up {
    display: block;
  }

  .sign-in-up {
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 32px;
  }

  .nav-btns {
    justify-content: center;
  }

  /* queries */
  /* --mobile: 20em; 
  --tablet: 43em; 
  --desktop: 64.125em;
  --large-screen: 82em; */

  /* min-width of 1026px */
  @media screen and (min-width: 64.125em) {
    .header {
      /* padding: 2rem 2.5rem; */
      padding: 2rem 2.5rem 0rem 2.5rem;
    }

    .header-navToggle {
      display: none;
    }
    .header-logo-nav {
      width: auto;
      flex-direction: row;
      align-items: center;
      padding-left: 0;
    }

    .nav {
      padding: unset;
    }

    .navbar-nav {
      max-height: unset;
      margin-left: 0;
      margin-left: 4.625rem;
      background-color: unset;
      border-radius: unset;
      box-shadow: unset;
      left: auto;
      overflow: auto;
      width: auto;
      z-index: auto;
      position: unset;
      opacity: 1;
    }

    .navbar-nav[aria-hidden="true"] {
      max-height: unset !important;
    }

    .nav-list {
      align-items: center;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-list li {
      margin-right: 2.5rem;
      line-height: 1.2;
    }

    .nav-link {
      border-top: unset;
      display: block;
      padding-bottom: unset;
      padding-top: unset;
    }

    .nav-sign-up {
      display: none;
    }
    .sign-in-up {
      margin: 0;
      padding-top: 0;
      position: relative;
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 40em) {
    .header-logo-link {
      max-width: 12.75rem;
    }
  }

  /* dialog styles */

  .modal-body-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button-wrapper {
    width: 244px;
    margin: auto;
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
  }

  .title-text {
    z-index: 1;
    position: absolute;
    white-space: nowrap;
    display: inline-block;
  }

  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }

  .button-text {
    margin-left: 10px;
  }

  p {
    margin: auto;
  }

  p a {
    color: #000000;
  }

  .body-text-privacy {
    font-size: 12px;
    padding-top: 20px;
  }

  .body-text-action {
    font-size: 16px;
    padding-top: 40px;
    color: #000000;
  }

  .forgot-pw button,
  .body-text-action button {
    font-weight: 700;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
  }

  .forgot-pw button {
    color: var(--color-blue-50);
    font-weight: 600;
    font-size: 12px;
  }

  /* create account styles */
  .modal-body-content.sigin-modal {
    margin-top: 8px;
    width: 100%;
  }

  .button-wrapper {
    width: 244px;
    margin: auto;
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
  }

  .title-text {
    z-index: 1;
    position: absolute;
    white-space: nowrap;
    display: inline-block;
  }

  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }

  .button-text {
    margin-left: 10px;
    text-align: center;
  }

  p {
    margin: auto;
  }

  .body-text-action a {
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 50px;
  }

  form {
    height: var(--formHeight);
  }

  form img {
    position: absolute;
    margin: 14px 0 0 -35px;
    cursor: pointer;
  }

  input[required]:invalid:focus {
    border: 2px solid red;
  }

  .error-msg-active,
  .info-msg-active {
    text-align: left;
    font-size: 12px;
    color: gray;
    padding: 10px;
    display: var(--inputVisible);
  }

  .info-msg-active {
    padding: 0;
    margin-top: 10px;
  }

  ul {
    list-style: disc;
    font-size: 12px;
    color: gray;
    padding: 5px 0 0 23px;
  }

  .hide-error-msg {
    display: none;
  }

  .enter-pw {
    color: #818282;
  }

  .label-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .mzp-c-field-label {
    font-weight: 600;
    font-size: 12px;
  }

  .mzp-c-field-label a {
    text-decoration: none;
    color: var(--color-blue-50);
  }

  .field-pw {
    display: var(--inputVisible);
  }

  /* check info styles */
  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }
</style>
