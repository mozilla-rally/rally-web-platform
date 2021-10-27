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
  export let cta2;
  export let bodyText;
  export let linkText;
  export let welcomeCard;
  export let width;
  export let topPadding;
  export let fontSize;

  let titleEl;
  let textWidth;
  let startState;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: startState = welcomeCard ? "join" : "welcome";

  $: if (welcomeCard) {
    setTimeout(() => {
      if (titleEl) {
        textWidth = titleEl.clientWidth;
      }
    }, 100);
    console.log("THE WELCOME", textWidth);
  }
  $: if (!welcomeCard) {
    setTimeout(() => {
      if (titleEl) {
        textWidth = titleEl.clientWidth;
      }
    }, 100);
    console.log("THE JOIN", textWidth);
  }

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<Card {width} {topPadding} {fontSize}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div {title} bind:this={titleEl} class="title-text">
      {title}
    </div>
  </div>

  <div class="card-body-content" slot="card-body">
    <div class="button-wrapper">
      <Button
        size="lg"
        customControl={true}
        textColor="#000000"
        background="transparent !important"
        borderColor="#000000"
        custom="card-button"
      >
        <img
          width="20px"
          height="20px"
          src="img/google-logo.svg"
          alt="Google logo in color"
        />
        <div class="button-text">{cta1}</div></Button
      >
    </div>

    <div class="button-wrapper">
      <Button
        size="lg"
        customControl={true}
        textColor="#000000"
        background="transparent"
        borderColor="#000000"
        custom="card-button"
      >
        <img width="24px" height="24px" src="img/email.svg" alt="Email icon" />
        <div
          on:click={() => {
            welcomeCard ? handleTrigger("signin") : handleTrigger("create");
          }}
          class="button-text"
        >
          {cta2}
        </div></Button
      >
    </div>

    <p class="body-text-privacy">
      By proceeding, you agree to our <a href="/">Privacy Notice</a>
    </p>
    <p class="body-text-action">
      {bodyText}
      <button on:click={()=>{handleTrigger(startState)}}>{linkText}</button>
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
