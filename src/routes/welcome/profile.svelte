<script context="module">
    export const ssr = false;
</script>

<script lang="ts">
import { getContext }  from "svelte";
import { goto } from "$app/navigation";
import Profile from "$lib/views/profile/Content.svelte";
import ProfileCTA from "$lib/views/profile/CallToAction.svelte";
import OnboardingCTAContainer from "$lib/OnboardingCTAContainer.svelte";

const store = getContext("rally:store");

let formattedResults;

</script>

<Profile />
<OnboardingCTAContainer>
    <ProfileCTA
    on:save={async () => {
        // Submit Demographics here.
        await store.updateDemographicSurvey(formattedResults);
        // move to the main view.
        goto("/studies");
      }}
      on:skip={() => goto("/studies")}
    />
</OnboardingCTAContainer>