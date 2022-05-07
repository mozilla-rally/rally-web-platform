<script>
  import Button from "$lib/components/Button.svelte";
  import MultiFactorViewTemplate from "./MultiFactorViewTemplate.svelte";

  export let email = "";
  export let store;
  export let onCancel = () => {};
  export let onNext = () => {};

  let password = "";
  let passwordEl;
  let passwordVisible = false;
  let loginError = false;

  function handleToggle() {
    passwordVisible = !passwordVisible;
    const type =
      passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
  }

  async function handleVerifyPassword() {
    try {
      loginError = false;
      await store.reauthenticateUser(password);
      onNext();
    } catch {
      loginError = true;
    }
  }
</script>

<MultiFactorViewTemplate>
  <span slot="body">
    <h2>First, let's verify that it's you</h2>
    <p>For security, please enter your password for {email}</p>
    <label class="mzp-c-field-label" for="lblPassword">Password</label>

    <div class="card border-0 p-0">
      <div class="input-wrapper">
        <input
          class="mb-0"
          bind:value={password}
          bind:this={passwordEl}
          id="id_user_pw"
          name="id_user_pw"
          type="password"
          style="width: 100%"
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

      {#if loginError}
        <p class="error-msg">Incorrect password</p>
      {/if}
    </div>
  </span>
  <span slot="footer">
    <div class="d-flex justify-content-end">
      <Button size="lg" secondary on:click={onCancel}>Cancel</Button>
      <Button
        size="lg"
        product
        on:click={handleVerifyPassword}
        disabled={!password}>Next</Button
      >
    </div>
  </span>
</MultiFactorViewTemplate>
