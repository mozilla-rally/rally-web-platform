<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  export let pad = true;
  export let custom = ""
</script>

<main class="mzp-t-mozilla md-container default">
  <div class={`content-container ${custom}`}>
    <slot />
  </div>
</main>

<style>
  .content-container {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    background-size: 100% 100%;
    background-attachment: fixed;
    margin: var(--pad, 0);
    margin-right: 0;
    box-sizing: border-box;
  }
</style>
