// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlyNAC5Xg-hFOX6JAqRwMfZ8L0Ezm8swU",
    authDomain: "kutumbari-restaurant.firebaseapp.com",
    projectId: "kutumbari-restaurant",
    storageBucket: "kutumbari-restaurant.appspot.com",
    messagingSenderId: "937616008801",
    appId: "1:937616008801:web:3b1f0c6b9c85cf1b0cec20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;