import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfFGf7osTDsAWBihKNcfKR0qu4TOouCoE",
  authDomain: "linkedin-clone-7748b.firebaseapp.com",
  projectId: "linkedin-clone-7748b",
  storageBucket: "linkedin-clone-7748b.appspot.com",
  messagingSenderId: "498145203078",
  appId: "1:498145203078:web:b2e540f188cbaa20435207",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
