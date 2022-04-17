// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlxJfUeMYc8v0vIQDbsOnZkV749EocHk",
  authDomain: "infocus-c94eb.firebaseapp.com",
  projectId: "infocus-c94eb",
  storageBucket: "infocus-c94eb.appspot.com",
  messagingSenderId: "307168102840",
  appId: "1:307168102840:web:8e8a9cd256fa4d7cc9274d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;