<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { getCodeList } from "country-list";
  import { phone } from "phone";
  import MultiFactorViewTemplate from "./MultiFactorViewTemplate.svelte";

  export let onCancel = () => {};
  export let onNext = (_phoneNumber: string) => {};

  function onSendCode() {
    const phoneResult = phone(phoneNumber, { country });
    phoneNumberError = !phoneResult.isValid;

    if (phoneNumberError) {
      return;
    }

    onNext(phoneResult.phoneNumber);
  }

  let phoneNumber;
  let country;
  let phoneNumberError = false;

  const countries = Object.entries(getCodeList()).sort((a, b) =>
    a[1].localeCompare(b[1])
  );
</script>

<MultiFactorViewTemplate>
  <span slot="body">
    <div class="sub-step mb-1">STEP 1 OF 2</div>
    <h2>Let’s set up your phone</h2>
    <p>Where should we send the code?</p>
    <div class="d-flex">
      <select
        class="country-list"
        on:change={(e) => {
          country = e.currentTarget.value;
        }}
      >
        {#each countries as country}
          <option value={country[0]}>{country[1]}</option>
        {/each}
      </select>
      <div class="input-wrapper number w-100">
        <input
          class="mzp-c-field-control mb-0"
          bind:value={phoneNumber}
          id="id_user_number"
          name="id_user_number"
          type="tel"
          style="width: 100%"
          required
        />
        {#if phoneNumberError}
          <p class="error-msg">Incorrect phone number</p>
        {/if}
      </div>
    </div>
    <p class="disclaimer">
      Mozilla Rally will use this number only account security. Messages and
      data rates may apply.
    </p>
  </span>
  <span slot="footer">
    <div class="d-flex justify-content-end">
      <Button size="lg" secondary on:click={onCancel}>Cancel</Button>
      <Button size="lg" product on:click={onSendCode} disabled={!phoneNumber}
        >Send Code</Button
      >
    </div>
  </span>
</MultiFactorViewTemplate>

<style>
  .country-list {
    margin-right: 19px;
    align-self: baseline;
  }

  .error-msg {
    margin-bottom: 12px;
  }
</style>
