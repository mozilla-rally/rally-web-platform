<script lang="ts">
    import { setContext } from "svelte";
    import Layout from "$lib/layouts/onboarding/Layout.svelte";
    import ContentContainer from "$lib/layouts/onboarding/ContentContainer.svelte";
    import { store, isAuthenticated } from "$lib/stores/app-store";
    setContext("rally:store", store);
    setContext('rally:isAuthenticated', isAuthenticated);
</script>

<Layout>
    <ContentContainer padForOnboarding>
        <slot />
    </ContentContainer>
</Layout>