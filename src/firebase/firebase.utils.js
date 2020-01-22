import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbSvsCg-g5WRurnOuOwcaUjTBrgHVk8Ig",
  authDomain: "crwn-db-5d845.firebaseapp.com",
  databaseURL: "https://crwn-db-5d845.firebaseio.com",
  projectId: "crwn-db-5d845",
  storageBucket: "crwn-db-5d845.appspot.com",
  messagingSenderId: "646090834154",
  appId: "1:646090834154:web:aa804296c94655e0f95793",
  measurementId: "G-67BRRTEVGX"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
