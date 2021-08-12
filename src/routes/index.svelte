<script>
import { getContext } from "svelte";
import { goto } from "$app/navigation";
const store = getContext("rally:store");
const isAuthenticated = getContext("rally:isAuthenticated")

$: if ($isAuthenticated !== undefined && $store._initialized) {
    if ($isAuthenticated === false) {
        goto("/signup");
    } else if ($store?.user?.enrolled) {
        goto("/studies");
    } else {
        goto("/welcome/terms");
    }
}

</script>