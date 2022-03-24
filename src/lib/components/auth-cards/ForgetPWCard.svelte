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
  export let fontSize;
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

<Card {width} {fontSize}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="card-body-content card-body-content--form" slot="card-body">
    <div class="form-wrapper">
      <p class="card-body-info">
        Enter your email and we'll send you a link to reset your password
      </p>
      <form method="post">
        <fieldset class="mzp-c-field-set">
          <div class="mzp-c-field">
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
              placeholder="enter your email address"
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
            handleTrigger("signin");
          }}><a href="/">go back</a></button
        >
      </p>
    </div>
  </div>
</Card>

<style>

  .card-body-content{
    padding-left: 10px;
    padding-right: 10px; 
  }
  .title-highlight {
    width: calc(var(--titleWidth) + 15px);
    transition: width 0.2s ease-in;
  }
  .info-msg-err-reset {
    text-align: left;
    font-size: 0.75rem;
    color: red;
    padding: 10px 0px;
    margin-top: -20px;
  }

  .body-text-action {
    text-align: center;
    font-size: 0.75rem;
    color: gray;
    padding-top: 10px;
  }

  .body-text-action button {
    font-size: 0.875rem;
  }

  @media (max-width: 488px) {
    .title-highlight {
      width: 250px;
      transition: width 0.2s ease-in;
      margin-top: 70px; 
    }
  }
</style>
