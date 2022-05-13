<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  import Card from "../../../lib/components/Card.svelte";

  export let width;
  export let title;
  export let height;
  export let customClass;
  export let headerClass;
  export let userEmail;
  export let displayCard;
</script>

<Card {width} {height} {customClass} {headerClass}>
  <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
    <div class="title-text title-text--settings">{title}</div>
  </h2>
  <div class="card-content card-content--settings" slot="card-content">
    <div class="content-box">
      <div class="content-box__title">Email</div>
      <div class="content-box__content">
        <div class="content-description user-email">{userEmail}</div>
        <button
          on:click={() => {
            displayCard("update-email");
          }}
          class="edit-btn">Edit</button
        >
      </div>
      <hr />
      <div class="content-box">
        <div class="content-box__title">Password</div>
        <div class="content-box__content">
          <div class="content-description password-dots">•••••••••••••••••</div>
          <button
            on:click={() => {
              displayCard("update-pw");
            }}
            class="edit-btn">Edit</button
          >
        </div>
      </div>
    </div>
  </div></Card
>
