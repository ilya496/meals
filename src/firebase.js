import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBBDjEEgLacirwqAUdeld90rC7L3OjWhGw",
    authDomain: "my-project-3aa8d.firebaseapp.com",
    projectId: "my-project-3aa8d",
    storageBucket: "my-project-3aa8d.appspot.com",
    messagingSenderId: "972982406804",
    appId: "1:972982406804:web:8308f08084e6e402652e81",
};

const app = firebase.initializeApp(firebaseConfig);
// database
const db = app.firestore();
// auth
const auth = app.auth();

export { db, auth };
