// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlzRdS9V1MNePkRUhct3VjZiaUFv0Zs0",
  authDomain: "independent-person-project.firebaseapp.com",
  projectId: "independent-person-project",
  storageBucket: "independent-person-project.appspot.com",
  messagingSenderId: "555788151576",
  appId: "1:555788151576:web:8d8ed9039042aac7de8c6d",
  measurementId: "G-VGTVQH5DJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);