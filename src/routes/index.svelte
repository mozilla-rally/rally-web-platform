<script context="module">
    export const ssr = false;
</script>
<script>
import { getContext } from "svelte";
import { goto } from "$app/navigation";
const store = getContext("rally:store");
const isAuthenticated = getContext("rally:isAuthenticated")

/** 
 * auth = false -> signup
 * auth true, user not enrolled -> terms
 * auth true, user enrolled -> studies
*/


$: if ($isAuthenticated !== undefined && $store._initialized) {
    if ($isAuthenticated === false) {
        goto("/signup");
    } else if ($store?.user?.enrolled) {
        goto("/studies");
    } else {
        goto("/welcome/terms");
    }
}
// redirect to /signup if the user is not signed in.
// If signed in but has not consented to Rally, redirect to consent.
// If signed in and has consented, redirect to /studies.

</script>