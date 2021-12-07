<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import Button from "../../../lib/components/Button.svelte";
  import "../../../lib/components/auth-cards/Auth.css";

  //create account states
  let email;
  let btnDisabled = true;
  let createErr = false;
  let emailErrText = null;
  let fireBaseErr = null;
  let formHeight = "auto";

  $: formStyles = `--formHeight:${formHeight}`;
  $: fireBaseErr === null ? (createErr = false) : (createErr = true);

  //   const handleNextState = () => {
  //     fireBaseErr = localStorage.getItem("createErr");
  //     fireBaseErr === null ? handleTrigger("check-create") : setMessage();
  //   };

  const setMessage = () => {
    let emailAlreadyExist = "auth/email-already-in-use";
    let invalidEmail = "auth/invalid-email";
    let isExistingEmail;
    let isInvalidEmail;

    isExistingEmail = fireBaseErr.indexOf(emailAlreadyExist);
    if (isExistingEmail > -1) {
      emailErrText = "Account already exists. Please sign in.";
    }

    isInvalidEmail = fireBaseErr.indexOf(invalidEmail);
    if (isInvalidEmail > -1) {
      emailErrText = "Email is invalid. Please enter a valid email.";
    }

    localStorage.removeItem("createErr");
  };
</script>

<div class="email-wrapper">
  <div class="card-body-content">
    <form method="post" style={formStyles}>
      <fieldset class="mzp-c-field-set">
        <label class="mzp-c-field-label enter-pw" for="id_user_pw"
          >Update your email address on your account</label
        >

        <div class="mzp-c-field input-wrapper">
          <input
            class="mzp-c-field-control "
            bind:value={email}
            id="id_user_email"
            name="id_user_email"
            type="email"
            width="100%"
            placeholder="Enter your email address"
            required
          />
        </div>

        {#if createErr}
          <p class="error-msg-active invalid-email">
            {emailErrText}
          </p>
        {/if}
      </fieldset>
    </form>

    <Button disabled={btnDisabled} size="xl" custom="card-button create">
      <div class="button-text">Send verification</div></Button
    >
  </div>
</div>

<style>
  .email-wrapper {
    margin-top: 15px; 
  }
  form {
    height: var(--formHeight);
  }

  .invalid-email {
    margin-top: -19px;
    padding-bottom: 10px;
  }
</style>
