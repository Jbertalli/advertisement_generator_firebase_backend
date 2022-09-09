import * as functions from "firebase-functions";

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

//function that triggers whenever a firebase user is created
export const createUserDocument = functions.auth.user().onCreate((user) => {
    //add document into user collection whenever new user signs in 
    db.collection("users")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});
