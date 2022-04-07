<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
</script>

<header class="header mzp-c-navigation">
  <div class="mzp-c-navigation-l-content header__content">
    <div class="mzp-c-navigation-container header__container">
      <slot name="logo-nav" />
      <slot name="toggle" />
      <slot name="user-icon" />
    </div>
    <slot name="mobile-nav"/>
  </div>
</header>

<style>
  /* .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
  } */

  

  /* @media screen and (max-width: 688px) {
    .header__content {
      padding: 25px 15px 15px;
    }
  } */
</style>
