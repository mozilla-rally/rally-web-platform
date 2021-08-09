<script lang="ts">
  import { getContext } from "svelte";
  import TermsContent from "$lib/views/terms/Content.svelte";
  const isAuthenticated = getContext("rally:isAuthenticated");
  $: if ($isAuthenticated === false) {
    goto("/signup");
  }
</script>



<TermsContent />
