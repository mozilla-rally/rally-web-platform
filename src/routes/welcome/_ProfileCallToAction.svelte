<script lang="ts">
import OnboardingCallToActionContainer from "$lib/layouts/onboarding/CallToActionContainer.svelte";

import { createEventDispatcher } from "svelte";
import { fade, fly } from "svelte/transition";
import Arrow02 from "$lib/Arrow02.svelte";
import Button from "$lib/Button.svelte";

const dispatch = createEventDispatcher();

let scrollY = 0;

let showArrow = true;
$: if (scrollY > 20) {
    showArrow = false;
} else {
    showArrow = true;
}

let intro = false;
</script>

<style>
.call-flow {
    grid-template-columns: max-content max-content auto 0;
}

.arrow {
    width: 0;
    height: 0;
    display: inline-block;
    transform: translateY(-129px);
}
</style>

<svelte:window bind:scrollY />

<OnboardingCallToActionContainer>
<div
    class="call-flow"
    in:fly={{ duration: 200, y: 5 }}
    on:introend={() => {
        intro = true;
}}>
    <Button size="xl" product on:click={() => dispatch('save')}>
        Save & Continue
    </Button>
    <Button size="xl" product secondary on:click={() => dispatch('skip')}>
        Skip for Now
    </Button>
    {#if showArrow && intro}
        <div
        transition:fade|local={{ duration: 400 }}
        class="shortcut-callout"
        style="text-align: right;">
        the following 7<br/> questions are optional
        </div>
        <div class="arrow">
        <Arrow02 />
        </div>
    {/if}
</div>
</OnboardingCallToActionContainer>
