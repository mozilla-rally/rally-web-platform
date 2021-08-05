<script lang="ts">
    import { setContext } from "svelte";
    import Layout from "$lib/layouts/onboarding/Layout.svelte";
    import { store } from "$lib/stores/app-store";
    setContext("rally:store", store);
</script>

<Layout>
    <slot />
</Layout>
