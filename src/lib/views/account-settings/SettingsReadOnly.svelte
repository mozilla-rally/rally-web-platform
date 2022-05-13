<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import SigninSettings from "./SigninSettings.svelte";
  import DeleteSettings from "./DeleteSettings.svelte";
  import { getContext, onMount, createEventDispatcher } from "svelte";
  import type { AppStore } from "$lib/stores/types";
  import isMounted from "$lib/is-mounted";

  const dispatch = createEventDispatcher();
  const store: AppStore = getContext("rally:store");

  export let displayCard

  // export let settingsList;
  let userEmail;

  onMount(async () => {
    userEmail = await store.getUserEmail();
  });

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

  const mounted = isMounted();
</script>

<div class="settings-readonly">
  <SigninSettings {displayCard} {userEmail} {...signinArgs} />

  <DeleteSettings {displayCard} {...deleteArgs} />
</div>
