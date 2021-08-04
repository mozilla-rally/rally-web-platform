<script lang="ts">
    import Layout from "$lib/layouts/OnboardingLayout.svelte";
    import Content from "$lib/layouts/OnboardingBody.svelte"
</script>

<Layout>
    <Content padForOnboarding>
        <slot />
    </Content>
</Layout>