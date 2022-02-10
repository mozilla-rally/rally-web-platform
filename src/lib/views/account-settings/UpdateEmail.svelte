<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { createEventDispatcher } from "svelte";
  import { getContext } from "svelte";
  import type { AppStore } from "$lib/stores/types";
  import Button from "../../../lib/components/Button.svelte";
  import type { NotificationStore } from "$lib/components/notifications";

  const dispatch = createEventDispatcher();
  const store: AppStore = getContext("rally:store");
  const notifications: NotificationStore = getContext("rally:notifications");

  //create account states
  let newEmail;
  let btnDisabled = true;
  let password;
  let passwordEl;
  let passwordVisible = false;

  const handleChange = () => {
    if (newEmail && password) {
      password.length > 0 && newEmail.length > 0
        ? (btnDisabled = false)
        : (btnDisabled = true);
    }
  };

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const clearFields = () => {
    newEmail = "";
    password = "";
    btnDisabled = true;
    handleSelect("read-only");
    notifications.send({ code: "SUCCESSFULLY_UPDATED_EMAIL" });
  };
</script>

<div class="settings-wrapper settings-wrapper--email">
  <div class="card-body-content">
    <form method="post">
      <fieldset class="mzp-c-field-set field-set-settings">
        <label class="mzp-c-field-label enter-pw" for="id_user_pw"
          >Enter a new email address for your account</label
        >

        <div class="mzp-c-field input-wrapper">
          <input
            class="mzp-c-field-control "
            bind:value={newEmail}
            id="id_user_email"
            name="id_user_email"
            type="email"
            width="100%"
            placeholder="mynewemail@address.com"
            required
          />
        </div>
        <div class="mzp-c-field field-pw">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Enter your password</label
            >
          </div>

          <div class="input-wrapper input-first">
            <input
              class="mzp-c-field-control"
              bind:value={password}
              bind:this={passwordEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw"
              type="password"
              width="100%"
              required
            />
            {#if passwordVisible}
              <img
                src="img/eye-slash.svg"
                alt="Eye with slash across it"
                class="fas fa-eye-slash togglePassword"
                id="hide-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={handleToggle}
              />
            {:else}
              <img
                src="img/eye-open.svg"
                alt="Open eye"
                class="togglePassword"
                id="show-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={handleToggle}
              />
            {/if}
          </div>
        </div>
      </fieldset>
    </form>
    <div class="btn-group btn-group--email">
      <Button
        {btnDisabled}
        size="xl"
        custom="card-button create"
        product
        on:click={async () => {
          await store.changeEmail(newEmail, password);
          clearFields();
        }}
      >
        <div class="button-text">Save changes</div></Button
      >

      <Button
      {btnDisabled}
        size="xl"
        custom="card-button create"
        customControl={true}
        textColor="#0060df"
        background="transparent"
        borderColor="#0060df"
        on:click={() => {
          handleSelect("read-only");
        }}
      >
        <div class="button-text">Cancel</div></Button
      >
    </div>
  </div>
</div>

