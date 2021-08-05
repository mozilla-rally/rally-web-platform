<script context="module">
    export const ssr = false;
</script>

<script lang="ts">
import { getContext }  from "svelte";
import { goto } from "$app/navigation";
import TermsContent from "$lib/views/Terms.svelte";
import TermsCallToAction from "./_TermsCallToAction.svelte";

const store = getContext("rally:store");

// if the user has already consented, redirect to /studies.
// if the user has not consented, then we're still in onboarding.
$: if ($store._initialized && $store?.user?.uid && $store?.user?.enrolled) {
    // move to the profile page if already agreed to the terms.
    goto("/welcome/profile");
}

</script>

<TermsContent />
<TermsCallToAction
    on:accept={async () => {
        await store.updatePlatformEnrollment(true);
        await store.updateOnboardedStatus(true);
    }}
/>
