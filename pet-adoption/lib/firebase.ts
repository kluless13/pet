// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDTOc1l8KMvIwgoGoWvRR9OOIuHDfmTp0",
  authDomain: "pets-6c1e4.firebaseapp.com",
  projectId: "pets-6c1e4",
  storageBucket: "pets-6c1e4.firebasestorage.app",
  messagingSenderId: "850772296091",
  appId: "1:850772296091:web:6543626e32db97885ca13e",
  measurementId: "G-M3KHDRSMH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseApp = app;