const port = chrome.runtime.connect();
port.onMessage.addListener(message => {
    console.debug(message);
    document.getElementById("logins").style.display = "none";
    document.getElementById("error").textContent = "";
    document.getElementById("result").textContent = "";

    if ("error" in message) {
        document.getElementById("error").textContent = message.error;
    } else if ("result" in message) {
        document.getElementById("result").textContent = message.result;
    }
});

document.getElementById("test-form").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    port.postMessage({ email, password });
    document.getElementById("dialog").open = true;
});

document.getElementById("google-sign-in").addEventListener("click", () => {
    port.postMessage({ "provider": "google" });
});