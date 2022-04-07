<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../lib/components/Card.svelte";
  import Button from "../../lib/components/Button.svelte";
  import Signin from "../../lib/components/auth-cards/SignInCard.svelte";

  let titleEl;
  let textWidth;
  let test = true;
  let store = null;
  let handleTrigger = null;

  onMount(async () => {
    if (titleEl) {
      await titleEl;
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
</script>

<Meta
  title="Components/Cards/Launch"
  component={Card}
  argTypes={{
    title: { control: "text" },
    cta1: { control: "text" },
    cta2: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    fontSize: { control: "text" },
    bodyText: { control: "text" },
    linkText: { control: "text" },
  }}
/>

<!--We create a “template” of how args map to rendering -->
<Template let:args>
  <div class="sb-container">
    <Card {...args}>
      <h2 class="title-wrapper--launch" slot="card-title">
        <div style={cssVarStyles} class="title-highlight" />
        <div bind:this={titleEl} class="title-text">{args.title}</div>
      </h2>

      <div class="card-content" slot="card-content">
        <Button
          size="lg"
          customControl={true}
          textColor="#000000"
          background="transparent !important"
          borderColor="#CDCDD4"
          custom="card-button card-button--google"
        >
          <div class="btn-content--sm">
            <img
              width="20px"
              height="20px"
              src="img/google-logo.svg"
              alt="Google logo in color"
            />
            <div class="button-text">{args.cta1}</div>
          </div>
        </Button>

        {#if args.welcomeCard}
          <div class="line-break">
            <hr />
            <div class="line-break__text">or</div>
            <hr />
          </div>

          <Signin {store} {test} {handleTrigger} />
        {/if}

        {#if !args.welcomeCard}
          <Button
            size="lg"
            customControl={true}
            textColor="#000000"
            background="transparent"
            borderColor="#CDCDD4"
            custom="card-button card-button--signup"
          >
            <div class="btn-content--sm">
              <img
                width="24px"
                height="24px"
                src="img/email.svg"
                alt="Email icon"
              />
              <div class="button-text">Sign up with email</div>
            </div>
          </Button>

          <p class="body-text-privacy">
            By joining, you agree to our <a
              href="__BASE_SITE__/how-rally-works/data-and-privacy/"
              >privacy notice</a
            >
          </p>
        {/if}
      </div>

      <p slot="cta" class="body-text-action">
        {args.bodyText} <a href="/">{args.linkText}</a>
      </p>
    </Card>
  </div>
</Template>

<!--Each story then reuses that template -->
<Story
  name="Welcome back"
  args={{
    width: "370px",
    fontSize: "38px",
    title: "Welcome Back",
    cta1: "Continue with Google",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
    welcomeCard: true,
  }}
/>

<Story
  name="Join Rally"
  args={{
    width: "370px",
    fontSize: "38px",
    title: "Join Rally",
    cta1: "Sign up with Google",
    cta2: "Sign up with email",
    bodyText: "Already have an account?",
    linkText: "Sign in",
    welcomeCard: false,
  }}
/>

<style>
  .sb-container {
    padding: 2rem 1rem;
  }
  .title-highlight {
    width: calc(var(--titleWidth) + 15px);
  }
</style>
