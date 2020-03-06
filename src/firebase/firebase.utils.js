import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChCMHTlAz2zsUK5Mvi2CKDGvNTQvtZurM",
  authDomain: "crwn-db-9198f.firebaseapp.com",
  databaseURL: "https://crwn-db-9198f.firebaseio.com",
  projectId: "crwn-db-9198f",
  storageBucket: "crwn-db-9198f.appspot.com",
  messagingSenderId: "1050708446794",
  appId: "1:1050708446794:web:9619fc609b9dc62fdaa0b3",
  measurementId: "G-91W52K0VZV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
