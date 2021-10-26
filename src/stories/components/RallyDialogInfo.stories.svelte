<script>
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Dialog from "../../lib/components/Dialog.svelte";
  import "./RallyDialog.css";

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
  title="Components/Dialogs/Info Dialogs"
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
    custom: { control: "text" },
    minHeight: { control: "text" },
  }}
/>

<!-- 👇 We create a “template” of how args map to rendering -->
<Template let:args>
  <Dialog
    {...args}
    height={args.height}
    topPadding={args.topPadding}
    width={args.width}
  >
    <div class="title-wrapper" slot="title">
      <div style={cssVarStyles} class="title-highlight" />
      <div bind:this={titleEl} class="title-text">{args.title}</div>
    </div>

    <div class="modal-body-content" slot="body">
      <p class="body-text-info">{args.body}</p>
      <p class="body-text-action">
        {args.bodyText} <a href="/">{args.linkText}</a>
      </p>
    </div>
  </Dialog>
</Template>

<!-- 👇 Each story then reuses that template -->
<Story
  name="Check Email 1"
  args={{
    width: "460px",
    height: "276px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Check Your Email",
    body:
      "To finish creating your account with Rally, you will need to verify your email address.",
    bodyText: "Need additional help?",
    linkText: "Contact Us",
    custom: "info-dialog",
    minHeight: "null",
  }}
/>

<Story
  name="Check Email 2"
  args={{
    width: "460px",
    height: "300px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Check Your Email",
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

  .body-text-action,
  .body-text-info {
    font-size: 15px;
    padding-top: 40px;
    color: #000000;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }

</style>
