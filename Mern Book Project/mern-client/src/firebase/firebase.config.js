// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGwIp0uNG8P3qkchPwE_qc_wkm5cFB88",
  authDomain: "mern-book-inventory-74346.firebaseapp.com",
  projectId: "mern-book-inventory-74346",
  storageBucket: "mern-book-inventory-74346.appspot.com",
  messagingSenderId: "392342387114",
  appId: "1:392342387114:web:d998dcc4c7f067196bd3d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;