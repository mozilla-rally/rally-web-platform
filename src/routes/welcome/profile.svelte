<script context="module">
    export const ssr = false;
</script>
<script lang="ts">
import { getContext }  from "svelte";
import { goto } from "$app/navigation";
import ProfileContent from "$lib/views/profile/Content.svelte";
import ProfileCallToAction from "./_ProfileCallToAction.svelte";
const store = getContext("rally:store");
const isAuthenticated = getContext("rally:isAuthenticated");

$: if ($isAuthenticated === false) {
    goto("/signup");
} else if ($isAuthenticated === true && $store?.user?.onboarded) {
    goto("/studies");
}

let formattedResults;

function onAction(saveData = false) {
    return async () => {
        if (saveData) {
            await store.updateDemographicSurvey(formattedResults);
        }
        await await store.updateOnboardedStatus(true);
        goto("/studies");
    }
}

</script>

{#if $isAuthenticated === true && $store._initialized && (!$store?.user?.onboarded)}
    <ProfileContent bind:formattedResults />
    <ProfileCallToAction
        on:save={onAction(true)}
        on:skip={onAction(false)}
    />
{/if}