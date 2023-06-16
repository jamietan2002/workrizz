// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXXG-072aaoDsl4MRlp5NZvSqoU4N2mvE",
  authDomain: "workrizz-428f0.firebaseapp.com",
  projectId: "workrizz-428f0",
  storageBucket: "workrizz-428f0.appspot.com",
  messagingSenderId: "588661124371",
  appId: "1:588661124371:web:388bb380c5bb54b4ecbee6",
  measurementId: "G-SL2LH8FT04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);