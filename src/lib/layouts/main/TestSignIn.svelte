<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { fly } from "svelte/transition";
</script>

<div class="mzp-c-call-out">
  <div class="mzp-l-content" in:fly={{ duration: 800, y: 5 }}>
    <h2
      class="mzp-c-call-out-title mzp-has-zap-1"
      in:fly={{ duration: 800, y: 5 }}
    >
      <img src="img/logo-wide.svg" alt="Mozilla Rally Logo" />
    </h2>

    <p
      class="mzp-c-call-out-desc"
      style="color: var(--color-marketing-gray-70);
  "
    >
      This is a feasibility spike exploring a web-based Rally user experience.
    </p>
  </div>
</div>

<style>
  .mzp-c-call-out {
    background-color: transparent;
    padding: 0;
  }

  .mzp-l-content {
    padding-left: 0;
    padding-right: 0;
    /* this is Main + required padding to meet 120px */
    padding-top: 80px;
  }

  .mzp-c-call-out-title {
    margin-bottom: 12px;
  }
</style>
