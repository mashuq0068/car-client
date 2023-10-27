// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_rSZLaSPqaDPZ9b4xV1PdyyqlOLIhIw",
  authDomain: "coffee-store-f90cd.firebaseapp.com",
  projectId: "coffee-store-f90cd",
  storageBucket: "coffee-store-f90cd.appspot.com",
  messagingSenderId: "707160002401",
  appId: "1:707160002401:web:fc8a29d50ebf63f3d6ff20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth