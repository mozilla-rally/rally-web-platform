<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { goto } from "$app/navigation";

  import type { Readable } from "svelte/store";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");
  const isAuthenticated: Readable<boolean> = getContext(
    "rally:isAuthenticated"
  );

  onMount(async () => {
    const getApps = (await import("firebase/app")).getApps;
    const analytics = (await import("firebase/analytics")).getAnalytics();
    const logEvent = (await import("firebase/analytics")).logEvent;

    if (getApps().length === 0) {
      const initializeApp = (await import("firebase/app")).initializeApp;
      const request = await fetch("/firebase.config.json");
      const firebaseConfig = await request.json();

      initializeApp(firebaseConfig);
    }

    // Ensure page_view is logged for index page
    // in order to capture attribution codes
    logEvent(analytics, "page_view");

    isAuthenticated.subscribe((state) => {
      if (state === false) {
        goto("/signup");
        localStorage.removeItem("isLoading");
      }
    });
  })

  $: if ($isAuthenticated !== undefined && $store._initialized) {
    if (!$store?.user?.uid) {
      goto("/signup");
      localStorage.removeItem("isLoading");
    } else if (!$store?.user?.enrolled) {
      goto("/welcome/terms");
    }else{
      goto ("/studies")
    }
  }
</script>
