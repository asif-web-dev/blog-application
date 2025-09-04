// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUSg644Btojro2m-I1gAwM38Zo3lAAO-w",
  authDomain: "blog-application-ee1ca.firebaseapp.com",
  projectId: "blog-application-ee1ca",
  storageBucket: "blog-application-ee1ca.firebasestorage.app",
  messagingSenderId: "844975025324",
  appId: "1:844975025324:web:82e0ac78c8bb2a1adec309",
  measurementId: "G-C36L0FJSPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
