<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RallyNavbar from "../../lib/layouts/main/Navbar.svelte";
  import { fly } from "svelte/transition";
  import isMounted from "../../lib/is-mounted";
  import ExternalLink from "../../lib/components/icons/ExternalLink.svelte";
  const mounted = isMounted();

  let dropdownList;
  let isFocused = false;

  const showDropdown = () => (dropdownList.style.display = "block");
  const hideDropdown = () => (dropdownList.style.display = "none");
  const onFocus = () => (isFocused = true);
</script>

<Meta title="Components/Layout/RallyNavbar" component={RallyNavbar} />

<Template>
  <RallyNavbar>
    <div class="header__logo" slot="logo-nav">
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

      <!-- main nav -->
      <nav class="header__nav" id="nav" aria-label="Primary navigation">
        <ul class="nav-list">
          <li class="nav-list__item">
            {#if $mounted}
              <a
                in:fly={{ duration: 800, delay: 200, x: -15 }}
                class="nav-list__link"
                href="#aboutrally"
                >About Rally <ExternalLink />
              </a>
            {/if}
          </li>

          <li class="nav-list__item external">
            {#if $mounted}
              <a
                in:fly={{ duration: 800, delay: 200, x: -15 }}
                class="nav-list__link"
                href="/studies"
                sveltekit:prefetch
              >
                Support <ExternalLink />
              </a>
            {/if}
          </li>

          <li class="nav-list__item external">
            {#if $mounted}
              <a
                in:fly={{ duration: 800, delay: 200, x: -15 }}
                class="nav-list__link"
                target="_blank"
                rel="noopener noreferrer"
                href="__BASE_SITE__/how-rally-works/faqs/"
                >FAQs <ExternalLink />
              </a>
            {/if}
          </li>
        </ul>
      </nav>
      <!-- main nav end -->

      <!-- mobile nav toggle -->
    </div>

    <div
      on:focus={onFocus}
      on:mouseover={showDropdown}
      class="header__dropdown"
      slot="user-icon"
    >
      <div class="dropdown__user-icon">
        <img src="img/user-solid.svg" alt="user icon" />
      </div>

      <ul on:mouseleave={hideDropdown} bind:this={dropdownList} class="dropdown-list">
        <li class="dropdown-list__item">
          <div class="list-item--info">
            <p>Signed in as</p>
            <p class="text-bold">example@example.com</p>
          </div>
        </li>
        <hr />
        <li class="dropdown-list__item">
          <a class="list-item list-item--profile" href="#profile">
            <img src="img/user-138.svg" alt="settings icon" />
            <div class="list-item__text">Manage Profile</div>
          </a>
        </li>
        <li class="dropdown-list__item">
          <a class="list-item list-item--profile" href="#studies">
            <img src="img/reader-mode.svg" alt="settings icon" />
            <div class="list-item__text">Studies</div>
          </a>
        </li>
        <li class="dropdown-list__item">
          <a class="list-item list-item--settings" href="#settings">
            <img src="img/settings.svg" alt="settings icon" />
            <div class="list-item__text">Account Settings</div></a
          >
        </li>
        <li class="dropdown-list__item">
          <button class="list-item list-item--quit">
            <img src="img/quit.svg" alt="quit icon" />
            <div class="list-item__text">Sign Out</div></button
          >
        </li>
      </ul>
    </div>
  </RallyNavbar>
</Template>

<Story name="RallyNavbar" />
