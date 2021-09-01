<script>
    /* This Source Code Form is subject to the terms of the Mozilla Public
    * License, v. 2.0. If a copy of the MPL was not distributed with this
    * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
    import notification from '.';
    import SuccessfullyJoinedStudyNotification from "./SuccessfullyJoinedStudyNotification.svelte";
    import SuccessfullyLeftStudyNotification from "./SuccessfullyLeftStudyNotification.svelte";
    import SuccessfullyUpdatedProfileNotification from "./SuccessfullyUpdatedProfileNotification.svelte";
    
    export let sidebarOffset = false;
    const messages = {
        SUCCESSFULLY_JOINED_STUDY: SuccessfullyJoinedStudyNotification,
        SUCCESSFULLY_LEFT_STUDY: SuccessfullyLeftStudyNotification,
        SUCCESSFULLY_UPDATED_PROFILE: SuccessfullyUpdatedProfileNotification
    }
    </script>
