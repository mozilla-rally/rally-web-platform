import { goto } from "$app/navigation";

export default function redirectFromMainViewIfNeeded(authenticationStatus, initializationStatus, enrolledStatus) {
    if (authenticationStatus === false) {
        goto("/signup");
    } else if (initializationStatus) {
        if (enrolledStatus) {
            goto("/welcome/terms");
        }
    }
}