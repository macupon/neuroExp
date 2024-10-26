// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-3UN81uTF1xRzJ3ZdMXBHeurNMwDbOIo",
  authDomain: "neuro-exp.firebaseapp.com",
  projectId: "neuro-exp",
  storageBucket: "neuro-exp.appspot.com",
  messagingSenderId: "948315509380",
  appId: "1:948315509380:web:d61241d405343f782628d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app)