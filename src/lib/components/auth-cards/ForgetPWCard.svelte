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
  export let custom;
  export let bodyText;
  export let width;
  export let topPadding;
  export let fontSize;
  export let minHeight;
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

  onMount(() => {
    if (titleEl) {
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

    setTimeout(() => {
      localStorage.removeItem("resetPasswordErr");
    }, 10000);
  };
</script>

<Card {width} {topPadding} {fontSize} {minHeight} {custom}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="card-body-content" slot="card-body">
    <form method="post">
      <fieldset class="mzp-c-field-set">
        <div class="mzp-c-field">
          <div class="input-wrapper">
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
      <div class="button-text">{cta1}</div></Button
    >
    <p class="body-text-action">
      {bodyText}
    </p>
    <p class="body-text-action">
      Nevermind,<button
        on:click={() => {
          handleTrigger("signin");
        }}><a href="/">go back</a></button
      >
    </p>
  </div>
</Card>

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
  .info-msg-err-reset {
    text-align: left;
    font-size: 12px;
    color: red;
    padding: 10px 0px;
    margin-top: -20px;
  }

  .body-text-action {
    text-align: left;
    font-size: 12px;
    color: gray;
    padding-top: 10px;
  }

  .body-text-action button {
    font-size: 14px;
  }
</style>
