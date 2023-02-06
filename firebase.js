// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm48L2dok_1ITvT_jbJGgcdsATd5h39vo",
  authDomain: "pococare-admin.firebaseapp.com",
  projectId: "pococare-admin",
  storageBucket: "pococare-admin.appspot.com",
  messagingSenderId: "49134585184",
  appId: "1:49134585184:web:164323052a5ce3e96e4a05",
  measurementId: "G-TF1LCPY3WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);