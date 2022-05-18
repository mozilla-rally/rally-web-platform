<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { getContext, onMount } from "svelte";
  import SigninSettings from "./SigninSettings.svelte";
  import DeleteSettings from "./DeleteSettings.svelte";
  import type { AppStore } from "$lib/stores/types";
  const store: AppStore = getContext("rally:store");

  export let displayCard;
  const offboardURL = "https://rally.mozilla.org/account-deleted";

  let readOnlyArgs = {
    width: "612px",
    height: "auto",
    title: "Sign in",
    customClass: "settings",
    headerClass: "settings",
  };

  let signinArgs = {
    ...readOnlyArgs,
    title: "Sign in",
  };

  let deleteArgs = {
    ...readOnlyArgs,
    title: "Delete account",
  };

  async function deleteUserAccount() {
    await store.deleteUserAccount();
    window.location.href = offboardURL;
  }
</script>

<div class="settings-readonly">
  <SigninSettings {displayCard} {...signinArgs} />

  <DeleteSettings {deleteUserAccount} {displayCard} {...deleteArgs} />
</div>
