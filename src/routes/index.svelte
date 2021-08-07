<script context="module">
    export const ssr = false;
</script>

<script>
import { getContext } from "svelte";
import { goto } from "$app/navigation";
const store = getContext("rally:store");
const isAuthenticated = getContext("rally:isAuthenticated")
$: console.log($store);
$: if (!$isAuthenticated) {
    goto("/signup");
} else if ($isAuthenticated && $store._initialized) {
    goto("/studies");
}
// redirect to /signup if the user is not signed in.
// If signed in but has not consented to Rally, redirect to consent.
// If signed in and has consented, redirect to /studies.
</script>