// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl50dH5_nB6AbjYTIea5LLze4kqGDvHfc",
    authDomain: "super-proctor.firebaseapp.com",
    projectId: "super-proctor",
    storageBucket: "super-proctor.appspot.com",
    messagingSenderId: "180408793867",
    appId: "1:180408793867:web:1827cc528c93c36d10400e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;