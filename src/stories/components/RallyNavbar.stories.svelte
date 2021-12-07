<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RallyNavbar from "../../lib/layouts/main/Navbar.svelte";
  import Footer from "../../lib/layouts/main/Footer.svelte"
  import { fly } from "svelte/transition";
  import isMounted from "../../lib/is-mounted";
  import "./css/RallyNavbar.css"
  import "./css/RallyFooter.css"
  const mounted = isMounted();

  let dropdownList;
  let isFocused = false;

  const showDropdown = () => (dropdownList.style.display = "block");
  const hideDropdown = () => (dropdownList.style.display = "none");
  const onFocus = () => (isFocused = true);
</script>

<Meta title="Components/Layout/RallyNavbar" component={RallyNavbar} />

<Template>
  <header class="header">
    <RallyNavbar>
      <div class="header-logo-nav" slot="logo-nav">
        <!-- rally logo -->
        <a class="header-logo-link" href="/" alt="">
          {#if $mounted}
            <h1 in:fly={{ duration: 800, x: -15 }}>
              <img src="img/moz-rally-logo.svg" alt="Mozilla Rally Logo" />
            </h1>
          {/if}
        </a>
      </div>

      <div
        on:focus={onFocus}
        on:click={showDropdown}
        on:mouseleave={hideDropdown}
        class="nav-dropdown"
        slot="user-icon"
      >
        <div class="dropdown-icon">
          <div class="user-icon">
            <img src="img/user-solid.svg" alt="user icon" />
          </div>
          <div class="arrow-down">
            <img src="img/arrowhead-down.svg" alt="arrowdown" />
          </div>
        </div>

        <ul bind:this={dropdownList} class="dropdown-list">
          <li><a href="#">Studies</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><button>Log out</button></li>
        </ul>
      </div>
    </RallyNavbar>
  </header>
 
</Template>

<Story name="RallyNavbar" />

<style>
  .nav-dropdown:hover .dropdown-list {
    display: block;
  }
</style>
