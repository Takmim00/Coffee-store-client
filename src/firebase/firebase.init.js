// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjUeYstZi--ga4PNY3bfYvZ28m5GmnEWk",
  authDomain: "coffee-store-608b9.firebaseapp.com",
  projectId: "coffee-store-608b9",
  storageBucket: "coffee-store-608b9.firebasestorage.app",
  messagingSenderId: "624021478198",
  appId: "1:624021478198:web:e20b4d10dbd831b3ea7197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);