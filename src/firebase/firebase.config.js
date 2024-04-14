// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdC8EoDhV_j8yI1bW6Ic7TktJzJV_pC-I",
  authDomain: "b9a9-d8454.firebaseapp.com",
  projectId: "b9a9-d8454",
  storageBucket: "b9a9-d8454.appspot.com",
  messagingSenderId: "524987815421",
  appId: "1:524987815421:web:78d1e26d7ee2b3d7627594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;