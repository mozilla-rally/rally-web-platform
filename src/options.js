const port = chrome.runtime.connect();
port.onMessage.addListener(message => {
    console.debug(message);

    if ("error" in message) {
        document.getElementById("error").textContent = message.error;
    } else if ("result" in message) {
        const result = message.result;
        console.log("result", result);
        document.getElementById("enrolled").textContent = result.user.enrolled ? "Yes!" : "No ...";
        document.getElementById("uid").textContent = result.user.uid;
        let output = "<br>";
        for (const studyName in result.user.enrolledStudies) {
            const enrolled = result.user.enrolledStudies[studyName].enrolled;
            const attached = result.user.enrolledStudies[studyName].attached;
            output += `<div class="study">${studyName}<br>  <span class="enroll-status ${enrolled ? "enrolled" : "not-enrolled"}">${enrolled ? "✔️ enrolled" : "❌ not enrolled"}</span>`;
            output += `<span class="attach-status ${attached ? "attached" : "not-attached"}">${attached ? "🔗 connected" : "😴 not connected"}</span></div>`;
        }
        document.getElementById("enrolledStudies").innerHTML = output;

    }
});

port.postMessage({});