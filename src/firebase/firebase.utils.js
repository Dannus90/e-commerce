import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDAWfRN-hiym4nqbzwfNoL5YqPiD0w9s-I",
    authDomain: "e-commerce-db-16e78.firebaseapp.com",
    databaseURL: "https://e-commerce-db-16e78.firebaseio.com",
    projectId: "e-commerce-db-16e78",
    storageBucket: "e-commerce-db-16e78.appspot.com",
    messagingSenderId: "45839024734",
    appId: "1:45839024734:web:29af70f2b0db2845deeacf",
    measurementId: "G-LRVDZZZE11",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log("error creating user", err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
