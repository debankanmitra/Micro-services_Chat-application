import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGESENDERID,
    appId: import.meta.env.VITE_APPID
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
            
            console.log(result)

            //location.reload(false) // location. reload(true); reloads the page from the server instead of from the cache vice versa in case of false 
                                   // TODO: implement this using useeffet (react foreupdate) , we can also do it using usestate
          
        }).catch(error => {
            console.log(error);
        });

}