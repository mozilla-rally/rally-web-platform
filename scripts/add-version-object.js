import cp from "child_process";
import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("./package.json").toString());

function toIsoString(date) {
    const tzo = -date.getTimezoneOffset();
    const dif = tzo >= 0 ? '+' : '-';
    const pad = function(num) {
    const norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
}

const version = {
    version: pkg.version,
    repository: pkg.repository.url,
    branch: cp.execSync("git rev-parse --abbrev-ref HEAD").toString().slice(0, -1),
    commit:  cp
    .execSync('git rev-parse HEAD')
    .toString().trim(),
    buildDate: toIsoString(new Date())
}

fs.writeFileSync("static/version.json", JSON.stringify(version));
