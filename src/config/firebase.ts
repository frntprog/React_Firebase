// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMAJQXR8vVvBy6OjHpFiBwGy7K8SHoErQ",
  authDomain: "react-firebase-b1e7f.firebaseapp.com",
  projectId: "react-firebase-b1e7f",
  storageBucket: "react-firebase-b1e7f.appspot.com",
  messagingSenderId: "224123408549",
  appId: "1:224123408549:web:2d2b00c115131e5909fd4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
