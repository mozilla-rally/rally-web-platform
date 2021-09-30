<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RallyNavbar from "../../lib/layouts/main/Navbar.svelte";
  import { fly } from "svelte/transition";
  import isMounted from "../../lib/is-mounted";
  import RallyLogo from "../../lib/components/RallyLogo.svelte";
  import Button from "../../lib/components/Button.svelte";
  import "./RallyNavbar.css";
  import { derived } from "svelte/store";
  //import { page } from '$app/stores';
  const mounted = isMounted();
</script>

<Meta title="RallyNavbar" component={RallyNavbar} />

<Template>
  <header class="navbar">
    <RallyNavbar>
      <div class="navbar-header-nav" slot="header-navigation">
        <a class="header-logo-link" href="/" alt="">
          {#if $mounted}
            <h1 in:fly={{ duration: 800, x: -15 }}>
              <img src="img/moz-rally-logo.svg" alt="Mozilla Rally Logo" />
            </h1>
          {/if}
        </a>
        <div class="navbar-nav" id="nav">
          <nav aria-label="Primary navigation">
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
            </ul>
          </nav>
        </div>
      </div>

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

  .navbar {
    background-color: #f2f2f2f2;
    padding: 2rem 2.5rem;
  }

  .navbar-header-nav {
    display: flex;
  }

  .header-logo-link {
    max-width: 12.75rem;
  }

  .header-logo-link img {
    display: block;
    width: 100%;
  }

  .navbar-nav {
    margin-left: 4.625rem;
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
  }

  .nav-list a {
    transition: all 0.15s ease-in-out;
  }

  .nav-link {
    font-weight: 700;
    font-size: 1.125rem;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .sign-in-up {
    display: flex;
    justify-content: space-between;
    margin-left: 1.5rem;
  }
</style>
