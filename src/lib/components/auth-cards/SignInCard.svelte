<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import Button from "../../../lib/components/Button.svelte";
  import "./Auth.css";

  const dispatch = createEventDispatcher();

  export let title;
  export let cta1;
  export let bodyText;
  export let linkText;
  export let width;
  export let topPadding;
  export let fontSize;
  export let store;
  export let test;

  let titleEl;
  let textWidth;
  let email;
  let password;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let signInErr = false;
  let signInErrText = "";
  let fireBaseErr = null;
  const minPasswordLength = 8;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
    // localStorage.removeItem("signInErr");
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: fireBaseErr ? (signInErr = true) : (signInErr = false);

  const handleChange = () => {
    if (emailEl && passwordEl) {
      passwordEl.value.length >= minPasswordLength && emailEl.value.length > 0
        ? (btnDisabled = false)
        : (btnDisabled = true);
    }
  };

  const setMessage = () => {
    let userNotFound = "auth/user-not-found";
    let wrongPW = "auth/wrong-password";
    let notVerified = "Email account not verified"
    let isNotFoundErr = fireBaseErr.indexOf(userNotFound);
    let isNotPassword = fireBaseErr.indexOf(wrongPW);
    let isNotVerified = fireBaseErr.indexOf(notVerified)

    if (isNotFoundErr > -1) {
      signInErrText = "User not found. Please try again.";
    }

    if (isNotPassword > -1) {
      signInErrText = "Wrong password. Please try again.";
    }

    if (isNotVerified > -1) {
      signInErrText = "Email account not verified.";
    }

    localStorage.removeItem("signInErr");
  };

  const handleNextState = () => {
    fireBaseErr = localStorage.getItem("signInErr");
    fireBaseErr ? setMessage() : null;
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<Card {width} {topPadding} {fontSize}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="card-body-content signin-card" slot="card-body">
    <form method="post">
      <fieldset class="mzp-c-field-set">
        <div class="mzp-c-field">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_email"
              >Enter your email</label
            >
          </div>
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
        <div class="mzp-c-field">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Enter your password</label
            >
            <label class="mzp-c-field-label forgot-pw" for="id_user_pw">
              <button
                on:click={() => {
                  handleTrigger("forget");
                }}>Forgot password</button
              ></label
            >
          </div>

          <div class="input-wrapper">
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
          </div>

          <!-- ERROR MESSAGE -->
          {#if signInErr}
            <p class="error-msg-active">
              {signInErrText}
            </p>
          {/if}
        </div>
      </fieldset>
    </form>

    {#if !test}
      <Button
        on:click={async () => {
          await store.loginWithEmailAndPassword(email, password);
          handleNextState();
        }}
        disabled={btnDisabled}
        size="xl"
        custom="card-button signin"
        btnID="signin-btn"
      >
        <div class="button-text">
          {cta1}
        </div></Button
      >
    {/if}

    {#if test}
      <Button disabled={btnDisabled} size="xl" custom="card-button signin">
        <div class="button-text">
          {cta1}
        </div></Button
      >
    {/if}

    <p class="body-text-action">
      {bodyText}
      <button
        on:click={() => {
          handleTrigger("join");
        }}>{linkText}</button
      >
    </p>
  </div>
</Card>

<style>
  .title-highlight {
    background-color: var(--color-yellow-35);
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
    transition: width 0.2s ease-in;
  }

  .forgot-pw button {
    border-color: transparent;
    background: transparent;
    cursor: pointer;
    color: var(--color-blue-50);
    font-weight: 600;
    font-size: 12px;
  }
</style>
