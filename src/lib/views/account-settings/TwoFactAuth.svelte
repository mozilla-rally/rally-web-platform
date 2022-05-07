<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  import TwoFactorConfirmed from "$lib/components/icons/TwoFactorConfirmed.svelte";
  import { getAuth, RecaptchaVerifier } from "firebase/auth";
  import { onMount } from "svelte";
  import Button from "../../../lib/components/Button.svelte";
  import MultiFactorIntroduction from "./multi-factor/MultiFactorIntroduction.svelte";
  import PhoneInputView from "./multi-factor/PhoneInputView.svelte";
  import VerifyIdentityView from "./multi-factor/VerifyIdentityView.svelte";
  import VerifyPhoneView from "./multi-factor/VerifyPhoneView.svelte";

  export let store;

  let phoneNumber;

  let enrollmentCodeEl;
  let phoneVerificationId;

  let is2FA = false;

  const auth = getAuth();
  const user = auth.currentUser;

  onMount(() => {
    // @ts-ignore
    window.recaptchaVerifier = new RecaptchaVerifier(
      "2fa-captcha",
      {
        size: "invisible",
        callback: function (response) {},
      },
      auth
    );
  });

  const handleVerifyEnrollMfa = async () => {
    console.log(
      await store.verifyEnrollMfa(phoneVerificationId, enrollmentCodeEl.value)
    );
  };

  const handleChange = () => {};

  const onCancel = () => (location.href = "/account-settings");

  async function onSendCode(phone: string) {
    phoneNumber = phone;
    phoneVerificationId = await store.enrollMfa(phoneNumber);
    console.log("verification id - ", phoneVerificationId);
  }
</script>

<div class="settings-wrapper settings-wrapper--two-factor">
  <div id="2fa-captcha" />

  <MultiFactorIntroduction onNext={() => alert("hi")} {onCancel} />

  <VerifyIdentityView email={user.email} {onCancel} {store} />

  <PhoneInputView {onCancel} onNext={onSendCode} />

  <VerifyPhoneView {onCancel} {phoneNumber} />

  <!-- Confirm Code -->
  <div class="two-factor-content">
    <h1 class="two-factor__headline">Two-Factor Authentication</h1>

    <h2 class="two-factor__steps">STEP 2 OF 2</h2>
    <h2 class="two-factor__subheadline">Confirm code</h2>
    <p class="two-factor__text ">
      We just sent your verification code to (XXX)XXX-XXXX. Please enter the
      code to compelete two factor authentication.
    </p>

    <div class="two-factor__form d-flex justify-content-center mt-3 mb-3">
      <div class="input-wrapper--code">
        <input
          bind:this={enrollmentCodeEl}
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          required
          disabled={is2FA}
        />
      </div>
      <div class="input-wrapper--code">
        <input
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          required
          disabled={is2FA}
        />
      </div>
      <div class="input-wrapper--code">
        <input
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          required
          disabled={is2FA}
        />
      </div>
      <div class="input-wrapper--code">
        <input
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          required
          disabled={is2FA}
        />
      </div>
      <div class="input-wrapper--code">
        <input
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          required
          disabled={is2FA}
        />
      </div>
      <div class="input-wrapper--code">
        <input
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          required
          disabled={is2FA}
        />
      </div>
    </div>

    <p class="two-factor__text--small">
      Mozilla Rally will use this number only account security. Messages and
      data rates may apply
    </p>

    <div class="two-factor__actions">
      <p class="align-self-start">Need another code? <a href="#">Resend</a></p>
      <Button size="lg" secondary>Cancel</Button>
      <Button size="lg" product on:click={handleVerifyEnrollMfa}>Verify</Button>
    </div>
  </div>

  <!-- Confirmed -->
  <div class="two-factor-content">
    <h1 class="two-factor__headline">Two-Factor Authentication</h1>

    <div class="two-factor__icon">
      <TwoFactorConfirmed />
    </div>

    <h2 class="two-factor__subheadline align-self-center">2FA is enabled!</h2>

    <p class="two-factor__text">
      Whenever you sign in to another device, vou'll be asked to enter a
      verification code sent to (xxx) xxx-xxxx
    </p>

    <div class="two-factor__actions align-self-center">
      <Button size="lg" product custom="align-self-center">Finish</Button>
    </div>
  </div>

  <!-- {#if is2FA}
    <form method="post">
      <fieldset class="mzp-c-field-set field-set-settings">
        <div class="mzp-c-field field-pw">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_number"
              >Mobile Number</label
            >
          </div>

          <div class="input-wrapper number">
            <input
              class="mzp-c-field-control"
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_number"
              name="id_user_number"
              type="tel"
              width="100%"
              required
              disabled={is2FA}
            />
          </div>

          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Password</label
            >
          </div>

          <div class="input-wrapper input-first">
            <input
              class="mzp-c-field-control"
              bind:value={password}
              bind:this={passwordEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw"
              type="password"
              width="100%"
              required
              disabled={is2FA}
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
        </div>
      </fieldset>
    </form>
    <div class="btn-group btn-group--two-factor">
      <Button
        disabled={is2FA && isBlank}
        size="xl"
        product
        customClass="card-button create"
      >
        <div class="button-text">Enable 2FA</div></Button
      >

      <Button
        disabled={is2FA && isBlank}
        size="xl"
        customClass="card-button create"
        customControl={true}
        textColor="#0060df"
        background="transparent"
        borderColor="#0060df"
        on:click={() => {
          handleSelect("read-only");
        }}
      >
        <div class="button-text">Cancel</div></Button
      >
    </div>
  {/if} -->
</div>

<style>
  .number {
    padding-bottom: 15px;
  }

  .input-wrapper--select {
    padding-right: 19px;
  }

  .input-wrapper--code input {
    min-width: auto;
    height: 48px;
  }
  .input-wrapper--code {
    padding-right: 8px;
    width: 40px;
  }

  .input-first {
    margin-bottom: 15px;
  }
</style>
