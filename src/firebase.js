// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCprjx5qogVOfTWUiT86zdut_0GrJhvHHM",
    authDomain: "clone-7ebb9.firebaseapp.com",
    projectId: "clone-7ebb9",
    storageBucket: "clone-7ebb9.appspot.com",
    messagingSenderId: "434567036683",
    appId: "1:434567036683:web:140710e5101fdaadfdac0e",
    measurementId: "G-DH3BYRSZTM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};