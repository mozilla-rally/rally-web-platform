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
  export let height;
  export let custom;
  export let store;
  export let test;

  //create account states
  let checkEmail = false;
  let emailEl;
  let formHeight = "auto";
  let inputClassName = "mzp-c-field-control";
  let inputEmailName;
  let inputPWName;
  let inputItemsVisible = false;
  let passwordEl;
  let passwordVisible = false;
  let titleEl;
  let textWidth;

  //password requirements
  let capital;
  let number;
  let numbers = /[0-9]/g;
  const minPasswordLength = 8;
  let length;
  let letter;
  let lowerCaseLetters = /[a-z]/g;
  let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  let upperCaseLetters = /[A-Z]/g;

  //error states
  let createErr = false;
  let emailErrText = null;
  let emptyFieldsErr;
  let fireBaseErr = null;
  let passwordErr = false;
  let passwordErrText = null;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
    inputEmailName = inputClassName;
    inputPWName = inputClassName;
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: formStyles = `--formHeight:${formHeight}`;
  $: fireBaseErr === null ? (createErr = false) : (createErr = true);
  $: emptyFieldsErr
    ? (inputClassName = "mzp-c-field-control mzp-c-field-control--error")
    : (inputClassName = "mzp-c-field-control");
  $: inputEmailName = inputClassName;
  $: inputPWName = inputClassName;
  $: if (emptyFieldsErr) {
    emailErrText = "Required";
    passwordErrText = "Required";
  }

  const checkFields = async () => {
    if (emailEl.value === "" && passwordEl.value === "") {
      emptyFieldsErr = true;
    } else if (emailEl.value === "") {
      createErr = true;
      emailErrText = "Required";
      emailEl.classList.add("mzp-c-field-control--error");
    } else if (checkEmail === false) {
      checkRules();
    } else {
      await store.signupWithEmailAndPassword(emailEl.value, passwordEl.value);
      handleNextState();
    }
  };

  const checkRules = () => {
    passwordErr = true;
    passwordEl.classList.add("mzp-c-field-control--error");
    passwordErrText = "Required";
    if (passwordEl) {
      passwordEl.value.length < minPasswordLength
        ? length.classList.add("rules-error")
        : null;

      passwordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("clear")
        : letter.classList.add("rules-error");

      passwordEl.value.match(upperCaseLetters)
        ? capital.classList.add("clear")
        : capital.classList.add("rules-error");

      passwordEl.value.match(numbers)
        ? number.classList.add("clear")
        : number.classList.add("rules-error");
    }
    return;
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    emailEl.classList.remove("mzp-c-field-control--error");
    emptyFieldsErr = false;
    createErr = false;
    passwordErr = false;

    letter.classList.remove("rules-error");
    capital.classList.remove("rules-error");
    number.classList.remove("rules-error");
    length.classList.remove("rules-error");

    if (passwordEl) {
      passwordEl.classList.remove("mzp-c-field-control--error");
      if (name === "id_user_pw") {
        inputItemsVisible = true;
        // Validate lowercase letters
        passwordEl.value.match(lowerCaseLetters)
          ? letter.classList.add("valid")
          : letter.classList.remove("valid");

        // Validate uppercase letters
        passwordEl.value.match(upperCaseLetters)
          ? capital.classList.add("valid")
          : capital.classList.remove("valid");

        // Validate numbers
        passwordEl.value.match(numbers)
          ? number.classList.add("valid")
          : number.classList.remove("valid");

        // Validate length
        passwordEl.value.length >= minPasswordLength
          ? length.classList.add("valid")
          : length.classList.remove("valid");

        if (
          passwordEl.value.length >= minPasswordLength &&
          passwordEl.value.match(numbers) &&
          passwordEl.value.match(lowerCaseLetters) &&
          passwordEl.value.match(upperCaseLetters)
        ) {
          checkEmail = true;
        } else checkEmail = false;
      }
    }
  };

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

  const handleNextState = () => {
    if (!emptyFieldsErr) {
      fireBaseErr = localStorage.getItem("createErr");
      fireBaseErr === null ? handleTrigger("check-create") : setMessage();
    }
  };

  const setMessage = () => {
    let emailAlreadyExist = "auth/email-already-in-use";
    let invalidEmail = "auth/invalid-email";
    let isExistingEmail;
    let isInvalidEmail;

    isExistingEmail = fireBaseErr.indexOf(emailAlreadyExist);
    if (isExistingEmail > -1) {
      emailEl.classList.add("mzp-c-field-control--error");
      emailErrText = "Account already exists. Please Sign in.";
    }

    isInvalidEmail = fireBaseErr.indexOf(invalidEmail);
    if (isInvalidEmail > -1) {
      emailEl.classList.add("mzp-c-field-control--error");
      emailErrText = "Invalid format";
    }

    localStorage.removeItem("createErr");
  };
</script>

<Card {width} {height} {custom}>
  <h2 class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </h2>

  <div class="card-content card-content--form" slot="card-content">
    <div class="form-wrapper">
      <form method="post" style={formStyles}>
        <fieldset class="mzp-c-field-set field-set">
          <div class="mzp-c-field field field--email">
            <div class="label-wrapper">
              <label class="mzp-c-field-label" for="id_user_pw">Email</label>
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
              placeholder="Enter your email address"
            />
            {#if createErr || emptyFieldsErr}
              <p class="error-msg error-msg--email">
                {emailErrText}
              </p>
            {/if}
          </div>

          <!-- PASSWORD -->
          <div class="mzp-c-field field field--pw-create">
            <div class="label-wrapper">
              <label class="mzp-c-field-label" for="id_user_pw">Password</label>
            </div>
            <div class="input-wrapper">
              <input
                class={inputPWName}
                bind:this={passwordEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_pw"
                name="id_user_pw"
                type="password"
                {pattern}
                width="100%"
              />

              {#if passwordVisible}
                <img
                  src="img/icon-password-hide.svg"
                  alt="Eye with slash across it"
                  class={`toggle-password ${
                    inputItemsVisible ? "create-show" : "create-hide"
                  }`}
                  id="hide-eye"
                  width="24px"
                  height="24px"
                  on:click|preventDefault={handleToggle}
                />
              {:else}
                <img
                  src="img/icon-password-show.svg"
                  alt="Open eye"
                  class={`toggle-password ${
                    inputItemsVisible ? "create-show" : "create-hide"
                  }`}
                  id="show-eye"
                  width="24px"
                  height="24px"
                  on:click|preventDefault={handleToggle}
                />
              {/if}
            </div>

            {#if emptyFieldsErr || passwordErr}
              <p class="error-msg error-msg--password">
                {passwordErrText}
              </p>
            {/if}

            <ul
              class={`password-requirements ${
                inputItemsVisible ? "create-show" : "create-hide"
              }`}
            >
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

      <Button
        on:click={checkFields}
        size="xl"
        custom="card-button card-button--create"
        btnID="continue"
      >
        <div class="card-button__text">{cta1}</div></Button
      >

      <p class="body-text-privacy">
        By joining, you agree to our <a
          href="__BASE_SITE__/how-rally-works/data-and-privacy/"
          >privacy notice</a
        >
      </p>
    </div>
  </div>

  <!-- SIGN IN -->
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

  .invalid-email {
    margin-top: -19px;
    padding-bottom: 10px;
  }
</style>
