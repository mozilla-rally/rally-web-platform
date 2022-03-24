"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthentication = void 0;
const assert = require("assert");
const admin = require("firebase-admin");
async function useAuthentication(request, response, // eslint-disable-line @typescript-eslint/no-explicit-any,
authFunc) {
    assert(request, "Invalid request.");
    assert(response, "Invalid response.");
    assert(authFunc && typeof authFunc === "function", "Invalid function.");
    let decodedToken;
    try {
        decodedToken = await authenticateRequest(request);
        assert(decodedToken, "Invalid decoded token.");
    }
    catch (e) {
        response.status(401).send("Unauthorized access.");
        return;
    }
    await authFunc(decodedToken);
}
exports.useAuthentication = useAuthentication;
async function authenticateRequest(request) {
    const bearerToken = (request && request.headers["authorization"]) || "";
    const items = bearerToken.split(/[ ]+/);
    assert(items && items.length === 2 && items[0].trim() === "Bearer", "Invalid bearer token.");
    return await admin.auth().verifyIdToken(items[1].trim());
}
//# sourceMappingURL=authentication.js.map