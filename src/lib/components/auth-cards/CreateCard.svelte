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
  export let linkText;
  export let width;
  export let fontSize;
  export let height;
  export let custom;
  export let store;
  export let test;

  let titleEl;
  let textWidth;

  //create account states
  let email;
  let password;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let capital;
  let number;
  let length;
  let letter;
  let createErr = false;
  let emailErrText = null;
  let fireBaseErr = null;
  const minPasswordLength = 8;
  let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  let checkEmail = false;
  let formHeight = "auto";

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: formStyles = `--formHeight:${formHeight}`;
  $: fireBaseErr === null ? (createErr = false) : (createErr = true);

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (passwordEl) {
      // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;
      passwordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("valid")
        : letter.classList.remove("valid");

      // Validate uppercase letters
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
      passwordEl.value.length >= minPasswordLength
        ? length.classList.add("valid")
        : length.classList.remove("valid");

      if (name === "id_user_pw") {
        if (
          passwordEl.value.length >= minPasswordLength &&
          passwordEl.value.match(numbers) &&
          passwordEl.value.match(lowerCaseLetters) &&
          passwordEl.value.match(upperCaseLetters)
        ) {
          btnDisabled = false;
          checkEmail = true;
        } else {
          btnDisabled = true;
        }
      }
    }
  };

  const handleNextState = () => {
    fireBaseErr = localStorage.getItem("createErr");
    fireBaseErr === null ? handleTrigger("check-create") : setMessage();
  };

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

<Card {width} {fontSize} {height} {custom} minHeight="unset">
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="card-body-content card-body-content--form" slot="card-body">
    <div class="form-wrapper">
      <form method="post" style={formStyles}>
        <fieldset class="mzp-c-field-set">
          <div class="mzp-c-field">
            <div class="label-wrapper">
              <label class="mzp-c-field-label" for="id_user_pw">Email</label>
            </div>
            <input
              class="mzp-c-field-control"
              bind:value={email}
              on:change={handleChange}
              on:keyup={handleChange}
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

          <div class="mzp-c-field">
            <div class="label-wrapper">
              <label class="mzp-c-field-label" for="id_user_pw">Password</label>
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
            </div>

            <ul class="info-rules">
              <li bind:this={length} id="length">Use at least 8 characters</li>
              <li bind:this={letter} id="letter">
                Use at least 1 lowercase letter
              </li>
              <li bind:this={capital} id="capital">
                Use at least 1 uppercase letter
              </li>
              <li bind:this={number} id="number">Use at least 1 number</li>
            </ul>
          </div>
        </fieldset>
      </form>

      {#if !checkEmail}
        <Button disabled={btnDisabled} size="xl" custom="card-button create">
          <div class="button-text">{cta1}</div></Button
        >
      {/if}

      {#if checkEmail && !test}
        <Button
          on:click={async () => {
            await store.signupWithEmailAndPassword(email, password);
            handleNextState();
          }}
          disabled={btnDisabled}
          size="xl"
          custom="card-button create"
          btnID="continue"
        >
          <div class="button-text--signin">{cta1}</div></Button
        >
      {/if}

      {#if checkEmail && test}
        <Button
          on:click={() => {
            handleTrigger("check-create");
          }}
          disabled={btnDisabled}
          size="xl"
          custom="card-button create"
          btnID="continue"
        >
          <div class="button-text--signin">{cta1}</div></Button
        >
      {/if}
      <p class="body-text-privacy">
        By proceeding, you agree to our <a href="/">privacy notice</a>
      </p>
    </div>
  </div>

  <p slot="cta" class="body-text-action">
    {bodyText}
    <button
      on:click={() => {
        handleTrigger("welcome");
      }}>{linkText}</button
    >
  </p>
</Card>

<style>
  .title-highlight {
    width: calc(var(--titleWidth) + 15px);
    transition: width 0.2s ease-in;
  }

  form {
    height: var(--formHeight);
  }

  fieldset {
    margin-bottom: 0;
  }

  .invalid-email {
    margin-top: -19px;
    padding-bottom: 10px;
  }

  .field-pw {
    position: relative;
  }
</style>
