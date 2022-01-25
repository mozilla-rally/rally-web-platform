<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  export let width;
  export let height;
  export let minHeight;
  export let fontSize = "38px";
  export let custom = "";

  function toVariable(key, value) {
    return value ? `${key}: ${value};` : undefined;
  }
  function addStyleVariables({ width, height, fontSize, minHeight }) {
    const values = [
      toVariable("--width", width),
      toVariable("--height", height),
      toVariable("--fontSize", fontSize),
      toVariable("--min-height", minHeight),
    ].filter((d) => d !== undefined);
    if (values.length === 0) return undefined;
    return values.join("; ");
  }

  $: styles = addStyleVariables({
    width,
    height,
    fontSize,
    minHeight,
  });
  $: classSet = ["card-body", custom].filter((t) => t).join(" ");

  const key = `card-${
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  }`;
</script>

<div id={key}>
  <div class="card-container radius-sm mzp-t-mozilla" style={styles}>
    <header class="container-header">
      <h2 class="mzp-t-mozilla">
        <slot name="card-title">Title.</slot>
      </h2>
    </header>

    <div class={classSet}>
      <slot name="card-body">
        <p>I am a Card</p>
      </slot>
    </div>
  </div>
</div>

<style>
  .card-container {
    width: calc(var(--width, var(--content-width)) - 40px);
    height: var(--height);
    min-width: calc(var(--width, var(--content-width)) - 40px);
    min-height: var(--min-height);
    background-color: var(--color-white);
    padding: 20px;
    box-shadow: var(--box-shadow-lg);
    display: grid;
    grid-template-rows: max-content auto max-content;
    font-size: 14px;
  }

  header {
    display: grid;
    grid-template-columns: auto max-content;
  }

  h2 {
    font-size: var(--fontSize);
  }
</style>
