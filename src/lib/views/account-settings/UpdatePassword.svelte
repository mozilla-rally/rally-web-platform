<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import { getContext } from "svelte";
  import type { NotificationStore } from "$lib/components/notifications";
  import type { AppStore } from "$lib/stores/types";
  import Button from "../../../lib/components/Button.svelte";
  const dispatch = createEventDispatcher();
  const store: AppStore = getContext("rally:store");
  const notifications: NotificationStore = getContext("rally:notifications");

  const errorClass = "mzp-c-field-control mzp-c-field-control--error";
  const inputClass = "mzp-c-field-control";
  const lowerCaseLetters = /[a-z]/g;
  const numbers = /[0-9]/g;
  const minPasswordLength = 8;
  const pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  const upperCaseLetters = /[A-Z]/g;

  let inputPasswordClass;
  let passwordEl;

  let inputItemsVisible = false;

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

  let emptyFieldsErr;
  let passwordErr = false;
  let passwordErrText;

  onMount(() => {
    inputPasswordClass = inputClass;
  });

  $: if (emptyFieldsErr) {
    inputPasswordClass = errorClass;
    passwordErrText = "Required";
  }

  const checkFields = async () => {
    if (
      oldPasswordEl.value === "" ||
      newPasswordEl.value === "" ||
      newPasswordEl2.value === ""
    ) {
      inputPasswordClass = errorClass;
      passwordErrText = "Required";
    }
  };

  const checkRules = () => {
    inputPasswordClass = errorClass;
    passwordErrText = "Required";
    if (passwordEl) {
      passwordEl.value.length < minPasswordLength
        ? length.classList.add("rules-error")
        : null;

      passwordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("clear")
        : letter.classList.add("rules-error");

      passwordEl.value.match(upperCaseLetters)
        ? capital.classList.add("clear")
        : capital.classList.add("rules-error");

      passwordEl.value.match(numbers)
        ? number.classList.add("clear")
        : number.classList.add("rules-error");
    }
    return;
  };

  const handleCheckPW = async () => {
    if (newPasswordEl.value === newPasswordEl2.value) {
      await store.resetUserPassword(newPasswordEl.value, oldPasswordEl.value);
      handleSelect("read-only");
      notifications.send({ code: "SUCCESSFULLY_UPDATED_PASSWORD" });
    } else {
      passwordErr = true;
      passwordErrText = "Passwords do not match.";
    }
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    inputPasswordClass = inputClass;
    emptyFieldsErr = false;
    passwordErrText = null;

    letter.classList.remove("rules-error");
    capital.classList.remove("rules-error");
    number.classList.remove("rules-error");
    length.classList.remove("rules-error");

    if (passwordEl) {
      inputPasswordClass = inputClass;
      if (
        name === "id_user_pw--current" ||
        name === "id_user_pw--new" ||
        name === "id_user_pw--confirm"
      ) {
        // Validate lowercase letters
        passwordEl.value.match(lowerCaseLetters)
          ? letter.classList.add("valid")
          : letter.classList.remove("valid");

        // Validate uppercase letters
        passwordEl.value.match(upperCaseLetters)
          ? capital.classList.add("valid")
          : capital.classList.remove("valid");

        // Validate numbers
        passwordEl.value.match(numbers)
          ? number.classList.add("valid")
          : number.classList.remove("valid");

        // Validate length
        passwordEl.value.length >= minPasswordLength
          ? length.classList.add("valid")
          : length.classList.remove("valid");

        // if (
        //   passwordEl.value.length >= minPasswordLength &&
        //   passwordEl.value.match(numbers) &&
        //   passwordEl.value.match(lowerCaseLetters) &&
        //   passwordEl.value.match(upperCaseLetters)
        // ) {
        //   checkEmail = true;
        // } else checkEmail = false;
      }
    }

    switch (name) {
      case "id_user_pw--current":
        passwordVisible1 = true;
        break;
      case "id_user_pw--new":
        passwordVisible2 = true;
        break;
      case "id_user_pw--confirm":
        passwordVisible3 = true;
        break;
      default:
        break;
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
        type =
          oldPasswordEl.getAttribute("type") === "password"
            ? "text"
            : "password";
        oldPasswordEl.setAttribute("type", type);
        break;
      case "type2":
        type =
          newPasswordEl.getAttribute("type") === "password"
            ? "text"
            : "password";
        newPasswordEl.setAttribute("type", type);

        break;
      case "type3":
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

<div class="settings-wrapper settings-wrapper--password">
  <div class="card-body-content">
    <form method="post">
      <fieldset class="mzp-c-field-set field-set-settings">
        <div class="mzp-c-field field-pw">
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Current password</label
            >
          </div>

          <div class="input-wrapper input-wrapper--curent">
            <input
              class={inputPasswordClass}
              bind:this={oldPasswordEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw--current"
              type="password"
              {pattern}
              width="100%"
              required
            />
            <img
              src={passwordVisible1
                ? "img/icon-password-show.svg"
                : "img/icon-password-hide.svg"}
              alt={passwordVisible1 ? "open eye" : "eye with slash"}
              class={`toggle-password ${
                passwordVisible1 ? "create-show" : "create-hide"
              }`}
              id="show-eye"
              width="24px"
              height="24px"
              type={passwordVisible1 ? "text" : "password"}
              on:click|preventDefault={() => handleToggle("type1")}
            />
            {#if passwordErrText}
              <p class="error-msg error-msg--password">
                {passwordErrText}
              </p>
            {/if}
          </div>

          <!--NEW PASSWORD -->
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >New password</label
            >
          </div>
          <div class="input-wrapper input-wrapper--new">
            <input
              class={inputPasswordClass}
              bind:this={newPasswordEl}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw id_user_pw--new"
              name="id_user_pw--new"
              type="password"
              {pattern}
              width="100%"
              required
            />
            <img
              src={passwordVisible2
                ? "img/icon-password-show.svg"
                : "img/icon-password-hide.svg"}
              alt={passwordVisible2 ? "open eye" : "eye with slash"}
              class={`toggle-password ${
                inputItemsVisible ? "create-show" : "create-hide"
              }`}
              id="show-eye"
              width="24px"
              height="24px"
              type={passwordVisible2 ? "text" : "password"}
              on:click|preventDefault={() => handleToggle("type2")}
            />
            {#if passwordErrText}
              <p class="error-msg error-msg--password">
                {passwordErrText}
              </p>
            {/if}
          </div>

          <ul
            class={`password-requirements ${
              inputItemsVisible ? "create-show" : "create-hide"
            }`}
          >
            <li bind:this={length} id="length">Use at least 8 characters</li>
            <li bind:this={letter} id="letter">
              Use at least 1 lowercase letter
            </li>
            <li bind:this={capital} id="capital">
              Use at least 1 uppercase letter
            </li>
            <li bind:this={number} id="number">Use at least 1 number</li>
          </ul>

          <!--CONFIRM PASSWORD -->
          <div class="label-wrapper">
            <label class="mzp-c-field-label enter-pw" for="id_user_pw"
              >Confirm new password</label
            >
          </div>
          <div class="input-wrapper">
            <input
              class={inputPasswordClass}
              bind:this={newPasswordEl2}
              on:change={handleChange}
              on:keyup={handleChange}
              id="id_user_pw"
              name="id_user_pw--confirm"
              type="password"
              {pattern}
              width="100%"
              required
            />
            <img
              src={passwordVisible3
                ? "img/icon-password-show.svg"
                : "img/icon-password-hide.svg"}
              alt={passwordVisible3 ? "open eye" : "eye with slash"}
              class={`toggle-password ${
                passwordVisible3 ? "create-show" : "create-hide"
              }`}
              id="show-eye"
              width="24px"
              height="24px"
              type={passwordVisible3 ? "text" : "password"}
              on:click|preventDefault={() => handleToggle("type3")}
            />
            {#if passwordErrText}
              <p class="error-msg error-msg--password">
                {passwordErrText}
              </p>
            {/if}
          </div>
        </div>
      </fieldset>
    </form>

    <div class="btn-group btn-group--password">
      <Button
        size="xl"
        customClass="card-button create cancel"
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

      <Button
        size="xl"
        product
        customClass="card-button create"
        on:click={checkFields}
      >
        <div class="button-text">Update password</div></Button
      >
    </div>
  </div>
</div>

<style>
  form {
    height: auto;
  }

  .input-wrapper {
    margin-bottom: 30px;
  }

  .info-msg-active-reset {
    text-align: left;
    font-size: 12px;
    color: gray;
  }

  .info-rules {
    margin-bottom: 15px;
  }

  .input-wrapper--new {
    margin-bottom: 10px;
  }

  .password-requirements {
    padding: 0px 24px 14px;
  }

  .field-set-settings{
    margin-bottom: 0; 
  }

  .btn-group--password{
    margin-top: 0; 
  }

  .field-pw{
    padding-bottom: 0;
  }
</style>
