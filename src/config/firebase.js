// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDtWdDoET8QIvFCxXNPjDrHGcxjkgu0UM",
    authDomain: "south-coast-physio.firebaseapp.com",
    projectId: "south-coast-physio",
    storageBucket: "south-coast-physio.appspot.com",
    messagingSenderId: "152430377361",
    appId: "1:152430377361:web:7c429dee932c21d3214230"
  };
  
// Initialize Firebase
initializeApp(firebaseConfig);


export const auth = getAuth();
export const firestore = getFirestore();