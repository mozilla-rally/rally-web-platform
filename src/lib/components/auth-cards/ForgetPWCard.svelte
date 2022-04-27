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
  export let test;

  let custom = "";
  let emailEl;
  // let emptyFieldsErr;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let fireBaseErr = null;
  let inputEmailName = "mzp-c-field-control";
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

  const checkEmail = (val) => {
    if (val.match(emailPattern)) {
      if (test === false) {
        handleForgetPassword();
      }
    } else {
      requestErr = true;
      requestErrText = "Invalid format";
      emailEl.classList.add("mzp-c-field-control--error");
    }
  };

  const checkFields = async () => {
    if (emailEl.value === "") {
      requestErr = true;
      requestErrText = "Required";
      emailEl.classList.add("mzp-c-field-control--error");
    } else if (emailEl) {
      checkEmail(emailEl.value);
    }
  };

  const handleChange = () => {
    emailEl.classList.remove("mzp-c-field-control--error");
    requestErr = false;
  };

  const handleForgetPassword = async () => {
    emailEl.value = emailEl.value.trim();
    await store.sendUserPasswordResetEmail(emailEl.value);
    handleNextState();
    sendUserInfo(emailEl.value);
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
      requestErrText = "Account does not exist.";
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
              <label class="mzp-c-field-label" for="id_user_email">Email</label>
            </div>
            <input
              class={inputEmailName}
              bind:this={emailEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_email"
              name="id_user_email"
              type="email"
              width="100%"
              required
            />
            <!-- ERROR MESSAGE -->
            {#if requestErr}
              <p class="error-msg error-msg--resetpw">
                {requestErrText}
              </p>
            {/if}
          </div>
        </fieldset>
      </form>

      <Button
        on:click={checkFields}
        size="xl"
        custom="card-button card-button--signin"
      >
        <div class="card-button__text">{cta1}</div></Button
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
