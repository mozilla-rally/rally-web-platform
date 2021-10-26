<script>
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Dialog from "../../lib/components/Dialog.svelte";
  import Button from "../../lib/components/Button.svelte";
  import "./RallyDialog.css";

  let email;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let errorMsg = false;
  const minPasswordLength = 8;
  let formHeight = "auto";

  let titleEl;
  let textWidth;

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: formStyles = `--formHeight:${formHeight}`;

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (emailEl) {
      emailEl.value.length > 0 ? (btnDisabled = false) : (btnDisabled = true);

      if (name === "id_user_pw") {
        passwordEl.value.length >= minPasswordLength
          ? (errorMsg = false)
          : (errorMsg = true);
      }
    }
  };
</script>

<Meta
  title="Components/Dialogs/Reset PW Email Dialog"
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
    minHeight: { control: "text" },
  }}
/>

<!-- 👇 We create a “template” of how args map to rendering -->
<Template let:args>
  <Dialog {...args}>
    <div class="title-wrapper" slot="title">
      <div style={cssVarStyles} class="title-highlight" />
      <div bind:this={titleEl} class="title-text">{args.title}</div>
    </div>

    <div class="modal-body-content sigin-modal" slot="body">
      <form method="post" style={formStyles}>
        <fieldset class="mzp-c-field-set">
          <div class="mzp-c-field ">
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
              placeholder="enter your email address"
              required
            />
          </div>
        </fieldset>
      </form>
      <Button disabled={btnDisabled} size="xl" custom="modal-button create">
        <div class="button-text">{args.cta1}</div></Button
      >

      <p class="body-text-action">
        {args.bodyText}
      </p>
    </div>
  </Dialog>
</Template>

<!-- 👇 Each story then reuses that template -->

<Story
  name="Forgot Password"
  args={{
    width: "460px",
    height: "339px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "?Forgot Your Password",
    body: "Text",
    cta1: "Request Password Reset",
    bodyText: "We'll send you a link to reset your password",
    custom: "modal-body-signin",
    minHeight: "339px",
  }}
/>

<style>
  .modal-body-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal-body-content.sigin-modal {
    margin-top: 8px;
    width: 100%;
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
  }

  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
  }

  .button-text {
    margin-left: 10px;
    text-align: center;
  }

  p {
    margin: auto;
  }

  .body-text-action {
    font-size: 14px;
    padding-top: 20px;
    color: gray;
  }

  input {
    width: 100%;
    height: 50px;
  }

  form {
    height: var(--formHeight);
  }

  input[required]:invalid:focus {
    border: 2px solid red;
  }
</style>
