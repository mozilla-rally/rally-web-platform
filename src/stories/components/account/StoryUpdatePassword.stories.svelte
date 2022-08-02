<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount } from "svelte";

  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../../../lib/components/Button.svelte";
  import Card from "../../../lib/components/Card.svelte";

  const inputClass = "mzp-c-field-control";

  const errorClass = "mzp-c-field-control mzp-c-field-control--error";

  const lowerCaseLetters = /[a-z]/g;
  const numbers = /[0-9]/g;
  const minPasswordLength = 8;
  const pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  const upperCaseLetters = /[A-Z]/g;

  let btnDisabled = true;
  let inputItemsVisible = false;
  let capital;
  let number;
  let length;
  let letter;
  let oldPassword = {
    inputPasswordClass: "",
    passwordEl: null,
    passwordVisible: false,
    passwordErrText: null,
    showIcon: false,
  };
  let newPassword = {
    inputPasswordClass: "",
    passwordEl: null,
    passwordVisible: false,
    passwordErrText: null,
    showIcon: false,
  };
  let confirmPassword = {
    inputPasswordClass: "",
    passwordEl: null,
    passwordVisible: false,
    passwordErrText: null,
    showIcon: false,
  };

  const handleChange = (e) => {
    const newPasswordEl = newPassword.passwordEl;
    const isOldAbsent = !oldPassword.passwordEl.value;
    const isNewAbsent = !newPassword.passwordEl.value;
    const isConfirmAbsent = !confirmPassword.passwordEl.value;
    const name = e.srcElement.name;
    btnDisabled = false;

    letter.classList.remove("rules-error");
    capital.classList.remove("rules-error");
    number.classList.remove("rules-error");
    length.classList.remove("rules-error");

    if (
      oldPassword.passwordEl &&
      newPassword.passwordEl &&
      confirmPassword.passwordEl
    ) {
      if (isOldAbsent && isNewAbsent && isConfirmAbsent) {
        btnDisabled = true;
      } else btnDisabled = false;
    }
    if (newPasswordEl) {
      newPassword.inputPasswordClass = inputClass;
      if (name === "id_user_pw--new") {
        newPassword.showIcon = true;
        inputItemsVisible = true;
        // Validate lowercase letters
        newPassword.passwordEl.value.match(lowerCaseLetters)
          ? letter.classList.add("valid")
          : letter.classList.remove("valid");
        // Validate uppercase letters
        newPassword.passwordEl.value.match(upperCaseLetters)
          ? capital.classList.add("valid")
          : capital.classList.remove("valid");
        // Validate numbers
        newPassword.passwordEl.value.match(numbers)
          ? number.classList.add("valid")
          : number.classList.remove("valid");
        // Validate length
        newPassword.passwordEl.value.length >= minPasswordLength
          ? length.classList.add("valid")
          : length.classList.remove("valid");
      }
      switch (name) {
        case "id_user_pw--current":
          oldPassword.showIcon = true;
          break;
        case "id_user_pw--confirm":
          confirmPassword.showIcon = true;
          break;
        default:
          break;
      }
    }
  };

  const handleToggle = (i) => {
    switch (i) {
      case "type0":
        oldPassword.passwordVisible = !oldPassword.passwordVisible;
        break;
      case "type1":
        newPassword.passwordVisible = !newPassword.passwordVisible;
        break;
      case "type2":
        confirmPassword.passwordVisible = !confirmPassword.passwordVisible;
        break;
      default:
        break;
    }
  };
</script>

<Meta
  title="Components/Cards/Settings Update Password"
  component={Card}
  argTypes={{
    title: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    customClass: { control: "text" },
    headerClass: { control: "text" },
    fontSize: {control: "text"}
  }}
/>

