// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKzt1bfTa8dpe3yVfK70b8UCMzDsvNe-Y",
  authDomain: "netflixgpt-f1fce.firebaseapp.com",
  projectId: "netflixgpt-f1fce",
  storageBucket: "netflixgpt-f1fce.appspot.com",
  messagingSenderId: "897711000948",
  appId: "1:897711000948:web:e58d0166911602f1f9b021",
  measurementId: "G-EG7VF9JN2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);