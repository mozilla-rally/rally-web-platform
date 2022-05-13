<script type="ts">
  import { onMount, getContext } from "svelte";
  import { fly } from "svelte/transition";
  import RallyNavbar from "$lib/layouts/main/Navbar.svelte";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";
  import Dropdown from "./_Dropdown.svelte"
  import isMounted from "$lib/is-mounted";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");
  const mounted = isMounted();
  let browser;
  let userEmail;
  let isFocused = false;
  let ariaExpanded = false;
  let ariaHidden = true;
  let dropDownVisible = false;
  let opacity;
  let visibility;

  onMount(async () => {
    userEmail = await store.getUserEmail();
    if (window) {
      browser = window.location;
    }
  });

  $: dropDownVisible === true ? (opacity = 1) : (opacity = 0);
  $: dropDownVisible === true ? (visibility = "visible") : (visibility = "hidden");
  $: cssVarStyles = `--opacity:${opacity}; --visibility:${visibility}`;

  const toggleDropdown = () => (dropDownVisible = !dropDownVisible);
  const onFocus = () => (isFocused = true);

  const handleLogOut = async () => {
    await store.signOutUser();
    browser.reload();
  };

  const toggleNavIcon = () => {
    ariaExpanded = !ariaExpanded;
    ariaHidden = !ariaHidden;
  };

  //fix signout hover
</script>

<RallyNavbar>
  <div class="top-nav-left" slot="top-nav-left">
    <div class="header__logo">
      <!-- rally logo -->
      <a class="header__logo-link" href="/" alt="">
        {#if $mounted}
          <img
            in:fly={{ duration: 800, x: -15 }}
            src="img/moz-rally-logo.svg"
            alt="Mozilla Rally Logo"
          />
        {/if}
      </a>
    </div>

    <div class="header__primary-nav">
      <ul class="primary-nav d-flex align-items-center">
        <li
          class="primary-nav__item"
          in:fly={{ duration: 800, delay: 200, x: -15 }}
        >
          <a
            href="/studies"
            class="nav-link nav-link--studies"
            sveltekit:prefetch>Current Studies</a
          >
        </li>
        <li
          class="primary-nav__item"
          in:fly={{ duration: 800, delay: 200, x: -15 }}
        >
          <a
            href="https://support.mozilla.org/en-US/kb/about-mozilla-rally"
            class="nav-link nav-link--support d-flex justify-content-between align-items-center"
            target="_blank">Support <ExternalLink /></a
          >
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile nav toggle-->
  <button
    on:click={toggleNavIcon}
    class="header__nav-toggle"
    type="button"
    data-expands="mobile-nav"
    data-expands-height
    aria-expanded={ariaExpanded}
    slot="toggle"
  >
    <span class="header__nav-toggle-icon" />
    <span class="is-active-hide" aria-label="Open navigation menu." />
    <span class="is-active-show" aria-label="Close navigation menu." />
  </button>

  <div
    on:focus={onFocus}
    on:click={toggleDropdown}
    class="header__dropdown"
    data-expands="drop-nav"
    data-expands-height
    aria-expanded={ariaExpanded}
    slot="user-icon"
  >
    <div class="dropdown__user-icon">
      <img class="user-icon__img" src="img/icon-profile.svg" alt="user icon" />
    </div>

    <!-- DESKTOP Dropdown-->
    <Dropdown  clazz = "desktop" {userEmail} {handleLogOut} {cssVarStyles}/>
  </div>


  <!-- Mobile menu dropdown -->
  <div
    id="mobile-nav"
    class="header__mobile-menu"
    aria-hidden={ariaHidden}
    slot="mobile-nav"
  >
    <nav class="nav-mobile" aria-label="Primary navigation">
      <Dropdown {toggleNavIcon} clazz="mobile" {userEmail} {handleLogOut} cssVarStyles={null} />
    </nav>
  </div>
</RallyNavbar>

<style>
  .top-nav-left {
    display: flex;
    justify-content: space-between;
    max-width: 580px;
    width: 100%;
  }

  .header__mobile-menu {
    max-height: 450px;
    height: 100%; 
  }
</style>
