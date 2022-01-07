<script>
    /* This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  
    import Notification from "./NotificationElement.svelte";
    import Alert from "../icons/Alert.svelte";
    export let xOffset;
    export let location = "top";
    let level = "alert"
  </script>
  
  <Notification {location} {xOffset} {level}>
    <span style="display: contents;" slot="icon">
      <Alert />
    </span>
    <span slot="body">Confirm your new email address to save your changes</span>
  </Notification>