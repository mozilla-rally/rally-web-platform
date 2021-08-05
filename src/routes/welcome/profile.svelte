<script context="module">
    export const ssr = false;
</script>

<script lang="ts">
import { getContext }  from "svelte";
import { goto } from "$app/navigation";
import ProfileContent from "$lib/views/Profile.svelte";
import ProfileCallToAction from "./_ProfileCallToAction.svelte";
const store = getContext("rally:store");

let formattedResults;

</script>

<ProfileContent bind:formattedResults />
<ProfileCallToAction
    on:save={async () => {
        // Submit Demographics here.
        await store.updateDemographicSurvey(formattedResults);
        // move to the main view.
        goto("/studies");
        }}
    on:skip={async () => {
        goto("/studies")
    }}
/>