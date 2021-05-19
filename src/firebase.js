import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwZUuFr0OwBP2Wd39beTIAo1dcbvABW4M",
    authDomain: "groceryapp-e8d58.firebaseapp.com",
    projectId: "groceryapp-e8d58",
    storageBucket: "groceryapp-e8d58.appspot.com",
    messagingSenderId: "360540719077",
    appId: "1:360540719077:web:eb7612cb1bd547572cd10c",
    measurementId: "G-NQJJJF5JCE"
  });
 // const db= firebaseApp.firestore();
  const auth =firebase.auth();
  export{ auth};