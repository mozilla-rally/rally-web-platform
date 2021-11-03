<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import Button from "../../../lib/components/Button.svelte";
  import "../../components/RallyDialog.css";

  const dispatch = createEventDispatcher();

  export let title;
  export let cta1;
  export let bodyText;
  export let linkText;
  export let width;
  export let topPadding;
  export let fontSize;
  export let height;
  export let cardHeight;
  export let custom;

  let titleEl;
  let textWidth;

  //create account states
  let email;
  let password;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let number;
  let length;
  let letter;
  // let errorMsg = false;
  const minPasswordLength = 8;
  let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  let passwordInputVisible = "none";
  let checkEmail = false;

  let formHeight = "auto";

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: inputStyles = `--inputVisible:${passwordInputVisible}`;
  $: formStyles = `--formHeight:${formHeight}`;

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
    if (email) {
      email.length > 0 ? (btnDisabled = false) : (btnDisabled = true);
    }
    if (passwordEl) {
      // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;
      passwordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("valid")
        : letter.classList.remove("valid");

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
        // password.length <= minPasswordLength
        //   ? (errorMsg = false)
        //   : (errorMsg = true);
        if (
          passwordEl.value.length >= minPasswordLength &&
          passwordEl.value.match(numbers) &&
          passwordEl.value.match(lowerCaseLetters)
        ) {
          btnDisabled = false;
          checkEmail = true;
        } else {
          btnDisabled = true;
        }
      }
    }
  };

  const showPasswordInput = () => {
    btnDisabled = true;
    passwordInputVisible = "block";
    cardHeight = "626px";
    formHeight = "270px";
  };
</script>

<Card {width} {topPadding} {fontSize} {height} {custom}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="modal-body-content sigin-modal" slot="card-body">
    <form method="post" style={formStyles}>
      <fieldset class="mzp-c-field-set">
        <div class="mzp-c-field ">
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
            placeholder="Enter your email address"
            required
          />
        </div>

        <div style={inputStyles} class="mzp-c-field field-pw">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Choose a Password</label
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

          <p style={inputStyles} class="info-msg-active">
            Your password should be unique, and must contain:
          </p>
          <ul class="info-rules">
            <li bind:this={length} id="length">At least 8 characters</li>
            <li bind:this={letter} id="letter">At least 1 lowercase letter</li>
            <li bind:this={number} id="number">At least 1 number</li>
          </ul>

          <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
              Please matching the password requirements 
            </p> -->
        </div>
      </fieldset>
    </form>
    {#if !checkEmail}
      <Button
        disabled={btnDisabled}
        size="xl"
        custom="modal-button create"
        on:click={showPasswordInput}
      >
        <div class="button-text">{cta1}</div></Button
      >
    {/if}

    {#if checkEmail}
      <Button
        disabled={btnDisabled}
        size="xl"
        custom="modal-button create"
        on:click={() => {
          handleTrigger("check-create");
        }}
      >
        <div class="button-text">{cta1}</div></Button
      >
    {/if}
    <p class="body-text-privacy">
      By proceeding, you agree to our <a href="/">privacy notice</a>
    </p>

    <p class="body-text-action">
      {bodyText}
      <button
        on:click={() => {
          handleTrigger("welcome");
        }}>{linkText}</button
      >
    </p>
  </div>
</Card>

<style>
  .modal-body-content.sigin-modal {
    margin-top: 8px;
    width: 100%;
  }

  .button-wrapper {
    width: 244px;
    margin: auto;
  }

  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }

  .button-text {
    margin-left: 10px;
    text-align: center;
  }

  form {
    height: var(--formHeight);
  }

  .error-msg-active,
  .info-msg-active {
    text-align: left;
    font-size: 12px;
    color: gray;
    padding: 10px;
    display: var(--inputVisible);
  }

  .info-msg-active {
    padding: 0;
    margin-top: 10px;
  }

  .field-pw {
    display: var(--inputVisible);
  }

  .body-text-action button,
  .forgot-pw button {
    border-color: transparent;
    background: transparent;
    cursor: pointer;
  }

  .body-text-action button {
    font-weight: 700;
    text-decoration: underline;
  }

  .title-wrapper {
    padding-bottom: 10px;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }
</style>
