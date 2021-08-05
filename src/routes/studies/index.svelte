<script context="module">
    export const ssr = false;
</script>

<script lang="ts">
import { getContext } from "svelte";
import { goto } from "$app/navigation";
import StudiesContent  from "$lib/views/studies/Content.svelte";
import StudyBackgroundElement from '$lib/layouts/StudyBackgroundElement.svelte';
const notification = getContext("rally:notification");

const store = getContext("rally:store");

function joinStudy(studyID) { 
    store.updateStudyEnrollment(studyID, true); 
    //notification.send({code: "SUCCESSFULLY_JOINED_STUDY"}); 
}
function leaveStudy(studyID) { 
    store.updateStudyEnrollment(studyID, false); 
    //notification.send({code: "SUCCESSFULLY_LEFT_STUDY"}); 
}

$: if ($store._initialized) {
    if (!$store?.user?.uid) {
        goto("/signup");
    } else if (!$store?.user?.enrolled) {
        goto("/welcome/terms");
    }
}

</script>
{#if $store._initialized}
    {#if $store.studies}
            <StudyBackgroundElement>
                <StudiesContent
                    sidebarOffset
                    studies={$store.studies}
                    userEnrollment={$store.user?.enrolledStudies || {}}
                    on:cta-clicked={() => {
                        //notification.clear();
                    }}
                    on:join-study={(evt) => { joinStudy(evt.detail); }}
                    on:leave-study={(evt) => { leaveStudy(evt.detail); }}
                />
            </StudyBackgroundElement>
    {/if}
{/if}