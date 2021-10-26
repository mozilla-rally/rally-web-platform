<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import Button from "../../../lib/components/Button.svelte";
  import "../../components/RallyDialog.css"


  export let title;
  export let cta1;
  export let bodyText;
  export let linkText;

  let titleEl;
  let textWidth;
  let email;
  let password;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let errorMsg = false;
  const minPasswordLength = 8;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (emailEl && passwordEl) {
      passwordEl.value.length >= minPasswordLength && emailEl.value.length > 0
        ? (btnDisabled = false)
        : (btnDisabled = true);

      if (name === "id_user_pw") {
        passwordEl.value.length >= minPasswordLength
          ? (errorMsg = false)
          : (errorMsg = true);
      }
    }
  };
</script>

<Card>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="modal-body-content sigin-modal" slot="card-body">
    <form method="post">
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
            required
          />
        </div>
        <div class="mzp-c-field ">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Enter your Password</label
            >
            <label class="mzp-c-field-label forgot-pw" for="id_user_pw"
              ><a href="/">Forgot Password?</a></label
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
          <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
            Please choose a password that is at least 8 characters
          </p> -->
        </div>
      </fieldset>
    </form>
    <Button disabled={btnDisabled} size="xl" custom="modal-button signin">
      <div class="button-text">
        {cta1}
      </div></Button
    >

    <p class="body-text-action">
      {bodyText} <a href="/">{linkText}</a>
    </p>
  </div>
</Card>

<style>
  h2 {
    font-size: var(--fontSize);
  }
  header {
    display: grid;
    grid-template-columns: auto max-content;
  }
  .card-container {
    width: calc(var(--width, var(--content-width)) - 40px);
    height: calc(var(--height, auto));
    min-width: calc(var(--width, var(--content-width)) - 40px);
    min-height: var(--modal-min-height);
    background-color: var(--color-white);
    padding: 20px;
    box-shadow: var(--box-shadow-lg);
    display: grid;
    grid-template-rows: max-content auto max-content;
    font-size: 14px;
    min-height: var(--min-height);
  }
</style>
