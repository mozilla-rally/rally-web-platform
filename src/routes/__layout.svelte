<script lang="ts">
import { setContext, onMount } from 'svelte';
import Layout from "$lib/layouts/main/Layout.svelte";
import Button from '$lib/Button.svelte';
import Sidebar from "./_Sidebar.svelte";
import ContentContainer from "$lib/layouts/main/ContentContainer.svelte";
import NotificationCenter from "$lib/notification/NotificationCenter.svelte";
import { store, isAuthenticated } from "../lib/stores/app-store";
import isMounted from "$lib/is-mounted";
import profileCompletionStatus from "../lib/stores/profile-completion-status";
import notifications from "../lib/notification";

// Here is where we set all the stores needed
setContext("rally:store", store);
setContext("rally:profileCompletionStatus", profileCompletionStatus);
setContext("rally:notifications", notifications);
setContext("rally:isAuthenticated", isAuthenticated);

let leaveModal = false;
let Dialog;

onMount(async () => {
    Dialog = (await import("../lib/Dialog.svelte")).default;
});

const mounted = isMounted();
</script>

{#if $isAuthenticated}
<Layout>
    <Sidebar 
        on:change-view 
        on:leave-rally={() => {
        leaveModal = true;
    }} />
    <ContentContainer>
        {#if $store._initialized}
            <slot />
        {/if}
    </ContentContainer>
</Layout>
{:else}
    <slot />
{/if}

{#if leaveModal && $mounted && Dialog}
    <Dialog width="var(--content-width)" on:dismiss={() => { leaveModal = false; }}>
    <div slot="title">Before You Go…</div>
    <div class='split-content-modal' slot="body" style="margin-bottom: 24px; box-sizing: content-box;">
    <div style="width: 368px;">
        <p style="padding-top: 20px;">
        Thanks for helping make the internet just a little bit better. For your reference, leaving Rally means that:
        </p>
        <ul class="mzp-u-list-styled bigger-gap" style="padding-right: 36px;">
        <li>We will <b>no longer collect any data</b> for our platform or studies</li>
        <li>You will be <b>removed from any studies</b> you're currently participating in</li>
        <li>We will <b>delete any demographic information</b> you've shared with us</li>
        <li>If you are currently enrolled in an open study, we will <b>delete all data</b> we've collected through that study to date. However, researchers may still retain access to data you've contributed to <b>completed studies</b>.</li>
        <li>We will <b>uninstall and remove the Rally add-on</b>, and any associated study add-ons that you may have installed.</li>
        </ul> 
    </div>
    <img style="width: 270px; padding-top: 40px; transform: translateX(-24px);" src="img/before-you-go.png" alt="person walking through exit door" />
    </div>
    <div class='modal-call-flow' slot="cta">
        <Button
        size="lg"
        product
        leave
        on:click={() => {
            leaveModal = false;
            // FIXME: add leave rally code
        }}>
        Leave Rally
        </Button>
        <Button
        size="lg"
        product
        secondary
        on:click={() => {
            leaveModal = false;
        }}>
        Cancel
        </Button>
    </div>
    </Dialog>
{/if}

<NotificationCenter sidebarOffset />