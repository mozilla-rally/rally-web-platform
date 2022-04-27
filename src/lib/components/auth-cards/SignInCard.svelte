<script>
  import { DocumentSnapshot } from "firebase/firestore";

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { onMount, createEventDispatcher } from "svelte";
  import Button from "../../../lib/components/Button.svelte";

  const dispatch = createEventDispatcher();

  export let store;
  export let test;
  export let handleTrigger;

  let emailEl;
  let emailErr = false;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let emailErrText = null;
  let emptyFieldsErr;
  let fireBaseErr = null;
  let inputClassName = "mzp-c-field-control";
  let inputEmailName;
  let inputItemsVisible = false;
  let inputPWName;
  let passwordEl;
  let passwordErr;
  let passwordErrText = null;
  let passwordVisible = false;

  onMount(() => {
    inputEmailName = inputClassName;
    inputPWName = inputClassName;
  });

  $: emptyFieldsErr
    ? (inputClassName = "mzp-c-field-control mzp-c-field-control--error")
    : (inputClassName = "mzp-c-field-control");
  $: inputEmailName = inputClassName;
  $: inputPWName = inputClassName;
  $: if (emptyFieldsErr) {
    emailErrText = "Required";
    passwordErrText = "Required";
  }

  const checkEmail = async (val) => {
    if (val.match(emailPattern)) {
      if (test === false) {
        await store.loginWithEmailAndPassword(emailEl.value, passwordEl.value);
        handleNextState();
      }
    } else {
      emailErr = true;
      emailErrText = "Invalid format";
      emailEl.classList.add("mzp-c-field-control--error");
    }

    if (test === true) handleNotVerified();
  };

  const checkFields = async () => {
    if (emailEl.value === "" && passwordEl.value === "") {
      emptyFieldsErr = true;
    } else if (emailEl.value === "") {
      emailErr = true;
      emailErrText = "Required";
      emailEl.classList.add("mzp-c-field-control--error");
    } else if (passwordEl.value === "") {
      passwordErr = true;
      passwordErrText = "Required";
      passwordEl.classList.add("mzp-c-field-control--error");
    } else if (emailEl) {
      checkEmail(emailEl.value);
    }
  };

  const handleChange = (e) => {
    const name = e.srcElement.name;
    emailEl.classList.remove("mzp-c-field-control--error");
    passwordEl.classList.remove("mzp-c-field-control--error");
    emptyFieldsErr = false;
    emailErr = false;
    passwordErr = false;

    if (name === "id_user_pw") {
      inputItemsVisible = true;
    }
  };

  const handleNotVerified = () => {
    dispatch("value", {
      value: true,
    });
  };

  const setMessage = () => {
    let userNotFound = "auth/user-not-found";
    let wrongPW = "auth/wrong-password";
    let notVerified = "Email account not verified";
    let isNotFoundErr = fireBaseErr.indexOf(userNotFound);
    let isNotPassword = fireBaseErr.indexOf(wrongPW);
    let isNotVerified = fireBaseErr.indexOf(notVerified);

    if (isNotFoundErr > -1) {
      emailErr = true;
      emailErrText = "Acount does not exist";
      emailEl.classList.add("mzp-c-field-control--error");
    }

    if (isNotPassword > -1) {
      passwordErr = true;
      passwordErrText = "Incorrect password";
      passwordEl.classList.add("mzp-c-field-control--error");
    }

    if (isNotVerified > -1) {
      handleNotVerified();
    }

    localStorage.removeItem("signInErr");
  };

  const handleNextState = () => {
    fireBaseErr = localStorage.getItem("signInErr");
    fireBaseErr ? setMessage() : null;
  };

  const handleToggle = () => {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  };
</script>

<div class="form-wrapper">
  <form method="post">
    <fieldset class="mzp-c-field-set field-set">
      <div class="mzp-c-field field field--email">
        <div class="label-wrapper">
          <label class="mzp-c-field-label" for="id_user_email">Email</label>
        </div>

        <!-- **** EMAIL INPUT *** -->
        <input
          class={inputEmailName}
          bind:this={emailEl}
          on:change={handleChange}
          on:keyup={handleChange}
          id="id_user_email"
          name="id_user_email"
          type="email"
          width="100%"
          required
        />
        {#if emailErr || emptyFieldsErr}
          <p class="error-msg error-msg--email">
            {emailErrText}
          </p>
        {/if}
      </div>

      <div class="mzp-c-field field field--pw">
        <div class="label-wrapper">
          <label class="mzp-c-field-label enter-pw" for="id_user_pw"
            >Password</label
          >
          <!-- FORGOT PASSWORD -->
          <label class="mzp-c-field-label forgot-pw" for="id_user_pw">
            <button
              on:click={() => {
                handleTrigger("forget");
              }}>Forgot password</button
            ></label
          >
        </div>

        <div class="input-wrapper">
          <!-- **** PASSWORD INPUT *** -->
          <input
            class={inputPWName}
            bind:this={passwordEl}
            on:change={handleChange}
            on:keyup={handleChange}
            id="id_user_pw"
            name="id_user_pw"
            type="password"
            width="100%"
            required
          />
          {#if passwordVisible}
            <img
              src="img/icon-password-hide.svg"
              alt="Eye with slash across it"
              class={`toggle-password ${
                inputItemsVisible ? "create-show" : "create-hide"
              }`}
              id="hide-eye"
              width="24px"
              height="24px"
              on:click|preventDefault={handleToggle}
            />
          {:else}
            <img
              src="img/icon-password-show.svg"
              alt="Open eye"
              class={`toggle-password ${
                inputItemsVisible ? "create-show" : "create-hide"
              }`}
              id="show-eye"
              width="24px"
              height="24px"
              on:click|preventDefault={handleToggle}
            />
          {/if}
        </div>
        {#if emptyFieldsErr || passwordErr}
          <p class="error-msg error-msg--password">
            {passwordErrText}
          </p>
        {/if}
      </div>
    </fieldset>
  </form>

  <Button
    on:click={checkFields}
    size="xl"
    custom="card-button card-button--signin"
    btnID="signin-btn"
  >
    <div class="card-button__text">Sign in</div></Button
  >
</div>

<style>
  .forgot-pw button {
    border-color: transparent;
    background: transparent;
    cursor: pointer;
    color: var(--color-blue-50);
    font-weight: 600;
    font-size: 14px;
  }
</style>
