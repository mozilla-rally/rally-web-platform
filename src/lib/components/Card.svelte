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

<section id={key}>
  <div class="card-container radius-sm" style={styles}>
    <header class="card-header">
      <h2>
        <slot name="card-title" />
      </h2>
    </header>

    <div class={classSet}>
      <slot name="card-body">
        <p>I am a Card</p>
      </slot>
    </div>

    <slot name="cta" />
  </div>
</section>

<style>
  .card-container {
    max-width: var(--width);
    height: var(--height);
    min-height: var(--min-height);
    background-color: var(--color-white);
    border: 1px solid #cdcdd4;
    display: grid;
    justify-content: center;
    font-size: 0.875rem;
  }

  header{
    margin-bottom: 5px;
  }
</style>
