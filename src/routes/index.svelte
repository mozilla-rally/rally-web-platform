<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");
  const isAuthenticated: Readable<boolean> = getContext(
    "rally:isAuthenticated"
  );

  onMount(async () => {
    isAuthenticated.subscribe((state) => {
      if (state === false) {
        localStorage.removeItem("isLoading");
        goto(`/signup?${$page.query.toString()}`);
      }
    });
  });

  $: if ($isAuthenticated !== undefined && $store._initialized) {
    if ($store?.user?.uid) {
      if (!$store?.user?.enrolled) {
        goto(`/welcome/terms?${$page.query.toString()}`);
      } else {
        goto(`/studies?${$page.query.toString()}`);
      }
    }
  }
</script>
