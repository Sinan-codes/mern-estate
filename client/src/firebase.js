// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-73aad.firebaseapp.com",
  projectId: "mern-estate-73aad",
  storageBucket: "mern-estate-73aad.firebasestorage.app",
  messagingSenderId: "1048628265122",
  appId: "1:1048628265122:web:4b2f83e6da4f5f17e197fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);