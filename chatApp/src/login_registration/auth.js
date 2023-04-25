// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB9R_2hZ8eHxtscX0ejfNzIlZbCsXJIIBg",
    authDomain: "login-with-17831.firebaseapp.com",
    projectId: "login-with-17831",
    storageBucket: "login-with-17831.appspot.com",
    messagingSenderId: "734916142370",
    appId: "1:734916142370:web:2f484e1e9b70b4510d317b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // users currrenly athenticated in fireabse inside of our project 
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);

        }).catch((error) => {

            console.log(error);
            

        });

}