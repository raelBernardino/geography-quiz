// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJyKq5kFPuJmS-G_fXdJR-snCplhqfyNQ",
  authDomain: "geogrow-ce6ef.firebaseapp.com",
  projectId: "geogrow-ce6ef",
  storageBucket: "geogrow-ce6ef.appspot.com",
  messagingSenderId: "285654108019",
  appId: "1:285654108019:web:5df2d4037f6ea6637d6706",
  measurementId: "G-TWH6P7ZLJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)