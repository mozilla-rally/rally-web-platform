<script>
  import { onMount } from "svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Dialog from "../../lib/components/Dialog.svelte";
  import Button from "../../lib/components/Button.svelte";
  import "./RallyDialog.css";

  let email;
  let password;
  let emailEl;
  let passwordEl;
  let passwordVisible = false;
  let btnDisabled = true;
  let errorMsg = false;
  const minPasswordLength = 8;

  let titleEl;
  let textWidth;

  onMount(() => {
    if (titleEl) {
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

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (emailEl && passwordEl) {
      passwordEl.value.length >= minPasswordLength && emailEl.value.length > 0
        ? (btnDisabled = false)
        : (btnDisabled = true);

      if (name === "id_user_pw") {
        passwordEl.value.length >= minPasswordLength
          ? (errorMsg = false)
          : (errorMsg = true);
      }
    }
  };


</script>

<Meta
  title="SignIn Form Dialog"
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

    <div class="modal-body-content sigin-modal" slot="body">
      <form method="post">
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
              required
            />
          </div>
          <div class="mzp-c-field ">
            <div class="label-wrapper">
              <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                >Enter your Password</label
              >
              <label class="mzp-c-field-label forgot-pw" for="id_user_pw"
                ><a href="/">Forgot Password?</a></label
              >
            </div>

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
            <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
              Please choose a password that is at least 8 characters
            </p> -->
          </div>
        </fieldset>
      </form>
      <Button disabled={btnDisabled} size="xl" custom="modal-button signin">
        <div class="button-text">
          {args.cta1}
        </div></Button
      >

      <p class="body-text-action">
        {args.bodyText} <a href="/">{args.linkText}</a>
      </p>
    </div>
  </Dialog>
</Template>

<!-- 👇 Each story then reuses that template -->
<Story
  name="Welcome Back"
  args={{
    width: "460px",
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Welcome Back",
    body: "Text",
    cta1: "Sign In",
    bodyText: "Don't have an account?",
    linkText: "Create Account",
    custom: "modal-body-signin",
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

  .title-text {
    z-index: 1;
    position: absolute;
    white-space: nowrap;
    display: inline-block;
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

  p a {
    color: #000000;
  }

  .body-text-action {
    font-size: 16px;
    padding-top: 40px;
    color: #000000;
  }

  .body-text-action a {
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 50px;
  }

  form img {
    position: absolute;
    margin: 14px 0 0 -35px;
    cursor: pointer;
  }

  input[required]:invalid:focus {
    border: 2px solid red;
  }

  .error-msg-active {
    max-width: 233px;
    text-align: left;
    font-size: 12px;
    color: gray;
    padding: 10px;
  }

  .hide-error-msg {
    display: none;
  }

  .enter-pw {
    color: #818282;
  }

  .label-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .mzp-c-field-label {
    font-weight: 600;
    font-size: 12px;
  }

  .mzp-c-field-label a {
    text-decoration: none;
    color: var(--color-blue-50);
  }
</style>
