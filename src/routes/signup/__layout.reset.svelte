<script lang="ts">
    import { setContext } from "svelte";
    import Layout from "$lib/layouts/onboarding/Layout.svelte";
    import { store, isAuthenticated } from "$lib/stores/app-store";
    setContext("rally:store", store);
    setContext("rally:isAuthenticated", isAuthenticated);
</script>

<svelte:head>
    <title>Sign Up | Mozilla Rally</title>
</svelte:head>

<Layout>
    <slot />
</Layout>
