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
            localStorage.setItem("emailVerified", result.user.emailVerified)
            console.log("", name, email, profilePic,user_id)
            console.log("storing in postgres")

            location.reload(false) // location. reload(true); reloads the page from the server instead of from the cache vice versa in case of false 
                                   // TODO: implement this using useeffet (react foreupdate) , we can also do it using usestate
          
        }).catch(error => {
            console.log(error);
        });

}