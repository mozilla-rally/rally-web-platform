<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { getContext, onMount } from "svelte";
  import Card from "$lib/components/Card.svelte";
  import UpdatePassword from "./UpdatePassword.svelte";
  import UpdateEmail from "./UpdateEmail.svelte";
  import CheckEmailCard from "$lib/components/auth-cards/CheckEmailCard.svelte";

  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");

  export let isEmail;
  export let isPW;
  export let isCheckEmail;
  export let cardArgs;
  export let displayCard;
  export let settingsTitle;
  let checkEmailText;
  let userEmail;

  let  checkEmailArgs = {
    ...cardArgs,
    title: "Check your email",
    isSettings: true
  }

  onMount(async () => {
    userEmail = await store.getUserEmail();
    if(userEmail) checkEmailText =`Successfully sent email change request. To finish updating, please follow insructions set to ${userEmail}`
 
  });
</script>

{#if isCheckEmail}
  <CheckEmailCard {...checkEmailArgs} {checkEmailText} />
{:else}
  <Card {...cardArgs}>
    <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
      <div class="title-text">{settingsTitle}</div>
    </h2>
    <div class="card-body-content" slot="card-content">
      {#if isEmail}
        <UpdateEmail on:type={displayCard} />
      {/if}

      {#if isPW}
        <UpdatePassword on:type={displayCard} />
      {/if}
    </div>
  </Card>
{/if}

<style>
  .title-wrapper {
    justify-content: unset;
  }
</style>
