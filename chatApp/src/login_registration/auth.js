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
            const Uuid = result.user.uid
            const EmailVerified = result.user.emailVerified
            const Name = result.user.displayName
            const Email = result.user.email
            const Pic = result.user.photoURL
            const DarkMode = false

            let data = { Uuid, Name, Pic, Email }
            fetch('http://localhost:4001/api/crtuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                
            localStorage.setItem("Uuid", Uuid)
            localStorage.setItem("emailVerified", result.user.emailVerified)
            localStorage.setItem("ProfilePic", Pic)
            localStorage.setItem("Name", Name)
            localStorage.setItem("DarkMode", DarkMode)
            


            location.reload(false) // location. reload(true); reloads the page from the server instead of from the cache vice versa in case of false 
            // TODO: implement this using useeffet (react foreupdate) , we can also do it using usestate

        }).catch(error => {
            console.log(error);
        });

}