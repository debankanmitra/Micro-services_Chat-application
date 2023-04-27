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
        .then(result => {
            const name = result.user.displayName
            const email = result.user.email
            const profilePic = result.user.photoURL
            const user_id = result.user.uid

            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("profilePic", profilePic)
            localStorage.setItem("user_id", user_id)

            console.log("", name, email, profilePic,user_id)
            console.log("storing in postgres")
            if ("5dx6K2MKvVaJK2CAv9TDUtVLhTD3" == user_id) {
                console.log("same id can be used in invite")
            }
        }).catch(error => {
            console.log(error);
        });

}