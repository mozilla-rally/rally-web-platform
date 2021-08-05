<script context="module">
    export const ssr = false;
</script>

<script>
import { getContext } from "svelte";
import { goto } from "$app/navigation";
const store = getContext("rally:store");
$: console.log($store);
$: if ($store._initialized && !$store?.user?.uid) {
    goto("/signup");
} else if ($store._initialized && $store.user?.uid) {
    goto("/studies");
} else {
    console.log('conditions not met.')
}
// redirect to /signup if the user is not signed in.
// If signed in but has not consented to Rally, redirect to consent.
// If signed in and has consented, redirect to /studies.
</script>