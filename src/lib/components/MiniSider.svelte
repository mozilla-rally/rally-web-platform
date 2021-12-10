<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let width;
  export let fontSize = "38px";
  export let custom = "";
  export let listArr;

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

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });

    handleHighlight(type);
  };

  const handleHighlight = (type) => {
    listArr.forEach((siderItem, index) => {
      if (siderItem.type === type) {
        siderItem.highlight = true;
      } else {
        siderItem.highlight = false;
      }
    });
    listArr = listArr;
  };

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
        {#each listArr as item}
          <li
            on:click={() => {
              handleSelect(item.type);
            }}
            class={`sider-list-item ${item.class} ${
              item.highlight ? "highlight" : ""
            }`}
          >
            <a href={`#${item.text}`} class="list-item-link">{item.text}</a>
          </li>
        {/each}
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

  .sider-list-item a,
  .sider-list-item button {
    text-decoration: none;
    padding: 16px 0 16px 16px;
    position: relative;
    display: block;
    border-bottom: 1px solid rgba(143, 143, 158, 0.15);
    border-top: 1px solid rgba(143, 143, 158, 0.15);
    line-height: 1.75;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
    cursor: pointer;
  }

  .sider-list-item a:hover {
    background-color: var(--color-light-gray-20);
  }
  .leave a {
    background-color: transparent;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(143, 143, 158, 0.15);
    width: 100%;
    text-align: left;
  }

  .highlight {
    background-color: var(--color-light-gray-20);
  }

  .leave.highlight a {
    background-color: var(--color-red-60);
    color: #fff !important;
  }

  .leave a:hover {
    background-color: var(--color-red-60);
    color: #fff;
  }
</style>
