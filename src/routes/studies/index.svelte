<script context="module">
    export const ssr = false;
</script>

<script lang="ts">
import { getContext } from "svelte";
import { goto } from "$app/navigation";

const store = getContext("rally:store");
$: if ($store._initialized) {
    if (!$store?.user?.uid) {
        goto("/signup");
    } else if (!$store?.user?.enrolled) {
        goto("/welcome/terms");
    }
}
</script>

Welcome to the studies page!!!!
