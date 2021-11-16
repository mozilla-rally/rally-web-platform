<script>
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Dialog from "../../lib/components/Dialog.svelte";
  import Button from "../../lib/components/Button.svelte";
  import "../../lib/components/auth-cards/Auth.css";

  let titleEl;
  let textWidth;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
</script>

<Meta
  title="Components/Dialogs/Launch Dialogs"
  component={Dialog}
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

<!--We create a “template” of how args map to rendering -->
<Template let:args>
  <Dialog {...args}>
    <div class="title-wrapper" slot="title">
      <div style={cssVarStyles} class="title-highlight" />
      <div bind:this={titleEl} class="title-text">{args.title}</div>
    </div>

    <div class="modal-body-content" slot="body">
      <div class="button-wrapper">
        <Button
          size="lg"
          customControl={true}
          textColor="#000000"
          background="transparent !important"
          borderColor="#000000"
          custom="modal-button"
        >
          <img
            width="20px"
            height="20px"
            src="img/google-logo.svg"
            alt="Google logo in color"
          />
          <div class="button-text">{args.cta1}</div></Button
        >
      </div>

      <div class="button-wrapper">
        <Button
          size="lg"
          customControl={true}
          textColor="#000000"
          background="transparent"
          borderColor="#000000"
          custom="modal-button"
        >
          <img
            width="24px"
            height="24px"
            src="img/email.svg"
            alt="Email icon"
          />
          <div class="button-text">{args.cta2}</div></Button
        >
      </div>

      <p class="body-text-privacy">
        By proceeding, you agree to our <a href="/">Privacy Notice</a>
      </p>
      <p class="body-text-action">
        {args.bodyText} <a href="/">{args.linkText}</a>
      </p>
    </div>
  </Dialog>
</Template>

<!--Each story then reuses that template -->
<Story
  name="Welcome Back"
  args={{
    width: "460px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Welcome Back",
    body: "Text",
    cta1: "Continue with Google",
    cta2: "Continue with email",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
  }}
/>

<Story
  name="Join Rally"
  args={{
    width: "460px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Join Rally",
    body: "Text",
    cta1: "Sign up with Google",
    cta2: "Sign up with email",
    bodyText: "Already have an account?",
    linkText: "Sign In",
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
</style>
