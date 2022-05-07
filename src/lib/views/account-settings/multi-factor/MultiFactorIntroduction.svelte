<script>
  import Button from "$lib/components/Button.svelte";
  import TwoFactor from "$lib/components/icons/TwoFactor.svelte";
  import MultiFactorViewTemplate from "./MultiFactorViewTemplate.svelte";

  export let onCancel = () => {};
  export let onNext = () => {};
</script>

<MultiFactorViewTemplate>
  <span slot="body">
    <div class="d-flex justify-content-center p-4">
      <TwoFactor />
    </div>
    <h2>Protect your account</h2>
    <p>
      Two factor authentication adds an extra layer of security to your Rally
      account. Once enabled, you will have to enter a password and a code sent
      to your mobile phone when logging in.
    </p>
  </span>
  <span slot="footer">
    <div class="d-flex justify-content-end">
      <Button size="lg" secondary on:click={onCancel}>Cancel</Button>
      <Button size="lg" product on:click={onNext}>Turn On</Button>
    </div>
  </span>
</MultiFactorViewTemplate>
