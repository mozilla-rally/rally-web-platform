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
  export let cta2;
  export let bodyText;
  export let linkText;
  export let welcomeCard;
  export let width;
  export let fontSize;
  export let store;
  export let custom;

  let titleEl;
  let textWidth;
  let startState;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
    localStorage.removeItem("signInErr");
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: startState = welcomeCard ? "join" : "welcome";

  $: if (welcomeCard) {
    setTimeout(() => {
      if (titleEl) {
        textWidth = titleEl.clientWidth;
      }
    }, 50);
  }
  $: if (!welcomeCard) {
    setTimeout(() => {
      if (titleEl) {
        textWidth = titleEl.clientWidth;
      }
    }, 50);
  }
  const handleGoogleLogin = () => {
    handleShowSpinner();
  };

  const handleShowSpinner = () => {
    dispatch("item", {
      item: true,
    });
    loginWithGoogle();
  };

  const loginWithGoogle = async () => {
    await store.loginWithGoogle();
  };

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<Card {width} {fontSize} {custom}>
  <div class="title-wrapper--launch" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">
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
        borderColor="#CDCDD4"
        custom="card-button"
        on:click={handleGoogleLogin}
      >
        <div class="btn-content--sm">
          <img
            width="20px"
            height="20px"
            src="img/google-logo.svg"
            alt="Google logo in color"
          />
          <div class="button-text">{cta1}</div>
        </div>
      </Button>

      <Button
        size="lg"
        customControl={true}
        textColor="#000000"
        background="transparent"
        borderColor="#CDCDD4"
        custom="card-button"
        btnID={welcomeCard ? "signin" : "create"}
        on:click={() => {
          welcomeCard ? handleTrigger("signin") : handleTrigger("create");
        }}
      >
        <div class="btn-content--sm">
          <img
            width="24px"
            height="24px"
            src="img/email.svg"
            alt="Email icon"
          />
          <div class="button-text">
            {cta2}
          </div>
        </div>
      </Button>
      <p class="body-text-privacy">
        By proceeding, you agree to our <a href="/">privacy notice</a>
      </p>
    </div>
  </div>

  <p slot="cta" class="body-text-action">
    {bodyText}
    <button
      on:click={() => {
        handleTrigger(startState);
      }}>{linkText}</button
    >
  </p>
</Card>

<style>
  .title-highlight {
    width: calc(var(--titleWidth) + 15px);
    transition: width 0.2s ease-in;
  }
</style>
