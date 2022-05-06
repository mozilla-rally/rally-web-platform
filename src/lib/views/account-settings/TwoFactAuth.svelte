<script>
  import TwoFactor from "$lib/components/icons/TwoFactor.svelte";
  import TwoFactorConfirmed from "$lib/components/icons/TwoFactorConfirmed.svelte";

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Button from "../../../lib/components/Button.svelte";
  import { overwrite, getCodeList } from "country-list";

	import {
		getAuth,
		createUserWithEmailAndPassword,
		signInWithEmailAndPassword,
		RecaptchaVerifier
	} from 'firebase/auth';

  const dispatch = createEventDispatcher();
  export let store;

  let password;
  let passwordEl;
  let passwordVisible = false;
  let is2FA = false;
  let isBlank = true;

  const auth = getAuth();

  onMount(() => {
    // @ts-ignore
    window.recaptchaVerifier = new RecaptchaVerifier('2fa-captcha', {
        size: 'invisible',
        callback: function (response) {
        },
      }, auth);
  });

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleAuthToggle = () => {
    is2FA = !is2FA;
  };

  const handleForgetPassword = async () => {
    console.log(await store.enrollMfa("+16505550101"))
  }

  const handleChange = () => {
    console.log("test");
  };

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  const countries = Object.entries(getCodeList());
  overwrite([
    {
      code: "bo",
      name: "Bolivia",
    },
    {
      code: "bq",
      name: "Bonaire",
    },
    {
      code: "cd",
      name: "Congo, DR",
    },
    {
      code: "fm",
      name: "Micronesia",
    },
    {
      code: "hm",
      name: "Mcdonald Island",
    }
  ]);
</script>

<div class="settings-wrapper settings-wrapper--two-factor">
  <div id="2fa-captcha"></div>

  <!-- Enable -->
  <div class="two-factor-content">
    <h1 class="two-factor__headline">Two-Factor Authentication</h1>

    <div class="two-factor__icon">
      <TwoFactor />
    </div>

    <h2 class="two-factor__subheadline">Protect your account</h2>

    <p class="two-factor__text">
      Two factor authentication adds an extra layer of security to your Rally
      account. Once enabled, you will have to enter a password and a code sent
      to your mobile phone when logging in.
    </p>

    <div class="two-factor__actions">
      <Button size="lg" secondary>Cancel</Button>
      <Button size="lg" product>Turn On</Button>
    </div>
  </div>

  <!-- Verify Password -->
  <div class="two-factor-content">
    <h1 class="two-factor__headline">Two-Factor Authentication</h1>

    <h2 class="two-factor__subheadline">First, let’s verify that it’s you</h2>

    <p class="two-factor__text">
      For security, please enter your password for account@example.com
    </p>

    <div class="two-factor__form d-flex">
      <div class="mzp-c-field field-pw w-100">
        <div class="label-wrapper">
          <label class="mzp-c-field-label enter-pw" for="id_user_pw"
            >Password</label
          >
        </div>

        <div class="input-wrapper input-first ">
          <input
            class="mzp-l-stretch mzp-c-field-control w-100"
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
    </div>

    <div class="two-factor__actions">
      <Button size="lg" secondary>Cancel</Button>
      <Button size="lg" product>Next</Button>
    </div>
  </div>

  <!-- Enter Phone -->
  <div class="two-factor-content">
    <h1 class="two-factor__headline">Two-Factor Authentication</h1>

    <h2 class="two-factor__steps">STEP 1 OF 2</h2>
    <h2 class="two-factor__subheadline">Let’s set up your phone</h2>
    <p class="two-factor__text ">Where should we send the code?</p>

    <div class="two-factor__form d-flex">
      <!-- todo - country/state dropdown  -->
      <div class="input-wrapper--select w-50">
        <select name="language" id="language">
          {#each countries as country, i}
            <option value={country[0]}>{country[1]}</option>
          {/each}
        </select>
      </div>
      <div class="input-wrapper number">
        <input
          class="mzp-c-field-control mb-0"
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
    </div>

    <p class="two-factor__text--small">
      Mozilla Rally will use this number only account security. Messages and
      data rates may apply
    </p>

    <div class="two-factor__actions">
      <Button size="lg" secondary>Cancel</Button>
      <Button size="lg" product on:click={handleForgetPassword}>Send Code</Button>
    </div>
  </div>

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
      <Button size="lg" product>Verify</Button>
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

  {#if is2FA}
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
  {/if}
</div>

<style>
  .number {
    padding-bottom: 15px;
  }

  .input-wrapper--select {
    padding-right: 19px;
  }

  .input-wrapper--code input { min-width: auto; height: 48px }
  .input-wrapper--code {
    padding-right: 8px;
    width: 40px;
    
  }

  .input-first {
    margin-bottom: 15px;
  }
</style>
