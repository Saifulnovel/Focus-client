// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2WJwlLeS5z2K07XXiw5i60PE17rNUxI",
  authDomain: "focus-4378c.firebaseapp.com",
  projectId: "focus-4378c",
  storageBucket: "focus-4378c.appspot.com",
  messagingSenderId: "40927186253",
  appId: "1:40927186253:web:789d495d4978e60de5bb04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;