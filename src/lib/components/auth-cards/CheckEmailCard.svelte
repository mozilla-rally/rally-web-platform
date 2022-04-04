<script type="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Card from "../../../lib/components/Card.svelte";

  const dispatch = createEventDispatcher();

  export let title;
  export let width;
  export let fontSize;
  export let minHeight;
  export let height;
  export let custom;
  export let checkPW;
  export let userEmail;
  export let ctaText;
  export let linkText;

  let body;
  let titleEl;
  let textWidth;
  let checkEmailText = `To finish creating your account with Rally, please check your email inbox and verify your email address`;
  let resetPWText = `An email has been sent to ${userEmail} to reset your password.`;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: checkPW ? (body = resetPWText) : (body = checkEmailText);
</script>

<Card {width} {fontSize} {minHeight} {custom} {height}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="card-body-content card-body-check" slot="card-body">
    <p class="body-text-info">{body}</p>
  </div>
  
  <div slot="cta" class="body-text-action">
    Ready to sign in? <button
      on:click={() => {
        handleTrigger("welcome");
      }}>Sign in</button
    >

    <p class="body-text-action">
      {ctaText} <a href="/">{linkText}</a>
    </p>
  </div>
</Card>

<style>
  .title-highlight {
    width: calc(var(--titleWidth) + 15px);
  }

  .body-text-info {
    padding: 0px 30px;
    text-align: center;
  }
</style>
