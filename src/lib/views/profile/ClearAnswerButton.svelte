<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { fly } from "svelte/transition";
  import CloseSmall from "../../components/icons/CloseSmall.svelte";
</script>

<button
  transition:fly|local={{ duration: 150, y: 2.5 }}
  class="gafc mzp-t-sm mzp-c-button mzp-t-neutral mzp-t-product"
  on:click
>
  <CloseSmall /> Clear this response
</button>

<style>
  /*
    Because this button's styling deviates a bit from the protocol buttons,
    we will special-case this for now and build off the protocol styles.
    Down the line, if this button style should be reused, we can
    move this into Button.svelte with an appropriate variant name.
*/
  button.mzp-t-sm.mzp-c-button.mzp-t-neutral.mzp-t-product {
    position: absolute;
    display: inline-grid;
    grid-column-gap: 5.66px;
    margin: 0;
    padding: 0;
    /* note: Button component border is 1px */
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 5.5px;
    padding-bottom: 5.5px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    margin-left: 12px;
    color: #000;
  }
</style>
