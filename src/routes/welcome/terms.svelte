<script context="module">
    export const ssr = false;


</script>
<script lang="ts">
import { getContext }  from "svelte";
import { goto } from "$app/navigation";
import TermsContent from "$lib/views/terms/Content.svelte";
import TermsCallToAction from "./_TermsCallToAction.svelte";

const store = getContext("rally:store");

const isAuthenticated = getContext("rally:isAuthenticated");

$: if ($isAuthenticated === false) {
    goto("/signup");
}

</script>

{#if $isAuthenticated === true}
    <TermsContent />
    <TermsCallToAction
        on:accept={async () => {
            await store.updatePlatformEnrollment(true);

            goto("/welcome/profile");
        }}
    />
{/if}