<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../../lib/components/Card.svelte";
  import Button from "../../../lib/components/Button.svelte";
  import isMounted from "../../../lib/is-mounted";

  const inputClass = "mzp-c-field-control";

  let leaveModal = false;
  let isGoogleOnlyAccount;
  let Dialog;

  let btnDisabled = true;
  let inputPasswordClass;
  let inputItemsVisible = false;
  let passwordEl;
  let passwordVisible = false;

  const mounted = isMounted();

  onMount(async () => {
    Dialog = (await import("../../../lib/components/Dialog.svelte")).default;
  });

  const handleChange = (e) => {
    const name = e.srcElement.name;
    inputPasswordClass = inputClass;
    btnDisabled = false;
    if (name === "id_user_pw") {
      inputItemsVisible = true;
    }
    if (passwordEl) {
      if (passwordEl.value === "") {
        btnDisabled = true;
      }
    }
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
  };
</script>

<Meta
  title="Components/Cards/Settings Delete Account"
  component={Card}
  argTypes={{
    title: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    customClass: { control: "text" },
    headerClass: { control: "text" },
  }}
/>

<Template let:args>
  <div class="sb-container">
    <Card
      width={args.width}
      height={args.height}
      customClass={args.customClass}
      headerClass={args.headerClass}
    >
      <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
        <div class="title-text">{args.title}</div>
      </h2>

      <div class="card-body-content" slot="card-content">
        <div class="settings-wrapper settings-wrapper--delete">
          <div class="card-body-content">
            <div class="delete-card-info">
              <div class="settings-delete-text">
                <h4>Deleting your Rally account means:</h4>
                <ul>
                  <li><b>Rally will stop collecting all data.</b></li>
                  <li>
                    <b>You will stop contributing browsing data to studies</b> you
                    may have joined.
                  </li>
                  <li>
                    <b>Rally will delete all your profile information.</b>
                  </li>
                  <li>
                    <b>Rally will delete all your data from open studies</b>
                    you had joined. Researchers may still have access to browsing
                    data you contributed to <b>completed studies.</b>
                  </li>
                </ul>
              </div>
              <div class="settings-delete-image">
                <img
                  src="img/before-you-go.png"
                  alt="person walking through exit door"
                />
              </div>
            </div>

            <div class="btn-group btn-group--delete">
              <Button
                size="xl"
                customClass="card-button create cancel"
                secondary
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
      </div>
    </Card>

    {#if leaveModal && $mounted && Dialog}
      <Dialog width="413px" showCloseButton={false}>
        <div slot="title">Are you sure?</div>
        <div
          class="split-content-modal"
          slot="body"
          style="margin-bottom: 24px; box-sizing: content-box;"
        >
          <div style="width: 368px;">
            <p style="padding-top: 24px; font-size: 16px;">
              This will permanently delete your account. <br /><br />
              {#if isGoogleOnlyAccount}
                <b>Note:</b> You may be asked to authenticate with Google to complete
                the process.
              {:else}
                Enter your password below to confirm.
              {/if}
            </p>
            {#if !isGoogleOnlyAccount}
              <div class="label-wrapper">
                <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                  >Password</label
                >
              </div>
              <div class="input-wrapper">
                <!-- **** PASSWORD INPUT *** -->
                <input
                  class={inputPasswordClass}
                  bind:this={passwordEl}
                  on:change={handleChange}
                  on:keyup={handleChange}
                  autocomplete="current-password"
                  id="id_user_pw"
                  name="id_user_pw"
                  type={passwordVisible ? "text" : "password"}
                  width="100%"
                  required
                />
                <img
                  src={passwordVisible
                    ? "img/icon-password-show.svg"
                    : "img/icon-password-hide.svg"}
                  alt={passwordVisible ? "open eye" : "eye with slash"}
                  class={`toggle-password ${
                    inputItemsVisible ? "create-show" : "create-hide"
                  }`}
                  id="show-eye"
                  width="24px"
                  height="24px"
                  on:click={handleToggle}
                />
              </div>
            {/if}
          </div>
        </div>
        <div class="modal-call-flow" slot="cta">
          <Button
            size="xl"
            secondary
            on:click={() => {
              leaveModal = false;
            }}>Cancel</Button
          >
          <Button
            disabled={btnDisabled}
            size="xl"
            product
            leave
            customClass="card-button create"
          >
            Delete your Rally Account
          </Button>
        </div>
      </Dialog>
    {/if}
  </div>
</Template>

<Story
  name="Settings Delete Account"
  args={{
    width: "486px",
    height: "auto",
    customClass: "settings-update",
    headerClass: "settings-update",
    title: "Delete your Rally account",
  }}
/>

<style>
  .sb-container {
    padding: 2rem 1rem;
  }

  .title-text{
    font-size: 38px; 
  }


  h4 {
    font-size: 1rem;
  }

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

  input {
    width: 100%;
    grid-column: 1/-1;
    grid-row: 1/2;
    z-index: 1;
  }

  .input-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  #show-eye {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: end;
    z-index: 2;
    margin: 9px;
    cursor: pointer;
  }

  .create-hide {
    visibility: hidden;
    height: 0;
    opacity: 0;
    padding: 0;
  }

  .create-show {
    visibility: visible;
    opacity: 1;
    height: auto;
    transition: opacity 1s linear, height 1s linear;
  }
</style>
