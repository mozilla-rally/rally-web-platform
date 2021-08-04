<script lang="ts">
    import { setContext } from "svelte";
    import { createAppStore } from "../lib/stores/app-store";
    const store = createAppStore();
    setContext("rally:store", store);
</script>

<slot />