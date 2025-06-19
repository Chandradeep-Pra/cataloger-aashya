// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLU5_bct9INfO3heSJg1y1S2rXfAuDoxs",
  authDomain: "cataloger-892b9.firebaseapp.com",
  projectId: "cataloger-892b9",
  storageBucket: "cataloger-892b9.firebasestorage.app",
  messagingSenderId: "203472038415",
  appId: "1:203472038415:web:6dc5d179274ba3b9efd17a"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };