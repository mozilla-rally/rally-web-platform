"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("firebase-admin");
const admin = require("firebase-admin");
const authentication_1 = require("../authentication");
describe("useAuthentication", () => {
    const request = {
        headers: {
            authorization: "Bearer abc123",
        },
    };
    const sendFn = { send: jest.fn() };
    const response = {
        status: jest.fn(),
    }; // eslint-disable-line @typescript-eslint/no-explicit-any
    const fakeAuth = {
        verifyIdToken: jest.fn(),
        createCustomToken: jest.fn(),
    };
    Object.defineProperty(admin, "auth", {
        get: function () {
            return () => fakeAuth;
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        response.status.mockReturnValue(sendFn);
    });
    it("throws when request is null", async () => {
        const fn = jest.fn();
        await expect(() => authentication_1.useAuthentication(null, response, fn)).rejects.toThrow("Invalid request.");
        expect(fn).not.toBeCalled();
    });
    it("throws when request is undefined", async () => {
        const fn = jest.fn();
        await expect(() => authentication_1.useAuthentication(undefined, response, fn)).rejects.toThrow("Invalid request.");
        expect(fn).not.toBeCalled();
    });
    it("throws when response is null", async () => {
        const fn = jest.fn();
        await expect(() => authentication_1.useAuthentication(request, null, fn)).rejects.toThrow("Invalid response.");
        expect(fn).not.toBeCalled();
    });
    it("throws when response is undefined", async () => {
        const fn = jest.fn();
        await expect(() => authentication_1.useAuthentication(request, undefined, fn)).rejects.toThrow("Invalid response.");
        expect(fn).not.toBeCalled();
    });
    it("throws when function is null", async () => {
        await expect(() => authentication_1.useAuthentication(request, response, null)).rejects.toThrow("Invalid function.");
    });
    it("throws when function is undefined", async () => {
        await expect(() => authentication_1.useAuthentication(request, response, undefined)).rejects.toThrow("Invalid function.");
    });
    it("throws when function is non-function", async () => {
        await expect(() => authentication_1.useAuthentication(request, response, "random value")).rejects.toThrow("Invalid function.");
    });
    it("throws http error 401 when request is missing", async () => {
        const fn = jest.fn();
        await authentication_1.useAuthentication({}, response, fn);
        expect(response.status).toHaveBeenCalledWith(401);
        expect(sendFn.send).toHaveBeenCalledWith("Unauthorized access.");
        expect(fn).not.toBeCalled();
    });
    it("throws http error 401 when request authorization header is missing", async () => {
        const fn = jest.fn();
        await authentication_1.useAuthentication(Object.assign(Object.assign({}, request), { headers: {} }), response, fn);
        expect(response.status).toHaveBeenCalledWith(401);
        expect(sendFn.send).toHaveBeenCalledWith("Unauthorized access.");
        expect(fn).not.toBeCalled();
    });
    it("throws http error 401 when bearer prefix is missing", async () => {
        const fn = jest.fn();
        await authentication_1.useAuthentication(Object.assign(Object.assign({}, request), { headers: { authorization: "123" } }), response, fn);
        expect(response.status).toHaveBeenCalledWith(401);
        expect(sendFn.send).toHaveBeenCalledWith("Unauthorized access.");
        expect(fn).not.toBeCalled();
    });
    it("throws http error 401 when bearer prefix is not pascal cased", async () => {
        const fn = jest.fn();
        await authentication_1.useAuthentication(Object.assign(Object.assign({}, request), { headers: { authorization: "bearer 123" } }), response, fn);
        expect(response.status).toHaveBeenCalledWith(401);
        expect(sendFn.send).toHaveBeenCalledWith("Unauthorized access.");
        expect(fn).not.toBeCalled();
    });
    it("throws http error 401 when auth header has more than 2 parts", async () => {
        const fn = jest.fn();
        await authentication_1.useAuthentication(Object.assign(Object.assign({}, request), { headers: { authorization: "bearer 123 abc" } }), response, fn);
        expect(response.status).toHaveBeenCalledWith(401);
        expect(sendFn.send).toHaveBeenCalledWith("Unauthorized access.");
        expect(fn).not.toBeCalled();
    });
    it("throws http error 401 when token is invalid", async () => {
        fakeAuth.verifyIdToken.mockRejectedValue("Invalid token");
        const fn = jest.fn();
        await authentication_1.useAuthentication(request, response, fn);
        expect(response.status).toHaveBeenCalledWith(401);
        expect(sendFn.send).toHaveBeenCalledWith("Unauthorized access.");
        expect(fakeAuth.verifyIdToken).toHaveBeenCalledWith("abc123");
        expect(fn).not.toBeCalled();
    });
    it("successfully invokes authenticated function", async () => {
        const decryptedToken = {
            uid: "abc123",
        };
        fakeAuth.verifyIdToken.mockResolvedValue(decryptedToken);
        const innerFn = jest.fn();
        await authentication_1.useAuthentication(request, response, innerFn);
        expect(innerFn).toHaveBeenCalledWith(decryptedToken);
    });
});
//# sourceMappingURL=authentication.test.js.map