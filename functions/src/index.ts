import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const rallytoken = functions.https.onRequest(
    async (request, response) => {
      response.set("Access-Control-Allow-Origin", "*");
      response.set("Access-Control-Allow-Headers", "Content-Type");

      if (request.method === "OPTIONS") {
        response.set("Access-Control-Allow-Methods", "POST");
        response.set("Access-Control-Allow-Headers", "Bearer, Content-Type");
        response.status(204).send("");
      } else if (request.method === "POST") {
        functions.logger.info(
            `body type: ${typeof request.body}`,
            {payload: request.body}
        );

        try {
          let idToken;
          if (typeof request.body === "string") {
            idToken = JSON.parse(request.body).idtoken;
          } else {
            idToken = request.body.idtoken;
          }

          functions.logger.info("idtoken: " + idToken);

          const rallyToken = await generateToken(idToken);
          functions.logger.info("OK");
          response.status(200).send({rallyToken});
        } catch (ex) {
          functions.logger.error(ex);
          response.status(500).send(ex.message);
        }
      } else {
        response.status(500).send("Only POST and OPTIONS methods are allowed.");
      }
    }
);

/**
 * Takes a Firebase IDToken for a Rally user, and returns a Rally Token
 * for a restricted-access account (for use with studies).
 *
 * @param {string} idToken Firebase IDToken
 * @return {Promise<string>} rallyToken
 */
async function generateToken(idToken: string): Promise<string> {
  const decodedToken = await admin.auth().verifyIdToken(idToken);

  // Firebase will create this account if it does not exist,
  // when the tokin is first used to sign-in.
  const uid = `examplestudy1:${decodedToken.uid}`;
  const rallyToken = await admin.auth().createCustomToken(
      uid, {firebaseUid: decodedToken.uid}
  );

  return rallyToken;
}
