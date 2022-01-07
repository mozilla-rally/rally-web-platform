<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../lib/components/Card.svelte";
  import UpdatePassword from "./account/UpdatePassword.svelte";
  import UpdateEmail from "./account/UpdateEmail.svelte";
  import LeaveRally from "./account/LeaveRally.svelte";
  import TwoFactAuth from "./account/TwoFactAuth.svelte"
  import { onMount } from "svelte";
  import "../../lib/components/auth-cards/Auth.css";
  import "./css/RallySettings.css";

  let titleEl;
  let textWidth;

  let cardArgs = {
    width: "700px",
    height: "auto",
    minHeight: "420px",
    fontSize: "38px"
  }

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
</script>

<Meta
  title="Components/Cards/Settings"
  component={Card}
  argTypes={{
    title: { control: "text" },
    body: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    minHeight: { control: "text" },
    fontSize: { control: "text" },
    isEmail: { control: "boolean" },
    isPW: { control: "boolean" },
    is2FA: { control: "boolean" },
    isLeaveRally: { control: "boolean" },
  }}
/>

<Template let:args>
  <div class="settings-container">
    <Card {...args}>
      <div class="title-wrapper" slot="card-title">
        <div style={cssVarStyles} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </div>
      <div class="card-body-content" slot="card-body">
        <!-- update email -->
        {#if args.isEmail}
          <UpdateEmail />
        {/if}

        <!-- update password -->
        {#if args.isPW}
          <UpdatePassword />
        {/if}

           <!-- enable 2FA -->
           {#if args.isLeaveRally}
           <LeaveRally />
         {/if}

        <!-- leave Rally -->
        {#if args.is2FA}
          <TwoFactAuth />
        {/if}
      </div>
    </Card>
  </div>
</Template>

<Story
  name="Settings - Update email"
  args={{
    ...cardArgs,
    title: "Account settings",
    isEmail: true,
    custom: "settings"
  }}
/>

<Story
  name="Settings - Update password"
  args={{
     ...cardArgs,
    title: "Account settings",
    isPW: true,
    custom: "settings"
  }}
/>

<Story
  name="Settings - Enable 2FA"
  args={{
    ...cardArgs,
    title: "Account settings",
    is2FA: true,
    custom: "settings extra-padding"
  }}
/>

<Story
  name="Settings - Leave Rally"
  args={{
     ...cardArgs,
    title: "Account settings",
    isLeaveRally: true,
    custom: "settings extra-padding"
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
  }
</style>
