// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw-EFOCEePL4SKP6tsTwg7-d2RaduSaoU",
  authDomain: "realtor-clone-react-902db.firebaseapp.com",
  projectId: "realtor-clone-react-902db",
  storageBucket: "realtor-clone-react-902db.appspot.com",
  messagingSenderId: "316949271652",
  appId: "1:316949271652:web:ccc7e8e48ae252f2e4bb71"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();