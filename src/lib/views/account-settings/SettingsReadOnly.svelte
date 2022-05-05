<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import Button from "$lib/components/Button.svelte";
  import ReadOnlyCard from "./ReadOnlyCard.svelte";
  import { getContext, onMount, createEventDispatcher } from "svelte";
  import type { AppStore } from "$lib/stores/types";
  import isMounted from "$lib/is-mounted";

  const dispatch = createEventDispatcher();
  const store: AppStore = getContext("rally:store");

  export let settingsList;
  let leaveModal = false;
  let Dialog;
  let userEmail;

  onMount(async () => {
    userEmail = await store.getUserEmail();
    Dialog = (await import("../../../lib/components/Dialog.svelte")).default;
  });

  const mounted = isMounted();

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });
  };
</script>

<di
  on:leave-rally={() => {
    leaveModal = true;
  }}
  class="settings-readonly"
>
  <div class="settings-readonly--first">
    <h3 class="readonly-title">Sign In</h3>
    <div
      class="readonly-email"
      on:click={() => {
        handleSelect(settingsList["email"]);
      }}
    >
      <ReadOnlyCard title="Email Address" content={userEmail} />
    </div>
    <div
      class="readonly-pw"
      on:click={() => {
        handleSelect(settingsList["password"]);
      }}
    >
    <ReadOnlyCard title="Password" content="*************" />

    </div>
  </div>

  <div class="settings-readonly--second">
    <h3 class="readonly-title">Account Security</h3>
    <div
      class="readonly-2fa"
      on:click={() => {
        handleSelect(settingsList["twoFactor"]);
      }}
    >
    <ReadOnlyCard title="Two-step verification" content="Increase your security by adding two-step verification" />

    </div>
  </div>

  <div class="settings-readonly--leave">
    <Button
      on:click={() => {
        leaveModal = true;
      }}
      size="lg"
      customControl={true}
      textColor="#c50042"
      background="transparent"
      borderColor="#c50042">Leave Mozilla Rally</Button
    >
  </div>

  {#if leaveModal && $mounted && Dialog}
    <Dialog
      on:dismiss={() => {
        leaveModal = false;
      }}
    >
      <div slot="title">Before You Go…</div>
      <div
        class="split-content-modal"
        slot="body"
        style="margin-bottom: 24px; box-sizing: content-box;"
      >
        <div style="width: 368px;">
          <p style="padding-top: 20px;">
            Thanks for helping make the internet just a little bit better. For
            your reference, leaving Rally means that:
          </p>
          <ul class="mzp-u-list-styled bigger-gap" style="padding-right: 36px;">
            <li>
              We will <b>no longer collect any data</b> for our platform or studies
            </li>
            <li>
              You will be <b>removed from any studies</b> you're currently participating
              in
            </li>
            <li>
              We will <b>delete any demographic information</b> you've shared with
              us
            </li>
            <li>
              If you are currently enrolled in an open study, we will <b
                >delete all data</b
              >
              we've collected through that study to date. However, researchers may
              still retain access to data you've contributed to
              <b>completed studies</b>.
            </li>
            <li>
              We will <b>uninstall and remove the Rally add-on</b>, and any
              associated study add-ons that you may have installed.
            </li>
          </ul>
        </div>
        <img
          style="width: 270px; padding-top: 40px; transform: translateX(-24px);"
          src="img/before-you-go.png"
          alt="person walking through exit door"
        />
      </div>
      <div class="modal-call-flow" slot="cta">
        <Button
          size="lg"
          product
          leave
          on:click={() => {
            leaveModal = false;
          }}
        >
          Leave Rally
        </Button>
        <Button
          size="lg"
          product
          secondary
          on:click={() => {
            leaveModal = false;
          }}
        >
          Cancel
        </Button>
      </div>
    </Dialog>
  {/if}
</di>
