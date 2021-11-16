<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import "./Auth.css";

  const dispatch = createEventDispatcher();

  export let title;
  export let body;
  export let bodyText;
  export let linkText;
  export let width;
  export let topPadding;
  export let fontSize;
  export let minHeight;
  export let custom;
  export let checkPW;

  let titleEl;
  let textWidth;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;

  const handleTrigger = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<Card {width} {topPadding} {fontSize} {minHeight} {custom}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles} class="title-highlight" />
    <div bind:this={titleEl} class="title-text">{title}</div>
  </div>

  <div class="modal-body-content" slot="card-body">
    <p class="body-text-info">{body}</p>
    {#if !checkPW}
      <p class="body-text-action">
        Ready to sign in?<button
          on:click={() => {
            handleTrigger("welcome");
          }}>Sign in</button
        >
      </p>
    {/if}
    <!-- <p class="body-text-action">
      {bodyText} <a href="/">{linkText}</a>
    </p> -->

    {#if checkPW}
      <p class="body-text-action">
        <button
          on:click={() => {
            handleTrigger("reset");
          }}>Next State</button
        >
      </p>
    {/if}
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

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }
</style>
