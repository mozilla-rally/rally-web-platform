<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import { getContext } from "svelte";
  import type { AppStore } from "$lib/stores/types";
  import Button from "../../../lib/components/Button.svelte";
  import isMounted from "../../../lib/is-mounted";
  const dispatch = createEventDispatcher();
  const store: AppStore = getContext("rally:store");

  const offboardURL = "https://rally.mozilla.org/account-deleted";
  const mounted = isMounted();

  let leaveModal = false;
  let Dialog;

  onMount(async () => {
    Dialog = (await import("../../../lib/components/Dialog.svelte")).default;
  });

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  async function deleteUserAccount() {
    await store.deleteUserAccount();
    window.location.href = offboardURL;
  }
</script>

<div class="settings-wrapper settings-wrapper--delete">
  <div class="card-body-content">
    <div class="delete-card-info">
      <div class="settings-delete-text">
        <h4>Deleting your Rally account means:</h4>
        <ul>
          <li><b>Rally will stop collecting all data.</b></li>
          <li><b>You will stop contributing browsing data to studies</b> you may have joined.</li>
          <li><b>Rally will delete all your profile information.</b></li>
          <li><b>Rally will delete all your data from open studies</b>
            you had joined. Researchers may still have access to 
            browsing data you contributed to <b>completed studies.</b></li>
        </ul>
      </div>
      <div class="settings-delete-image">
        <img src="images/before-you-go.png" alt="person walking through exit door">
      </div>
    </div>

    <div class="btn-group btn-group--delete">
      <Button
        size="xl"
        customClass="card-button create cancel"
        customControl={true}
        textColor="#5E5E72"
        background="transparent"
        borderColor="#CDCDD4"
        on:click={() => {
          handleSelect("read-only");
        }}
      >
        <div class="button-text">Cancel</div></Button
      >

      <Button
        size="xl"
        product
        leave
        customClass="card-button create"
        on:click={() => {
          leaveModal = true;
        }}
      >
        <div class="button-text">Delete your Rally Account</div></Button
      >
    </div>
  </div>
</div>

{#if leaveModal && $mounted && Dialog}
  <Dialog
    width="413px"
    showCloseButton={false}
  >
    <div slot="title">Are you sure?</div>
    <div
      class="split-content-modal"
      slot="body"
      style="margin-bottom: 24px; box-sizing: content-box;"
    >
      <div style="width: 368px;">
        <p style="padding-top: 24px; font-size: 16px;">
          This will permanently delete your account.
        </p>
      </div>
    </div>
    <div class="modal-call-flow" slot="cta">
      <Button
        size="xl"
        customClass="card-button create cancel"
        customControl={true}
        textColor="#5E5E72"
        background="transparent"
        borderColor="#CDCDD4"
        on:click={() => {
          leaveModal = false;
          handleSelect("read-only");
        }}
      >
        Cancel
      </Button>
      <Button
        size="xl"
        product
        leave
        customClass="card-button create"
        on:click={async () => {
          leaveModal = false;
          await deleteUserAccount();
        }}
      >
        Delete your Rally Account
      </Button>
    </div>
  </Dialog>
{/if}

<style>
  .btn-group--delete {
    margin-top: 0; 
  }

  .delete-card-info {
    display: flex;
    margin-bottom: 24px;
  }

  .settings-delete-text {
    flex: 50%;
  }

  .settings-delete-image {
    flex: 50%;
  }

  h4 {
    margin-top: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-weight: 600;
    line-height: 24px;
  }

  ul {
    font-size: 14px;
    list-style: outside;
    margin-left: 20px;
    line-height: 24px;
  }

  li {
    padding-top: 8px;
  }
</style>
