<script lang="ts">
  import { getContext } from "svelte";
  import TermsContent from "$lib/views/terms/Content.svelte";
  import redirectFromMainViewIfNeeded from "../_redirect-from-main-view-if-needed";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");
  const isAuthenticated :Readable<boolean> = getContext("rally:isAuthenticated");

  $: redirectFromMainViewIfNeeded($isAuthenticated, $store._initialized, !$store?.user?.enrolled);

</script>

<svelte:head>
    <title>Privacy Policy | Mozilla Rally</title>
</svelte:head>

{#if $isAuthenticated}
  <TermsContent />
{/if}