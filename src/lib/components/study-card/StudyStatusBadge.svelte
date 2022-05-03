<script>
  import CheckCircle from "../icons/CheckCircle.svelte";
  import Exclaimation from "../icons/Exclaimation.svelte";

  export let connected;
  export let downloadUrl;
</script>

<div class="vertically-aligned-container status-container">
  <div class="vertically-aligned-container">
    <span style="margin-right: 5px" class="vertically-aligned-container">
      {#if connected}
        <CheckCircle size="20px" color="var(--color-green-60)" />
      {:else}
        <Exclaimation size="20px" color="#FFA436" />
      {/if}
    </span>
    {#if connected}
      <span class="text-body-sm connected title">You're participating</span>
    {:else}
      <span class="text-body-sm not-connected title"
        >Not Participating. <a href={downloadUrl} target="_blank"
          >Add this study extension from the Chrome store.</a
        ></span
      >
    {/if}
  </div>
</div>

<style>
  .status-container {
    margin-top: 11px;
    margin-bottom: 11px;
  }

  .status-container .not-connected.title {
    color: #5e5e72;
  }

  .status-container .not-connected a {
    color: var(--color-blue-50);
    font-weight: 700;
    white-space: nowrap;
  }
</style>
