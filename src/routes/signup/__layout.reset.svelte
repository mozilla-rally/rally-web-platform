<script lang="ts">
  import { setContext } from "svelte";
  import Layout from "$lib/layouts/onboarding/Layout.svelte";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte"
  import { isAuthenticated, store } from "$lib/stores/app-store";
  setContext("rally:store", store);
</script>

<svelte:head>
  <title>Sign Up | Mozilla Rally</title>
</svelte:head>
<Navbar isAuthenticated = {false} />
<Layout>
  <slot />
</Layout>
<Footer/> 
