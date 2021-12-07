<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../lib/components/Card.svelte";
  import "../../lib/components/auth-cards/Auth.css";
  import "./css/RallyCard.css"

  let titleEl;
  let textWidth;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
</script>

<Meta
  title="Components/Cards/Check Email"
  component={Card}
  argTypes={{
    title: { control: "text" },
    body: { control: "text" },
    bodyText: { control: "text" },
    cta1: { control: "text" },
    cta2: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    topPadding: { control: "text" },
    fontSize: { control: "text" },
    linkText: { control: "text" },
    custom: { control: "text" },
    minHeight: { control: "text" },
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

      <div class="card-body-content" slot="card-body">
        <p class="body-text-info">{args.body}</p>
        <p class="body-text-action">
          {args.bodyText} <a href="/">{args.linkText}</a>
        </p>
      </div>
    </Card>
  </div>
</Template>

<!-- 👇 Each story then reuses that template -->
<Story
  name="Confirm Email"
  args={{
    width: "460px",
    height: "276px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Check your email",
    body:
      "To finish creating your account with Rally, you will need to verify your email address.",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-dialog",
  }}
/>

<Story
  name="Reset Password Email"
  args={{
    width: "460px",
    height: "300px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Check your email",
    body:
      "An email has been sent to [example@workmail.com] to reset your password",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-dialog",
    minHeight: "300px",
  }}
/>

<style>

  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }
</style>
