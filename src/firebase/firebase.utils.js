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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
