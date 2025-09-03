import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD88wXduGlDN1xW24Ezizlvaw2cR5KVNU",
  authDomain: "admin-38499.firebaseapp.com",
  projectId: "admin-38499",
  storageBucket: "admin-38499.appspot.com",  
  messagingSenderId: "491838319075",
  appId: "1:491838319075:web:dac767c2862589b1f1d8d6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
