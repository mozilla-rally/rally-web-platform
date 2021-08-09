<script lang="ts">
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";
  import TermsContent from "$lib/views/terms/Content.svelte";

  const appIsInitialized = getContext("really:appIsInitialized");
  const isAuthenticated = getContext("rally:isAuthenticated");

  $: if ($isAuthenticated === false) {
    goto("/signup");
  }
</script>

{#if $isAuthenticated}
  <TermsContent />
{/if}