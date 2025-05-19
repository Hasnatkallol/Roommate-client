// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtwmNYULsS5H3njD5DqsodBMPkgT6CuwI",
  authDomain: "assignment10-b0bdd.firebaseapp.com",
  projectId: "assignment10-b0bdd",
  storageBucket: "assignment10-b0bdd.firebasestorage.app",
  messagingSenderId: "684976844276",
  appId: "1:684976844276:web:239431f12e28e0dc715da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);