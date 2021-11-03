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
  export let width;
  export let topPadding;
  export let fontSize;
  export let custom;

  let titleEl;
  let textWidth;
  let btnDisabled = true;
  let password;
  let passwordEl;
  //   let errorMsg = false;
  let number;
  let length;
  let letter;
  let passwordVisible = false;
  const minPasswordLength = 8;
  let passwordInputVisible = "none";

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: inputStyles = `--inputVisible:${passwordInputVisible}`;

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
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
      passwordEl.value.length >= 8
        ? length.classList.add("valid")
        : length.classList.remove("valid");

      if (name === "id_user_pw") {
        // password.length <= minPasswordLength
        //   ? (errorMsg = false)
        //   : (errorMsg = true);
        if (
          password.length >= minPasswordLength &&
          passwordEl.value.match(numbers) &&
          passwordEl.value.match(lowerCaseLetters)
        ) {
          btnDisabled = false;
        } else {
          btnDisabled = true;
        }
      }
    }
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };
</script>

<Card {width} {topPadding} {fontSize} {custom}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="card-body-content signin-card" slot="card-body">
    <form method="post">
      <fieldset class="mzp-c-field-set">
        <div class="mzp-c-field field-pw">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Choose a new password</label
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
              min={minPasswordLength}
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
            <li bind:this={length} id="length" class="invalid">
              At least 8 characters
            </li>
            <li bind:this={letter} id="letter" class="invalid">
              At least 1 lowercase letter
            </li>
            <li bind:this={number} id="number" class="invalid">
              At least 1 number
            </li>
          </ul>

          <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
                  Please choose a password that is at least 8 characters
                </p> -->
        </div>
      </fieldset>
    </form>
    <Button
      on:click={() => {
        handleTrigger("welcome");
      }}
      disabled={btnDisabled}
      size="xl"
      custom="modal-button create"
    >
      <div class="button-text">{cta1}</div></Button
    >
  </div>
</Card>

<style>
  .modal-card-content.signin-card {
    margin-top: 8px;
    width: 100%;
  }

  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }

  form {
    height: auto;
  }

  .error-msg-active,
  .info-msg-active {
    text-align: left;
    font-size: 12px;
    color: gray;
    padding: 10px;
    display: block;
  }

  .error-msg-active,
  .info-msg-active {
    display: var(--inputVisible);
  }
</style>
