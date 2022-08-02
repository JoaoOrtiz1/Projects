import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDYttVcVFuk9vRYfW_nF54OjHnNLDACdc",
    authDomain: "instagram-clone-js-a255f.firebaseapp.com",
    projectId: "instagram-clone-js-a255f",
    storageBucket: "instagram-clone-js-a255f.appspot.com",
    messagingSenderId: "463523991322",
    appId: "1:463523991322:web:a5ce013015f347a00526a3",
    measurementId: "G-WC5RNSBH51"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};
