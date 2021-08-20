<script lang="ts">
import { getContext } from "svelte";
import { goto } from "$app/navigation";
import StudiesContent  from "$lib/views/studies/Content.svelte";

import type { Readable } from "svelte/store";
import type { AppStore } from "$lib/stores/types";
import type { NotificationStore } from "$lib/components/notifications"

const store: AppStore = getContext("rally:store");
const isAuthenticated :Readable<boolean> = getContext("rally:isAuthenticated");
const notifications: NotificationStore = getContext("rally:notifications");

function joinStudy(studyID) { 
    store.updateStudyEnrollment(studyID, true); 
    notifications.send({code: "SUCCESSFULLY_JOINED_STUDY"}); 
}
function leaveStudy(studyID) { 
    store.updateStudyEnrollment(studyID, false); 
    notifications.send({code: "SUCCESSFULLY_LEFT_STUDY"}); 
}

$: if ($isAuthenticated === false) {
    goto("/signup");
}
$: if ($store._initialized) {
    if (!$store?.user?.uid) {
        goto("/signup");
    } else if (!$store?.user?.enrolled) {
        goto("/welcome/terms");
    }
}

</script>

<svelte:head>
    <title>Studies | Mozilla Rally</title>
</svelte:head>

{#if $store._initialized}
    {#if $store.studies}
        <StudiesContent
            sidebarOffset
            studies={$store.studies}
            userEnrollment={$store.user?.enrolledStudies || {}}
            on:cta-clicked={() => {
                notifications.clear();
            }}
            on:join-study={(evt) => { joinStudy(evt.detail); }}
            on:leave-study={(evt) => { leaveStudy(evt.detail); }}
        />
    {/if}
{/if}