// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk13ajBKO67u6SRe6kvzSt_mVpWJYZzdo",
  authDomain: "dev-links-7d63a.firebaseapp.com",
  projectId: "dev-links-7d63a",
  storageBucket: "dev-links-7d63a.appspot.com",
  messagingSenderId: "629422293643",
  appId: "1:629422293643:web:286b98d0fb22b4458a4a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};