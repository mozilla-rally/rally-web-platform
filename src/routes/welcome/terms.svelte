<script context="module">
    export const ssr = false;
</script>

<script lang="ts">
import { getContext }  from "svelte";
import { goto } from "$app/navigation";
import Terms from "$lib/views/terms/Content.svelte";
import TermsCTA from "$lib/views/terms/TermsCallToAction.svelte";
import OnboardingCTAContainer from "$lib/OnboardingCTAContainer.svelte";

const store = getContext("rally:store");

// if the user has already consented, redirect to /terms.
// if the user has not consented, then we're still in onboarding.
$: if ($store._initialized && $store?.user?.uid && $store?.user?.enrolled) {
    // move to the profile page if already agreed to the terms.
    goto("/welcome/profile");
}

</script>

<Terms />
<OnboardingCTAContainer>
    <TermsCTA
        on:accept={async () => {
            await store.updatePlatformEnrollment(true);
            // goto('/welcome/profile');
        }}
    />
</OnboardingCTAContainer>