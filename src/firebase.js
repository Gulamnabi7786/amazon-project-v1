import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb2w9HFfqsyBYDnk9nOyu45gYapu16WUY",
  authDomain: "clone-5cc33.firebaseapp.com",
  projectId: "clone-5cc33",
  storageBucket: "clone-5cc33.appspot.com",
  messagingSenderId: "542587242981",
  appId: "1:542587242981:web:98e454ce6e4bade513870c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