<Template let:args>
  <div class="sb-container account-settings-main">
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
                      class={`rally-input ${oldPassword.inputPasswordClass}`}
                      bind:this={oldPassword.passwordEl}
                      on:change={handleChange}
                      on:keyup={handleChange}
                      autocomplete="current-password"
                      id="id_user_pw"
                      name="id_user_pw--current"
                      type={oldPassword.passwordVisible ? "text" : "password"}
                      {pattern}
                      width="100%"
                      required
                    />
                    <img
                      src={oldPassword.passwordVisible
                        ? "img/icon-password-show.svg"
                        : "img/icon-password-hide.svg"}
                      alt={oldPassword.passwordVisible
                        ? "open eye"
                        : "eye with slash"}
                      class={`toggle-password ${
                        oldPassword.showIcon ? "create-show" : "create-hide"
                      }`}
                      id="show-eye"
                      width="24px"
                      height="24px"
                      on:click|preventDefault={() => handleToggle("type0")}
                    />
                    {#if oldPassword.passwordErrText}
                      <p class="error-msg error-msg--password">
                        {oldPassword.passwordErrText}
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
                      class={`rally-input ${newPassword.inputPasswordClass}`}
                      bind:this={newPassword.passwordEl}
                      on:change={handleChange}
                      on:keyup={handleChange}
                      autocomplete="new-password"
                      id="id_user_pw id_user_pw--new"
                      name="id_user_pw--new"
                      type={newPassword.passwordVisible ? "text" : "password"}
                      {pattern}
                      width="100%"
                      required
                    />
                    <img
                      src={newPassword.passwordVisible
                        ? "img/icon-password-show.svg"
                        : "img/icon-password-hide.svg"}
                      alt={newPassword.passwordVisible
                        ? "open eye"
                        : "eye with slash"}
                      class={`toggle-password ${
                        newPassword.showIcon ? "create-show" : "create-hide"
                      }`}
                      id="show-eye"
                      width="24px"
                      height="24px"
                      on:click|preventDefault={() => handleToggle("type1")}
                    />
                    {#if newPassword.passwordErrText}
                      <p class="error-msg error-msg--password">
                        {newPassword.passwordErrText}
                      </p>
                    {/if}
                  </div>

                  <ul
                    class={`password-requirements ${
                      inputItemsVisible ? "create-show" : "create-hide"
                    }`}
                  >
                    <li bind:this={length} id="length">
                      Use at least 8 characters
                    </li>
                    <li bind:this={letter} id="letter">
                      Use at least 1 lowercase letter
                    </li>
                    <li bind:this={capital} id="capital">
                      Use at least 1 uppercase letter
                    </li>
                    <li bind:this={number} id="number">
                      Use at least 1 number
                    </li>
                  </ul>

                  <!--NEW PASSWORD END -->

                  <!--CONFIRM PASSWORD -->
                  <div class="label-wrapper">
                    <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                      >Confirm new password</label
                    >
                  </div>
                  <div class="input-wrapper">
                    <input
                      class={`rally-input ${confirmPassword.inputPasswordClass}`}
                      bind:this={confirmPassword.passwordEl}
                      on:change={handleChange}
                      on:keyup={handleChange}
                      autocomplete="new-password"
                      id="id_user_pw"
                      name="id_user_pw--confirm"
                      type={confirmPassword.passwordVisible
                        ? "text"
                        : "password"}
                      {pattern}
                      width="100%"
                      required
                    />
                    <img
                      src={confirmPassword.passwordVisible
                        ? "img/icon-password-show.svg"
                        : "img/icon-password-hide.svg"}
                      alt={confirmPassword.passwordVisible
                        ? "open eye"
                        : "eye with slash"}
                      class={`toggle-password ${
                        confirmPassword.showIcon ? "create-show" : "create-hide"
                      }`}
                      id="show-eye"
                      width="24px"
                      height="24px"
                      on:click|preventDefault={() => handleToggle("type2")}
                    />
                    {#if confirmPassword.passwordErrText}
                      <p class="error-msg error-msg--password">
                        {confirmPassword.passwordErrText}
                      </p>
                    {/if}
                  </div>
                </div>
              </fieldset>
            </form>

            <div class="card-bottom">
              <!-- FORGOT PASSWORD -->
              <label class="mzp-c-field-label forgot-pw" for="id_user_pw">
                <button>Forgot password?</button></label
              >

              <div class="btn-group btn-group--password">
                <Button
                  size="xl"
                  customClass="card-button create cancel"
                  secondary
                >
                  <div class="button-text">Cancel</div></Button
                >

                <Button
                  disabled={btnDisabled}
                  size="xl"
                  product
                  customClass="card-button create"
                >
                  <div class="button-text">Update password</div></Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</Template>

<Story
  name="Settings Update Password"
  args={{
    width: "486px",
    height: "auto",
    fontSize: "38px",
    customClass: "settings-update",
    headerClass: "settings-update",
    title: "Change your password",
  }}
/>

<style>
  .sb-container {
    padding: 2rem 1rem;
  }

  .title-text{
    font-size: 38px; 
  }

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
  .field-set-settings {
    margin-bottom: 0;
  }
  .btn-group--password {
    margin-top: 0;
  }
  .field-pw {
    padding-bottom: 0;
  }
</style>
