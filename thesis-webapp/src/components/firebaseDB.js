// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDulVlf16iRUjiDnzfo63mOh2YZtQvF7yo",
  authDomain: "thesis-project-7d4dd.firebaseapp.com",
  projectId: "thesis-project-7d4dd",
  storageBucket: "thesis-project-7d4dd.appspot.com",
  messagingSenderId: "333087038834",
  appId: "1:333087038834:web:dc5d5207776f815e0011eb",
  measurementId: "G-QV2Q8MXKC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);