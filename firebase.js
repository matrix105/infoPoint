// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYR2FLQBBofUKmdxgHqXzF4Cd0l0Z1Vf8",
  authDomain: "infopoint-bdb5f.firebaseapp.com",
  projectId: "infopoint-bdb5f",
  storageBucket: "infopoint-bdb5f.appspot.com",
  messagingSenderId: "1003019591272",
  appId: "1:1003019591272:web:565c0dba9ba7b5be0325dd",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };