<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RallyNavbar from "../../lib/layouts/main/Navbar.svelte";
  import { fly } from "svelte/transition";
  import isMounted from "../../lib/is-mounted";
  // import RallyLogo from "../../lib/components/RallyLogo.svelte";
  import Button from "../../lib/components/Button.svelte";
  import "./RallyNavbar.css";
  //import { page } from '$app/stores';
  const mounted = isMounted();

  let ariaExpanded = false;
  let ariaHidden = true;
  let isOpaque = false;
  let navOpacity = 0;

  const toggleNavIcon = () => {
    ariaExpanded = !ariaExpanded;
    ariaHidden = !ariaHidden;
    isOpaque = !isOpaque;
    checkOpacity();
  };

  const checkOpacity = () => {
    isOpaque ? (navOpacity = 1) : (navOpacity = 0);
  };

  $: cssVarStyles = `--nav-opacity:${navOpacity}`;
</script>

<Meta title="Components/RallyNavbar" component={RallyNavbar} />

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

        <!-- main nav -->
        <div
          class="navbar-nav"
          id="nav"
          aria-hidden={ariaHidden}
          style={cssVarStyles}
        >
          <nav class="nav" aria-label="Primary navigation">
            <ul class="nav-list">
              <li
                class="nav-item"
                in:fly={{ duration: 800, delay: 200, x: -15 }}
              >
                <a
                  class="nav-link external"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.mozilla.org/en-US/kb/about-mozilla-rally"
                  >How Rally Works
                </a>
              </li>

              <li
                class="nav-item"
                in:fly={{ duration: 800, delay: 200, x: -15 }}
              >
                <a class="nav-link" href="/studies" sveltekit:prefetch>
                  Current Studies
                </a>
              </li>

              <li
                class="nav-item"
                in:fly={{ duration: 800, delay: 200, x: -15 }}
              >
                <a
                  class="nav-link external"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="__BASE_SITE__/how-rally-works/faqs/"
                  >About Us
                </a>
              </li>
              <li class="nav-item nav-sign-up">
                <div class="nav-btns sign-in-up">
                  <Button
                    customControl={true}
                    borderColor="transparent"
                    textColor="#000000"
                    background="#ffffff"
                    custom={"btn-sign-in-up sign-in"}
                    size={"lg"}
                    neutral={true}>Sign in</Button
                  >
                  <Button custom={"btn-sign-in-up create"} size={"lg"}
                    >Create Account</Button
                  >
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <!-- main nav end -->

        <!-- mobile nav toggle -->
        <button
          on:click={toggleNavIcon}
          class="header-navToggle btn"
          type="button"
          data-expands="nav"
          data-expands-height
          aria-expanded={ariaExpanded}
        >
          <span class="header-navToggle-icon" />
          <span class="is-active-hide" aria-label="Open navigation menu." />
          <span class="is-active-show" aria-label="Close navigation menu." />
        </button>
      </div>

      <!-- signin create-->
      <div class="sign-in-up" slot="signup-login">
        <Button
          customControl={true}
          borderColor="transparent"
          textColor="#000000"
          background="#ffffff"
          custom={"btn-sign-in-up sign-in"}
          size={"lg"}
          neutral={true}>Sign in</Button
        >
        <Button custom={"btn-sign-in-up create"} size={"lg"}
          >Create Account</Button
        >
      </div>
    </RallyNavbar>
  </header>
</Template>

<Story name="RallyNavbar" />

<style>
  a {
    text-decoration: none;
    color: black;
  }

  .header {
    padding-bottom: 1.125rem;
    padding-top: 1.125rem;
  }

  .header-navToggle {
    display: block;
  }

  .header-logo-nav {
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 1.0625rem;
    padding-right: 1.0625rem;
    position: relative;
    z-index: 901;
  }

  .header-logo-link {
    max-width: 9.125rem;
  }

  .header-logo-link img {
    display: block;
    width: 100%;
  }

  .nav {
    padding: 0.9375rem 1.0625rem 1.1875rem;
  }

  .navbar-nav {
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 8px 12px 1px rgb(29 17 51 / 4%),
      0 20px 16px 2px rgb(9 32 77 / 12%), 0 5px 10px -3px rgb(29 17 51 / 12%);
    left: 0;
    max-height: 315px;
    overflow: hidden;
    position: absolute;
    /* opacity: var(--nav-opacity); */
    top: 42px;
    visibility: visible;
    width: 100%;
    z-index: 900;
  }

  .navbar-nav[aria-hidden="true"] {
    transition: max-height 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
      visibility 0s linear 0.4s;
    max-height: 0 !important;
  }

  .navbar-nav[aria-hidden="false"] {
    transition: max-height 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
      visibility 0s linear 0s;
    visibility: visible;
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-list li {
    margin-right: 0;
  }

  .nav-list a {
    transition: all 0.15s ease-in-out;
  }

  .nav-link,
  .nav-btns {
    font-weight: 700;
    font-size: 1.125rem;
    border-top: 1px solid #e7e5e2;
    display: block;
    font-size: 1.125rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .nav-sign-up {
    display: block;
  }

  .sign-in-up {
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 32px;
  }

  .nav-btns {
    justify-content: center;
  }

  /* queries */
  /* --mobile: 20em; 
  --tablet: 43em; 
  --desktop: 64.125em;
  --large-screen: 82em; */

  /* min-width of 1026px */
  @media screen and (min-width: 64.125em) {
    .header {
      padding: 2rem 2.5rem;
    }

    .header-navToggle {
      display: none;
    }
    .header-logo-nav {
      width: auto;
      flex-direction: row;
      align-items: center;
      padding-left: 0;
    }

    .nav {
      padding: unset;
    }

    .navbar-nav {
      margin-left: 0;
      margin-left: 4.625rem;
      max-height: 315px;
      background-color: unset;
      border-radius: unset;
      box-shadow: unset;
      left: auto;
      overflow: auto;
      position: unset;
      /* opacity: 1; */
      width: auto;
      z-index: auto;
    }

    .navbar-nav[aria-hidden="true"] {
      max-height: unset !important;
    }

    .nav-list {
      align-items: center;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-list li {
      margin-right: 2.5rem;
      line-height: 1.2;
    }

    .nav-link {
      border-top: unset;
      display: block;
      padding-bottom: unset;
      padding-top: unset;
    }

    .nav-sign-up {
      display: none;
    }
    .sign-in-up {
      margin: 0;
      padding-top: 0;
      position: relative;
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 40em) {
    .header-logo-link {
      max-width: 12.75rem;
    }
  }
</style>
