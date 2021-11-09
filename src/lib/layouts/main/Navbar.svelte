<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import isMounted from "../../../lib/is-mounted";
  // Scroll animation library
  import sal from "sal.js";
  import "/node_modules/sal.js/dist/sal.css";

  const mounted = isMounted();
  const scrollAnimations = sal();

  if (mounted) {
    scrollAnimations.enable();
  }

</script>

<div
  class="header-wrapper sal-animate"
  data-sal="fade"
  data-sal-delay="0"
  data-sal-duration="200"
  data-sal-once
>
  <slot name="logo-nav" />
  <slot name="signup-login" />
</div>

<style>
  .header-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    /* max-width: 77.25rem;  */
  }

  @media screen and (min-width: 64.125em) {
    .header-wrapper {
      flex-wrap: nowrap;
    }
  }
</style>
