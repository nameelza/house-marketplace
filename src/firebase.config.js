// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo5S40snMAfv-PGXvVpogJvgRoC70G1CY",
  authDomain: "house-marketplace-f29cf.firebaseapp.com",
  projectId: "house-marketplace-f29cf",
  storageBucket: "house-marketplace-f29cf.appspot.com",
  messagingSenderId: "1014007223936",
  appId: "1:1014007223936:web:12ee3fd0ff33a14827f865",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

