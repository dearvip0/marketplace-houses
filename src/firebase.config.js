// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD99QggxSS7x59sJtvi7ooJBlIwl1fmluw",
  authDomain: "maketplace-project.firebaseapp.com",
  projectId: "maketplace-project",
  storageBucket: "maketplace-project.appspot.com",
  messagingSenderId: "735168281359",
  appId: "1:735168281359:web:4c69393ac68129500cdc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();