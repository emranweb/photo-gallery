import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD8kFOR8aobqhsBx7OVeFJcPC0LitW5iGg",
    authDomain: "photo-gallery-408d3.firebaseapp.com",
    projectId: "photo-gallery-408d3",
    storageBucket: "photo-gallery-408d3.appspot.com",
    messagingSenderId: "956776914372",
    appId: "1:956776914372:web:5ec0e7f737110a26e45891"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
