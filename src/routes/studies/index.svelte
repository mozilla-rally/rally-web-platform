<script lang="ts">
import { getContext } from "svelte";
import StudiesContent  from "$lib/views/studies/Content.svelte";

import type { Readable } from "svelte/store";
import type { AppStore } from "$lib/stores/types";
import type { NotificationStore } from "$lib/components/notifications";
import redirectFromMainViewIfNeeded from "../_redirect-from-main-view-if-needed";

const store: AppStore = getContext("rally:store");
const isAuthenticated :Readable<boolean> = getContext("rally:isAuthenticated");
const notifications: NotificationStore = getContext("rally:notifications");

function joinStudy(studyId) { 
    store.updateStudyEnrollment(studyId, true);
    notifications.send({code: "SUCCESSFULLY_JOINED_STUDY"});
}
function leaveStudy(studyId) {
    store.updateStudyEnrollment(studyId, false);
    notifications.send({code: "SUCCESSFULLY_LEFT_STUDY"});
}

$: redirectFromMainViewIfNeeded($isAuthenticated, $store._initialized, !$store?.user?.enrolled);

</script>

<svelte:head>
    <title>Studies | Mozilla Rally</title>
</svelte:head>

{#if $isAuthenticated && $store._initialized}
    {#if $store.studies}
        <StudiesContent
            sidebarOffset
            studies={$store.studies}
            userStudies={$store.userStudies || {}}
            on:cta-clicked={() => {
                notifications.clear();
            }}
            on:join-study={(evt) => { joinStudy(evt.detail); }}
            on:leave-study={(evt) => { leaveStudy(evt.detail); }}
        />
    {/if}
{/if}