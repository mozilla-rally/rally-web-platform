<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../../../lib/components/Button.svelte";
  import Card from "../../../lib/components/Card.svelte";

  const inputClass = "mzp-c-field-control";

  let btnDisabled = true;
  let emailEl;
  let emailErrText = null;
  let inputEmailClass;
  let inputPasswordClass;
  let inputItemsVisible = false;
  let passwordEl;
  let passwordErrText = null;
  let passwordVisible = false;

  const handleChange = (e) => {
    const name = e.srcElement.name;
    inputEmailClass = inputClass;
    inputPasswordClass = inputClass;
    emailErrText = null;
    passwordErrText = null;
    btnDisabled = false;
    if (name === "id_user_pw") {
      inputItemsVisible = true;
    }
    if (emailEl && passwordEl) {
      if (emailEl.value === "" && passwordEl.value === "") {
        btnDisabled = true;
      }
    }
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
  };
</script>

<Meta
  title="Components/Cards/Settings Update Email"
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
  <div class="sb-container settings-readonly">
    <Card
      width={args.width}
      height={args.height}
      customClass={args.customClass}
      headerClass={args.headerClass}
      fontSize={args.fontSize}
    >
      <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
        <div class="title-text">{args.title}</div>
      </h2>
      <div class="card-body-content" slot="card-content">
        <div class="settings-wrapper settings-wrapper--email">
          <div class="card-body-content">
            <form method="post">
              <fieldset class="mzp-c-field-set field-set">
                <div class="mzp-c-field field field--email">
                  <div class="label-wrapper">
                    <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                      >New email address</label
                    >
                  </div>
                  <!-- **** EMAIL INPUT *** -->
                  <input
                    class={`rally-input ${inputEmailClass}`}
                    bind:this={emailEl}
                    on:change={handleChange}
                    on:keyup={handleChange}
                    id="id_user_email"
                    name="id_user_email"
                    type="email"
                    width="100%"
                    required
                  />

                  {#if emailErrText}
                    <p class="error-msg error-msg--email">
                      {emailErrText}
                    </p>
                  {/if}
                </div>

                <div class="mzp-c-field field field--pw">
                  <div class="label-wrapper">
                    <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                      >Password</label
                    >
                  </div>

                  <div class="input-wrapper">
                    <!-- **** PASSWORD INPUT *** -->
                    <input
                      class={`rally-input ${inputPasswordClass}`}
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
                  {#if passwordErrText}
                    <p class="error-msg error-msg--password">
                      {passwordErrText}
                    </p>
                  {/if}
                </div>
              </fieldset>
            </form>

            <div class="card-bottom">
              <!-- FORGOT PASSWORD -->
              <label class="mzp-c-field-label forgot-pw" for="id_user_pw">
                <button>Forgot password?</button></label
              >

              <div class="btn-group btn-group--email">
                <Button size="xl" customClass="card-button cancel" secondary>
                  <div class="button-text">Cancel</div></Button
                >

                <Button
                  disabled={btnDisabled}
                  size="xl"
                  customClass="card-button create"
                  product
                >
                  <div class="button-text">Update email</div></Button
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
  name="Settings Update Email"
  args={{
    width: "612px",
    height: "auto",
    fontSize: "38px",
    customClass: "settings-update",
    headerClass: "settings-update",
    title: "Change your email address",
  }}
/>

<style>
  .sb-container {
    padding: 2rem 1rem;
  }

  .title-text{
    font-size: 38px; 
  }


  input {
    width: 100%;
  }

  .title-wrapper {
    justify-content: unset;
  }
</style>
