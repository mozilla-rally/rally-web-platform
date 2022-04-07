<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { createEventDispatcher } from "svelte";
  import Button from "../../../lib/components/Button.svelte";

  const dispatch = createEventDispatcher();

  export let store;
  export let test;
  export let handleTrigger

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
    let notVerified = "Email account not verified";
    let isNotFoundErr = fireBaseErr.indexOf(userNotFound);
    let isNotPassword = fireBaseErr.indexOf(wrongPW);
    let isNotVerified = fireBaseErr.indexOf(notVerified);

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


</script>

<div class="form-wrapper">
  <form method="post">
    <fieldset class="mzp-c-field-set field-set">
      <div class="mzp-c-field field field--email">
        <div class="label-wrapper">
          <label class="mzp-c-field-label" for="id_user_email">Email</label>
        </div>
        <input
          class="mzp-c-field-control"
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
      <div class="mzp-c-field field field--pw">
        <div class="label-wrapper">
          <label class="mzp-c-field-label enter-pw" for="id_user_pw"
            >Password</label>
            <!-- FORGOT PASSWORD -->
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
      custom="card-button signin__btn"
      btnID="signin-btn"
    >
      <div class="button-text--signin">Sign in</div></Button
    >
  {/if}

  {#if test}
    <Button disabled={btnDisabled} size="xl" custom="card-button">
      <div class="button-text--signin">Sign in</div></Button
    >
  {/if}
</div>

<style>
  .forgot-pw button {
    border-color: transparent;
    background: transparent;
    cursor: pointer;
    color: var(--color-blue-50);
    font-weight: 600;
    font-size: 12px;
  }
</style>
