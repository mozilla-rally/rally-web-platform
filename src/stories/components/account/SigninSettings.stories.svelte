<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../../lib/components/Card.svelte";

  const googleAccountLink = "https://www.google.com/account";
  let showBtn = "display: block;";
  let hideBtn = "display: none;";
</script>

<Meta
  title="Components/Cards/Settings Sign in"
  component={Card}
  argTypes={{
    title: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    fontSize: { control: "text" },
    customClass: { control: "text" },
    headerClass: { control: "text" },
    isGoogle: { control: "boolean" },
    isWarning: { control: "boolean" },
    userEmail: { control: "text" },
  }}
/>

<!-- 👇 We create a “template” of how args map to rendering -->
<Template let:args>
  <div class="sb-container settings-readonly">
    <Card
      width={args.width}
      height={args.height}
      customClass={args.customClass}
      headerClass={args.headerClass}
    >
      <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
        <div class="title-text title-text--settings">{args.title}</div>
      </h2>
      <div class="card-content card-content--settings" slot="card-content">
        <div class="content-box">
          <div class="content-box__title">Email</div>
          {#if args.isWarning}
            <div class="content-box__warning">
              <img src="img/icon-info-warning.svg" alt="warning icon" />
              <div>
                Email not verified. <button class="warning-action rwp-link"
                  >Resend verification email
                </button>
              </div>
            </div>
          {/if}

          <div class="content-box__info">
            <div class="content-user-email">{args.userEmail}</div>
            <button
              style={args.isGoogle ? hideBtn : showBtn}
              class="edit-btn rwp-link">Edit</button
            >
          </div>
        </div>
        <hr />
        {#if args.isGoogle}
          <div class="content-box">
            <div class="content-box__title">Connected with Google</div>
            <p class="content-box__text content-box__text--google">
              You can change your Security or Privacy settings through your
              Google Account
            </p>
            <div class="content-box__info content-box__info--google">
              <div
                class="content-box__description content-box__description--google"
              >
                <img src="img/icon-logo-google.svg" alt="Google logo" />
                <div class="google-text">
                  Connected to {args.userEmail} on June 16, 20XX
                </div>
              </div>
              <a
                href={googleAccountLink}
                target="_blank"
                class="content-box__link "
                ><div>Manage account</div>
                <img
                  src="img/icon-external-link_16x16.svg"
                  alt="external link icon"
                /></a
              >
            </div>
          </div>
        {:else}
          <div class="content-box">
            <div class="content-box__title">Password</div>
            <div class="content-box__info">
              <div class="content-box__description password-dots">
                •••••••••••••••••
              </div>
              <button class="edit-btn rwp-link">Edit</button>
            </div>
          </div>
        {/if}
      </div>
    </Card>
  </div>
</Template>

<!-- 👇 Each story then reuses that template -->
<Story
  name="Settings Sign in"
  args={{
    width: "612px",
    fontSize: "24px",
    height: "auto",
    title: "Sign in",
    customClass: "settings",
    headerClass: "settings",
    isGoogle: false,
    isWarning: false,
    userEmail: "test@test.com",
  }}
/>

<style>
  .sb-container {
    padding: 2rem 1rem;
    display: block;
  }
</style>
