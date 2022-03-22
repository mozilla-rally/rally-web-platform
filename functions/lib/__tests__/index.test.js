"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const index_1 = require("../index");
const studies_1 = require("../studies");
describe("loadFirestore", () => {
    const studyName = Object.keys(studies_1.studies)[0];
    async function deleteStudy() {
        const studyRef = admin.firestore().collection("studies").doc(studyName);
        await studyRef.delete();
    }
    beforeEach(async () => {
        await deleteStudy();
    });
    afterEach(async () => {
        await deleteStudy();
    });
    it("loads data correctly from test user study", async () => {
        await index_1.loadFirestore({}, // eslint-disable-line @typescript-eslint/no-explicit-any
        { status: () => ({ send: () => { } }) } // eslint-disable-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-empty-function
        );
        const studyRef = admin.firestore().collection("studies");
        const userStudyDocs = await studyRef.get();
        expect(userStudyDocs.docs.length).toBe(1);
        expect(userStudyDocs.docs[0].data()).toEqual(studies_1.studies.exampleStudy1);
    });
});
describe("addRallyUserToFirestore and deleteRallyUserImpl", () => {
    const user = {
        uid: "abc123",
    };
    async function getUserRecords() {
        const userRef = admin.firestore().collection("users").doc(user.uid);
        const extensionRef = admin
            .firestore()
            .collection("extensionUsers")
            .doc(user.uid);
        return {
            user: await userRef.get(),
            extensionUser: await extensionRef.get(),
        };
    }
    async function deleteUserRecord() {
        const userRef = admin.firestore().collection("users").doc(user.uid);
        await userRef.delete();
        const extensionRef = admin
            .firestore()
            .collection("extensionUsers")
            .doc(user.uid);
        await extensionRef.delete();
    }
    beforeEach(async () => {
        await deleteUserRecord();
    });
    afterEach(async () => {
        await deleteUserRecord();
    });
    it("empty provider data does not register extension users", async () => {
        await expect(index_1.addRallyStudyToFirestoreImpl(Object.assign(Object.assign({}, user), { providerData: [] }))).resolves.toBeFalsy();
        const userRecords = await getUserRecords();
        expect(userRecords.user.exists).toBeFalsy();
        expect(userRecords.extensionUser.exists).toBeFalsy();
    });
    async function createAndValidateUserRecords() {
        await expect(index_1.addRallyStudyToFirestoreImpl(Object.assign(Object.assign({}, user), { providerData: [{ uid: user.uid }] }))).resolves.toBeTruthy();
        const userRecords = await getUserRecords();
        expect(userRecords.user.exists).toBeTruthy();
        expect(userRecords.extensionUser.exists).toBeTruthy();
        const extensionData = userRecords.extensionUser.data();
        expect(extensionData.rallyId).toBeDefined();
    }
    async function createStudiesForUser() {
        const userStudies = admin
            .firestore()
            .collection("users")
            .doc(user.uid)
            .collection("studies");
        ["study-A", "study-B"].forEach((studyName) => {
            const study = userStudies.doc(studyName);
            for (let i = 0; i < 6; i++) {
                study.set({ [`studyName-${i}`]: "test" });
            }
        });
    }
    it("valid user is registered correctly", async () => {
        await createAndValidateUserRecords();
    });
    it("deletion deletes user and extensionUser", async () => {
        await createAndValidateUserRecords();
        await createStudiesForUser();
        await index_1.deleteRallyUserImpl(user);
        const userRecords = await getUserRecords();
        expect(userRecords.user.exists).toBeFalsy();
        expect(userRecords.extensionUser.exists).toBeFalsy();
    });
});
describe("rallytoken tests", () => {
    let send; // eslint-disable-line @typescript-eslint/no-explicit-any
    let response; // eslint-disable-line @typescript-eslint/no-explicit-any
    beforeEach(() => {
        jest.resetAllMocks();
        send = jest.fn();
        response = {
            set: jest.fn(),
            status: jest.fn().mockReturnValue({ send }),
        }; // eslint-disable-line @typescript-eslint/no-explicit-any
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    function verifyCoreResponseHeaders() {
        expect(response.set).toHaveBeenCalledWith("Access-Control-Allow-Origin", "*");
        expect(response.set).toHaveBeenCalledWith("Access-Control-Allow-Headers", "Content-Type");
    }
    it("fails for invalid http verb", async () => {
        await index_1.rallytoken({ method: "PUT" }, response); // eslint-disable-line @typescript-eslint/no-explicit-any
        verifyCoreResponseHeaders();
        expect(response.status).toHaveBeenCalledWith(500);
        expect(send).toHaveBeenCalledWith("Only POST and OPTIONS methods are allowed.");
    });
    it("returns allowed headers and methods when called with options verb", async () => {
        await index_1.rallytoken({ method: "OPTIONS" }, response); // eslint-disable-line @typescript-eslint/no-explicit-any
        verifyCoreResponseHeaders();
        expect(response.set).toHaveBeenCalledWith("Access-Control-Allow-Methods", "POST");
        expect(response.set).toHaveBeenCalledWith("Access-Control-Allow-Headers", "Bearer, Content-Type");
        expect(response.status).toHaveBeenCalledWith(204);
        expect(send).toHaveBeenCalledWith("");
    });
    it("fails when POST is invoked with invalid payload", async () => {
        await index_1.rallytoken({ method: "POST" }, response); // eslint-disable-line @typescript-eslint/no-explicit-any
        verifyCoreResponseHeaders();
        expect(response.status).toHaveBeenCalledWith(500);
        expect(send).toHaveBeenCalled();
    });
    it("handles payload in POST request", async () => {
        const uid = "fake-uid";
        const customToken = "fake-custom-token";
        const fakeAuth = {
            verifyIdToken: jest.fn().mockReturnValue({ uid }),
            createCustomToken: jest.fn().mockReturnValue(customToken),
        };
        const fakeAuthRef = jest.fn().mockReturnValue(fakeAuth);
        Object.defineProperty(admin, "auth", {
            get: function () {
                return fakeAuthRef;
            },
        });
        const idToken = "idToken";
        const studyId = "study1";
        const validateFn = () => {
            expect(response.status).toHaveBeenCalledWith(200);
            expect(fakeAuth.verifyIdToken).toHaveBeenCalledWith(idToken);
            expect(fakeAuth.createCustomToken).toHaveBeenCalledWith(`${studyId}:${uid}`, {
                firebaseUid: uid,
                studyId,
            });
            expect(send.mock.calls[0][0]).toEqual({ rallyToken: customToken });
        };
        await index_1.rallytoken({
            method: "POST",
            body: JSON.stringify({ idToken, studyId }),
        }, // eslint-disable-line @typescript-eslint/no-explicit-any
        response);
        validateFn();
        response.status.mockClear();
        fakeAuth.verifyIdToken.mockClear();
        fakeAuth.createCustomToken.mockClear();
        send.mockClear();
        await index_1.rallytoken({
            method: "POST",
            body: { idToken, studyId },
        }, // eslint-disable-line @typescript-eslint/no-explicit-any
        response);
        validateFn();
    });
});
//# sourceMappingURL=index.test.js.map