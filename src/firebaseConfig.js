// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT7APeaRKKOYucfhg3FBT_PviQWtIURFk",
  authDomain: "homework3blog-3b78f.firebaseapp.com",
  projectId: "homework3blog-3b78f",
  storageBucket: "homework3blog-3b78f.appspot.com",
  messagingSenderId: "851984214099",
  appId: "1:851984214099:web:dd788e9c66c87ea15d7ea6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
