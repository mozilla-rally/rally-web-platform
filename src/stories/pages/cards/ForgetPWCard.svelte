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
  export let bodyText2;
  export let width;
  export let topPadding;
  export let fontSize;
  export let minHeight
  export let custom;

  let email;
  let emailEl;
  //   let errorMsg = false;
  let formHeight = "auto";
  let titleEl;
  let textWidth;
  let btnDisabled = true;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: formStyles = `--formHeight:${formHeight}`;

  const handleChange = () => {
    if (emailEl) {
      emailEl.value.length > 0 ? (btnDisabled = false) : (btnDisabled = true);
    }
  };

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<Card {width} {topPadding} {fontSize} {custom} {minHeight}>
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
            placeholder="enter your email address"
            required
          />
        </div>
      </fieldset>
    </form>
    <Button
      on:click={() => {
        handleTrigger("check-pw");
      }}
      disabled={btnDisabled}
      size="xl"
      custom="modal-button create"
    >
      <div class="button-text">{cta1}</div></Button
    >
    <p class="body-text-action">
      {bodyText}
    </p>
    <p class="body-text-action">
      Nevermind,<button
        on:click={() => {
          handleTrigger("signin");
        }}>go back</button
      >
    </p>
  </div>
</Card>

<style>
  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
    transition: width 0.2s ease-in;
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
