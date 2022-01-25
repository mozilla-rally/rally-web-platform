<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
</script>

<header class="header">
  <slot name="logo-nav" />
  <slot name="user-icon" />
</header>

<style>
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    overflow: hidden;
  }
</style>
