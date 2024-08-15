// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbQU1LMzaF0mj2W75inoJS0i73D7dIGvs",
  authDomain: "netflixgpt-d882e.firebaseapp.com",
  projectId: "netflixgpt-d882e",
  storageBucket: "netflixgpt-d882e.appspot.com",
  messagingSenderId: "952495239589",
  appId: "1:952495239589:web:a94e7c9030a4e26b5c784c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
