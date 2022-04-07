<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import Button from "../../../lib/components/Button.svelte";

  const dispatch = createEventDispatcher();

  export let title;
  export let cta1;
  export let bodyText;
  export let width;
  export let height;
  export let store;
  export let sendUserInfo;

  let btnDisabled = true;
  let email;
  let emailEl;
  let fireBaseErr = null;
  let requestErr = false;
  let requestErrText = "";
  let titleEl;
  let textWidth;
  let custom = ""

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: fireBaseErr ? (requestErr = true) : (requestErr = false);

  const handleChange = () => {
    if (emailEl) {
      emailEl.value.length > 0 ? (btnDisabled = false) : (btnDisabled = true);
    }
  };

  const handleForgetPassword = async () => {
    email = email.trim();
    await store.sendUserPasswordResetEmail(email);
    handleNextState();
    sendUserInfo(email);
  };

  const handleNextState = () => {
    fireBaseErr = localStorage.getItem("resetPasswordErr");
    fireBaseErr ? setMessage() : handleTrigger("check-pw");
  };

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  const setMessage = () => {
    let userNotFound = "auth/user-not-found";
    let isNotFoundErr = fireBaseErr.indexOf(userNotFound);

    if (isNotFoundErr > -1) {
      requestErrText = "User not found. Please try again.";
    }

    localStorage.removeItem("resetPasswordErr");
  };
</script>

<Card {width} {custom} {height}>
  <h2 class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </h2>

  <div class="card-content card-content--forgetpw" slot="card-content">
    <p class="card-body-info">
      Enter your email and we'll send you a link to reset your password.
    </p>
    <div class="form-wrapper form-wrapper--forgetpw">
      <form method="post">
        <fieldset class="mzp-c-field-set field-set">
          <div class="mzp-c-field field field--email">
            <div class="label-wrapper">
              <label class="mzp-c-field-label enter-pw" for="id_user_email"
                >Email</label
              >
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

          <!-- ERROR MESSAGE -->
          {#if requestErr}
            <p class="info-msg-err-reset">
              {requestErrText}
            </p>
          {/if}
        </fieldset>
      </form>

      <Button
        on:click={handleForgetPassword}
        disabled={btnDisabled}
        size="xl"
        custom="card-button create"
      >
        <div class="button-text--signin">{cta1}</div></Button
      >

      <p class="body-text-action">
        {bodyText}
      </p>
      <p class="body-text-action">
        Nevermind,<button
          on:click={() => {
            handleTrigger("welcome");
          }}><a href="/signup">go back</a></button
        >
      </p>
    </div>
  </div>
</Card>

<style>
  .title-highlight {
    width: calc(var(--titleWidth) + 15px);
    transition: width 0.2s ease-in;
  }
</style>
