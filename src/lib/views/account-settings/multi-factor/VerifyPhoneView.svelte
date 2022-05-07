<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";
  import MultiFactorViewTemplate from "./MultiFactorViewTemplate.svelte";

  export let phoneNumber = "";
  export let createCode: () => Promise<string>;

  export let onCancel = () => {};
  export let onNext = () => {};

  function onVerify(code) {
    if (!code || code !== generatedCode) {
      codeMismatchError = true;
      return;
    }
    onNext();
  }

  async function createNewCode() {
    generatedCode = await createCode();
  }

  onMount(async () => {
    createNewCode();
  });

  let codeMismatchError = false;
  let generatedCode = "";
</script>

<MultiFactorViewTemplate>
  <span slot="body">
    <div class="sub-step mb-1">STEP 2 OF 2</div>
    <h2>Confirm code</h2>
    <p>
      We just sent your verification code to {phoneNumber}. Please enter the
      code to compelete two factor authentication.
    </p>
    <div class="d-flex">
      {#if codeMismatchError}
        <p class="error-msg">Invalid code</p>
      {/if}
    </div>
  </span>
  <span slot="footer">
    <div class="d-flex justify-content-between vertically-aligned-container">
      <p class="disclaimer m-0">
        Need another code? <a href="#" on:click={createNewCode}>Resend</a>
      </p>
      <div class="d-flex justify-content-end">
        <Button size="lg" secondary on:click={onCancel}>Cancel</Button>
        <Button size="lg" product on:click={onVerify} disabled={!phoneNumber}
          >Verify</Button
        >
      </div>
    </div>
  </span>
</MultiFactorViewTemplate>

<style>
  .error-msg {
    margin-bottom: 12px;
  }

  .disclaimer,
  .disclaimer a {
    color: #747485;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
</style>
