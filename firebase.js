// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  // enter yor api key below
  apiKey: " ",
  authDomain: "clone-d719e.firebaseapp.com",
  databaseURL: "https://clone-d719e.firebaseio.com",
  projectId: "clone-d719e",
  storageBucket: "clone-d719e.appspot.com",
  messagingSenderId: "52629937776",
  appId: "1:52629937776:web:0446f30f4ac4f652f09eb5",
  measurementId: "G-PWMVB9TG6H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// console.log(auth);
export { db, auth };
