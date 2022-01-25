<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import Button from "../../../lib/components/Button.svelte";
  import { getContext, onMount } from "svelte";
  import type { AppStore } from "$lib/stores/types";
  

  const store: AppStore = getContext("rally:store");

  let isUserVerified;
  let userEmail;
  let isNotVerifiedStyle = "not-verified";
  let emailMsg = "(confirm your email)";
  let warningStyle = "not-verified";

  onMount(async () => {
    userEmail = await store.getUserEmail();
    isUserVerified = await store.isUserVerified();
  });
</script>

<div class="leave-rally-wrapper">
  <div
    class="split-content-modal"
    style="margin-bottom: 24px; box-sizing: content-box;"
  >
    <div>
      <ul class="read-only" style="padding-right: 36px;">
        <li class="read-only-list-item">
          <h5 class="list-title">Email address</h5>

          <p class={!isUserVerified ? warningStyle : ""}>
            {userEmail} <i>{!isUserVerified ? emailMsg : ""}</i>
          </p>
        </li>
        <li class="read-only-list-item">
          <h5 class="list-title">Update password</h5>
          <p>Change your current password.</p>
        </li>
        <li class="read-only-list-item">
          <h5 class="list-title">Two-factor authentication</h5>
          <p>
            Enable SMS verification to sign in using a one time passcode sent to
            your mobile phone as a SMS
          </p>
        </li>
        <li class="read-only-list-item">
          <h5 class="list-title">Leave Rally</h5>
          <p>Delete your Rally account.</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .lead {
    padding-bottom: 10px;
    font-size: 18px;
  }
  .read-only {
    text-decoration: none;
    list-style: none;
  }
  .read-only-list-item {
    padding: 20px;
    border-bottom: 1px solid rgba(143, 143, 158, 0.15);
    border-top: 1px solid rgba(143, 143, 158, 0.15);
  }

  .not-verified {
    color: var(--color-orange-80);
  }

  .lead-text {
    border-bottom: none;
    border-top: none;
  }
  .read-only-list-item p {
    font-size: 16px;
  }

  .list-title {
    font-size: 22px;
    padding-bottom: 5px;
  }
</style>
