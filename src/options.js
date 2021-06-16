const port = chrome.runtime.connect();
port.onMessage.addListener(message => {
    console.debug(message);

    if ("error" in message) {
        document.getElementById("error").textContent = message.error;
    } else if ("result" in message) {
        const result = message.result;
        console.log("result", result);
        document.getElementById("enrolled").textContent = result.user.enrolled;
        document.getElementById("uid").textContent = result.user.uid;
        let output = "";
        for (const studyName in result.user.enrolledStudies) {
            output += `${studyName}, enrolled: ${result.user.enrolledStudies[studyName].enrolled}<br>`;
        }
        document.getElementById("enrolledStudies").innerHTML = output;

    }
});

port.postMessage({});