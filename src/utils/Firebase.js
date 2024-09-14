// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABUkcwcG_h0SBJfJSeMXcgWqShfBID-r4",
  authDomain: "netflixg-175c8.firebaseapp.com",
  projectId: "netflixg-175c8",
  storageBucket: "netflixg-175c8.appspot.com",
  messagingSenderId: "57877739376",
  appId: "1:57877739376:web:6db787e566a7714eab41b5",
  measurementId: "G-PCJRKGY3G5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();