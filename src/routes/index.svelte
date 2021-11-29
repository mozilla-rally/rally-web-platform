<script lang="ts">
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");
  const isAuthenticated: Readable<boolean> = getContext(
    "rally:isAuthenticated"
  );

  $: if ($isAuthenticated !== undefined && $store._initialized) {
    if ($isAuthenticated === false) {
      goto("/signup");
    } else if ($store?.user?.enrolled) {
      goto("/studies");
    } else {
      goto("/welcome/terms");
    }
  }
</script>
