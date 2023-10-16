// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtY8Lk3IKhV6YSAm9rVojMLnR3Ww6Z1EM",
  authDomain: "albhabi-4b7ed.firebaseapp.com",
  projectId: "albhabi-4b7ed",
  storageBucket: "albhabi-4b7ed.appspot.com",
  messagingSenderId: "517399652547",
  appId: "1:517399652547:web:20fa301ea1ad08c0b6da76",
  measurementId: "G-40KBH022FL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
