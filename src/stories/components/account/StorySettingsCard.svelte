<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { createEventDispatcher } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import UpdatePassword from "./UpdatePassword.svelte";
  import UpdateEmail from "./UpdateEmail.svelte";
  import TwoFactAuth from "./TwoFactAuth.svelte";
  import "../css/RallySettings.css";

  const dispatch = createEventDispatcher();

  export let isEmail;
  export let isPW;
  export let is2FA;
  export let cardArgs;
  export let displayCard;

</script>

<Card {...cardArgs}>
  <div class="card-body-content" slot="card-body">
    <!-- update email -->
    {#if isEmail}
      <UpdateEmail on:type={displayCard} />
    {/if}

    <!-- update password -->
    {#if isPW}
      <UpdatePassword on:type={displayCard} />
    {/if}

    <!-- enable 2FA -->
    {#if is2FA}
      <TwoFactAuth />
    {/if}
  </div>
</Card>
