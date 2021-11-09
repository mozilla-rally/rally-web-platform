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
  let number;
  let length;
  let capital;
  let letter;
  let errorMsg = false;
  const minPasswordLength = 8;
  let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  let passwordInputVisible = "none";
  let dialogHeight = "auto";
  let formHeight = "auto";

  let titleEl;
  let textWidth;

  onMount(async () => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles = `--titleWidth:${textWidth}px`;
  $: inputStyles = `--inputVisible:${passwordInputVisible}`;
  $: formStyles = `--formHeight:${formHeight}`;

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    if (email) {
      email.length > 0 ? (btnDisabled = false) : (btnDisabled = true);
    }
    if (passwordEl) {
      // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;
      passwordEl.value.match(lowerCaseLetters)
        ? letter.classList.add("valid")
        : letter.classList.remove("valid");

      // Validate capital letters
      let upperCaseLetters = /[A-Z]/g;
      passwordEl.value.match(upperCaseLetters)
        ? capital.classList.add("valid")
        : capital.classList.remove("valid");

      // Validate numbers
      let numbers = /[0-9]/g;
      passwordEl.value.match(numbers)
        ? number.classList.add("valid")
        : number.classList.remove("valid");

      // Validate length
      passwordEl.value.length >= 8
        ? length.classList.add("valid")
        : length.classList.remove("valid");
      if (name === "id_user_pw") {
        if (
          passwordEl.value.length >= minPasswordLength &&
          passwordEl.value.match(numbers) &&
          passwordEl.value.match(upperCaseLetters) &&
          passwordEl.value.match(lowerCaseLetters)
        ) {
          btnDisabled = false;
        } else {
          btnDisabled = true;
        }
      }

      // if (name === "id_user_pw") {
      //   // password.length <= minPasswordLength
      //   //   ? (errorMsg = false)
      //   //   : (errorMsg = true);

      // }
    }
  };

  const showPasswordInput = () => {
    if (!password) {
      btnDisabled = true;
      passwordInputVisible = "block";
      dialogHeight = "626px";
      formHeight = "270px";
    }
  };
</script>

<Meta
  title="Components/Dialogs/Create Form Dialog"
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

          <div style={inputStyles} class="mzp-c-field field-pw">
            <div class="label-wrapper">
              <label class="mzp-c-field-label enter-pw" for="id_user_pw"
                >Choose a Password</label
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
                {pattern}
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

            <p style={inputStyles} class="info-msg-active">
              Your password should be unique, and must contain:
            </p>
            <ul class="info-rules">
              <li bind:this={length} id="length">At least 8 characters</li>
              <li bind:this={capital} id="capital">
                At least 1 uppercase letter
              </li>
              <li bind:this={letter} id="letter">
                At least 1 lowercase letter
              </li>
              <li bind:this={number} id="number">At least 1 number</li>
            </ul>

            <!-- <p class={errorMsg ? "error-msg-active" : "hide-error-msg"}>
              Please matching the password requirements 
            </p> -->
          </div>
        </fieldset>
      </form>
      <Button
        disabled={btnDisabled}
        size="xl"
        custom="modal-button create"
        on:click={showPasswordInput}
      >
        <div class="button-text">{args.cta1}</div></Button
      >
      <p class="body-text-privacy">
        By proceeding, you agree to our <a href="/">Privacy Notice</a>
      </p>

      <p class="body-text-action">
        {args.bodyText} <a href="/">{args.linkText}</a>
      </p>
    </div>
  </Dialog>
</Template>

<!-- 👇 Each story then reuses that template -->

<Story
  name="Create Account"
  args={{
    width: "460px",
    height: dialogHeight,
    topPadding: "calc(10vh - 20px)",
    fontSize: "38px",
    title: "Create Account",
    body: "Text",
    cta1: "Continue",
    bodyText: "Already have an account?",
    linkText: "Sign In",
    custom: "modal-body-signin",
  }}
/>

<style>
  .modal-body-content.sigin-modal {
    margin-top: 8px;
    width: 100%;
  }

  .button-wrapper {
    width: 244px;
    margin: auto;
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

  form {
    height: var(--formHeight);
  }

  .error-msg-active,
  .info-msg-active {
    text-align: left;
    font-size: 12px;
    color: gray;
    padding: 10px;
    display: var(--inputVisible);
  }

  .info-msg-active {
    padding: 0;
    margin-top: 10px;
  }

  .field-pw {
    display: var(--inputVisible);
  }

  .body-text-privacy {
    font-size: 12px;
    padding-top: 20px;
  }
</style>
