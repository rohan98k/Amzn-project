import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJX-N3Tqt0Zh3NXa89UOJElrwF6y2NPkI",
  authDomain: "amzn-rohan98k.firebaseapp.com",
  databaseURL: "https://amzn-rohan98k.firebaseio.com",
  projectId: "amzn-rohan98k",
  storageBucket: "amzn-rohan98k.appspot.com",
  messagingSenderId: "703709215147",
  appId: "1:703709215147:web:7ef47a7120f0b99b94baee",
  measurementId: "G-R5ZQMLKX7X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
