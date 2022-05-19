<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import Card from "$lib/components/Card.svelte";
  import UpdatePassword from "./UpdatePassword.svelte";
  import UpdateEmail from "./UpdateEmail.svelte";
  import DeleteAccount from "./DeleteAccount.svelte";

  export let isEmail;
  export let isPW;
  export let isDelete;
  export let cardArgs;
  export let displayCard;
  export let settingsTitle;
  export let settingsDescription;
</script>

<Card {...cardArgs}>
  <div slot="card-title">
    <h2 class="title-wrapper title-wrapper--settings">
      <div class="title-text">{settingsTitle}</div>
    </h2>

    {#if settingsDescription}
      <p class="description">
        {settingsDescription}
      </p>
    {/if}
  </div>

  <div class="card-body-content" slot="card-content">
    {#if isEmail}
      <UpdateEmail on:type={displayCard} />
    {/if}

    {#if isPW}
      <UpdatePassword on:type={displayCard} />
    {/if}

    {#if isDelete}
      <DeleteAccount on:type={displayCard} />
    {/if}
  </div>
</Card>

<style>
  .title-wrapper{
    justify-content: unset;
  }
  .description {
    margin-top: 8px;
    margin-bottom: 0px;
    font-size: 18px;
  }
</style>