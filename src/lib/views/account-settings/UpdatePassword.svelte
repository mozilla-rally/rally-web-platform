<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { createEventDispatcher } from "svelte";
  import { getContext } from "svelte";
  import type { NotificationStore } from "$lib/components/notifications";
  import type { AppStore } from "$lib/stores/types";
  import Button from "../../../lib/components/Button.svelte";
  import "../../../lib/components/auth-cards/Auth.css";
  const dispatch = createEventDispatcher();
  const store: AppStore = getContext("rally:store");
  const notifications: NotificationStore = getContext("rally:notifications");

  let btnDisabled = true;
  let oldPasswordEl;
  let newPasswordEl;
  let newPasswordEl2;
  let capital;
  let number;
  let length;
  let letter;
  let passwordVisible1 = false;
  let passwordVisible2 = false;
  let passwordVisible3 = false;
  const minPasswordLength = 8;
  let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

  let pwErr = false;
  let pwErrText;

  console.log("store", store)

  const handleCheckPW = async () => {
    if (newPasswordEl.value === newPasswordEl2.value) {
      await store.resetUserPassword(newPasswordEl.value, oldPasswordEl.value);
      handleSelect("read-only")
      notifications.send({ code: "SUCCESSFULLY_UPDATED_PASSWORD" });
    } else {
      pwErr = true;
      pwErrText = "Passwords do not match.";
    }
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (newPasswordEl) {
      // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;
      newPasswordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("valid")
        : letter.classList.remove("valid");

      // Validate uppercase letters
      let upperCaseLetters = /[A-Z]/g;
      newPasswordEl.value.match(upperCaseLetters)
        ? capital.classList.add("valid")
        : capital.classList.remove("valid");

      // Validate numbers
      let numbers = /[0-9]/g;
      newPasswordEl.value.match(numbers)
        ? number.classList.add("valid")
        : number.classList.remove("valid");

      // Validate length
      newPasswordEl.value.length >= minPasswordLength
        ? length.classList.add("valid")
        : length.classList.remove("valid");

      if (name === "id_user_pw") {
        if (
          newPasswordEl.value.length >= minPasswordLength &&
          newPasswordEl.value.match(numbers) &&
          newPasswordEl.value.match(lowerCaseLetters) &&
          newPasswordEl.value.match(upperCaseLetters)
        ) {
          btnDisabled = false;
        } else {
          btnDisabled = true;
        }
      }
    }
  };

  const handleSelect = (type) => {
    dispatch("type", {
      text: type,
    });
  };

  const handleToggle = (el) => {
    let type;
    switch (el) {
      case "type1":
        passwordVisible1 = !passwordVisible1;
        type =
          oldPasswordEl.getAttribute("type") === "password"
            ? "text"
            : "password";
        oldPasswordEl.setAttribute("type", type);
        break;
      case "type2":
        passwordVisible2 = !passwordVisible2;
        type =
          newPasswordEl.getAttribute("type") === "password"
            ? "text"
            : "password";
        newPasswordEl.setAttribute("type", type);

        break;
      case "type3":
        passwordVisible3 = !passwordVisible3;
        type =
          newPasswordEl2.getAttribute("type") === "password"
            ? "text"
            : "password";
        newPasswordEl2.setAttribute("type", type);
        break;
      default:
        break;
    }
  };
</script>

<div class="reset-wrapper">
  <p class="card-description">Change your current password.</p>
  <div class="card-body-content">
    <form method="post">
      <fieldset class="mzp-c-field-set field-set-settings">
        <div class="mzp-c-field field-pw">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Enter your old password</label
            >
          </div>

          <div class="input-wrapper">
            <input
              class="mzp-c-field-control"
              bind:this={oldPasswordEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw"
              type="password"
              {pattern}
              min={minPasswordLength}
              width="100%"
              required
            />
            {#if passwordVisible1}
              <img
                src="img/eye-slash.svg"
                alt="Eye with slash across it"
                class="fas fa-eye-slash togglePassword"
                id="hide-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={() => handleToggle("type1")}
              />
            {:else}
              <img
                src="img/eye-open.svg"
                alt="Open eye"
                class="togglePassword"
                id="show-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={() => handleToggle("type1")}
              />
            {/if}
          </div>

          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Enter your new password</label
            >
          </div>
          <div class="input-wrapper">
            <input
              class="mzp-c-field-control"
              bind:this={newPasswordEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw"
              type="password"
              {pattern}
              min={minPasswordLength}
              width="100%"
              required
            />
            {#if passwordVisible2}
              <img
                src="img/eye-slash.svg"
                alt="Eye with slash across it"
                class="fas fa-eye-slash togglePassword"
                id="hide-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={() => handleToggle("type2")}
              />
            {:else}
              <img
                src="img/eye-open.svg"
                alt="Open eye"
                class="togglePassword"
                id="show-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={() => handleToggle("type2")}
              />
            {/if}
          </div>

          <p class="info-msg-active-reset">
            Your password should be unique and must contain:
          </p>
          <ul class="info-rules">
            <li bind:this={length} id="length" class="invalid">
              At least 8 characters
            </li>
            <li bind:this={letter} id="letter" class="invalid">
              At least 1 lowercase letter
            </li>
            <li bind:this={capital} id="capital">
              At least 1 uppercase letter
            </li>
            <li bind:this={number} id="number" class="invalid">
              At least 1 number
            </li>
          </ul>

          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Confirm your new password</label
            >
          </div>
          <div class="input-wrapper">
            <input
              class="mzp-c-field-control"
              bind:this={newPasswordEl2}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw"
              type="password"
              {pattern}
              min={minPasswordLength}
              width="100%"
              required
            />
            {#if passwordVisible3}
              <img
                src="img/eye-slash.svg"
                alt="Eye with slash across it"
                class="fas fa-eye-slash togglePassword"
                id="hide-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={() => handleToggle("type3")}
              />
            {:else}
              <img
                src="img/eye-open.svg"
                alt="Open eye"
                class="togglePassword"
                id="show-eye"
                width="24px"
                height="24px"
                on:click|preventDefault={() => handleToggle("type3")}
              />
            {/if}
          </div>
          {#if pwErr}
            <p class="error-msg-active">
              {pwErrText}
            </p>
          {/if}
        </div>
      </fieldset>
    </form>

    <Button
      disabled={btnDisabled}
      size="xl"
      custom="card-button create btn-settings"
      on:click={handleCheckPW}
    >
      <div class="button-text">Update passsord</div></Button
    >
  </div>
</div>

<style>
  form {
    height: auto;
  }

  .input-wrapper {
    margin-bottom: 15px;
  }
  .card-description {
    padding-bottom: 20px;
    width: 80%;
    font-size: 18px;
  }

  .info-msg-active-reset {
    text-align: left;
    font-size: 12px;
    color: gray;
  }

  .info-rules {
    margin-bottom: 15px;
  }
</style>
