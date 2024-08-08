// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6uJWf9K0r0X68FJdGwqEz3V-OcbQF8-g",
    authDomain: "interviewweb-82630.firebaseapp.com",
    projectId: "interviewweb-82630",
    storageBucket: "interviewweb-82630.appspot.com",
    messagingSenderId: "171769375206",
    appId: "1:171769375206:web:4c0c19c4db7cd87ff24e27",
    measurementId: "G-CQ2PZ0371Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };