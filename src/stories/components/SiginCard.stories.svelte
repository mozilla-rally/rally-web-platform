<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../lib/components/Card.svelte";
  import Button from "../../lib/components/Button.svelte";
  import "../../lib/components/auth-cards/Auth.css";
  import "./css/RallyCard.css"

  let email;
  let password;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  const minPasswordLength = 8;

  let titleEl;
  let textWidth;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleChange = () => {
    if (emailEl && passwordEl) {
      passwordEl.value.length >= minPasswordLength && emailEl.value.length > 0
        ? (btnDisabled = false)
        : (btnDisabled = true);
    }
  };
</script>

<Meta
  title="Components/Cards/Sign in"
  component={Card}
  argTypes={{
    title: { control: "text" },
    body: { control: "text" },
    cta1: { control: "text" },
    cta2: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    topPadding: { control: "text" },
    fontSize: { control: "text" },
    bodyText: { control: "text" },
    linkText: { control: "text" },
  }}
/>

<!-- 👇 We create a “template” of how args map to rendering -->
<Template let:args>
  <div class="container">
    <Card {...args}>
      <div class="title-wrapper" slot="card-title">
        <div style={cssVarStyles} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>

      <div class="card-body-content sigin-card" slot="card-body">
        <form method="post">
          <fieldset class="mzp-c-field-set">
            <div class="mzp-c-field">
              <div class="label-wrapper">
                <label for="" class="mzp-c-field-label">
                  Enter your email
                </label>
              </div>
              <input
                class="mzp-c-field-control "
                bind:value={email}
                bind:this={emailEl}
                on:change={handleChange}
                on:keyup={handleChange}
                id="id_user_email"
                name="id_user_email"
                type="email"
                width="100%"
                required
              />
            </div>
            <div class="mzp-c-field ">
              <div class="label-wrapper">
                <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                  >Enter your Password</label
                >
                <label class="mzp-c-field-label forgot-pw" for="id_user_pw"
                  ><a href="/">Forgot password?</a></label
                >
              </div>

              <div class="input-wrapper">
                <input
                  class="mzp-c-field-control"
                  bind:value={password}
                  bind:this={passwordEl}
                  on:change={handleChange}
                  on:keyup={handleChange}
                  id="id_user_pw"
                  name="id_user_pw"
                  type="password"
                  min={minPasswordLength}
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
        <Button disabled={btnDisabled} size="xl" custom="card-button signin">
          <div class="button-text">
            {args.cta1}
          </div></Button
        >

        <p class="body-text-action">
          {args.bodyText} <a href="/">{args.linkText}</a>
        </p>
      </div>
    </Card>
  </div>
</Template>

<!-- 👇 Each story then reuses that template -->
<Story
  name="Sign in"
  args={{
    width: "460px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Welcome Back",
    body: "Text",
    cta1: "Sign in",
    bodyText: "Don't have an account?",
    linkText: "Create account",
  }}
/>

<style>
  .title-highlight {
    background-color: var(--color-yellow-35);
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
    transition: width 0.2s ease-in;
  }
</style>
