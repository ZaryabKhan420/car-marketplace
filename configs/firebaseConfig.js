// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { Conf } from "../src/conf/Conf";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Conf.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-3fe29.firebaseapp.com",
  projectId: "car-marketplace-3fe29",
  storageBucket: "car-marketplace-3fe29.appspot.com",
  messagingSenderId: "712147218728",
  appId: "1:712147218728:web:7c04d8dbdb48d88db1a01d",
  measurementId: "G-0PZNHN96CH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
