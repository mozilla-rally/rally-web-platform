<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { signInWithEmailLink } from "@firebase/auth";
  import { onMount } from "svelte";

  export let width;
  export let fontSize = "38px";
  export let custom = "";
  export let listTextArr;

  function toVariable(key, value) {
    return value ? `${key}: ${value};` : undefined;
  }
  function addStyleVariables({ width, fontSize }) {
    const values = [
      toVariable("--width", width),
      toVariable("--fontSize", fontSize),
    ].filter((d) => d !== undefined);
    if (values.length === 0) return undefined;
    return values.join("; ");
  }

  $: styles = addStyleVariables({
    width,
    fontSize,
  });
  $: classSet = ["sider-body", custom].filter((t) => t).join(" ");

  const key = `sider-${
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  }`;
</script>

<div id={key}>
  <div class="sider-container radius-sm mzp-t-mozilla" style={styles}>
    <div class={classSet}>
      <ul class="sider-list">
        {#each listTextArr as name}
          <li class="sider-list-item">
            <a href={`#${name}`} class="list-item-link">{name}</a>
          </li>
        {/each}
        <li class="sider-list-item leave-btn">
          <button class="list-item-link">Leave Rally</button>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .sider-container {
    width: var(--width);
    background-color: var(--color-white);
    padding: 0px;
    box-shadow: var(--box-shadow-lg);
    display: grid;
    grid-template-rows: max-content auto max-content;
  }

  .sider-list {
    list-style: none;
    font-size: var(--fontSize);
  }

  .sider-list-item {
    text-decoration: none;
  }

  .sider-list-item a, .sider-list-item button {
    text-decoration: none;
    padding: 16px 0 16px 16px;
    position: relative;
    display: block;
    text-align: center;
    border-bottom: 1px solid rgba(143, 143, 158, 0.15);
    border-top: 1px solid rgba(143, 143, 158, 0.15);
    line-height: 1.75;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
    cursor: pointer;
  }

  .sider-list-item a:hover{
    background-color: var(--color-light-gray-20);
  }
  .leave-btn button{
    background-color: transparent;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(143, 143, 158, 0.15);
    text-align: center;
    width: 100%;
  }

  .leave-btn button:hover{
    background-color: var(--color-red-60); 
    color: white; 
  }
</style>
