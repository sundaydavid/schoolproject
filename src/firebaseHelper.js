import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6KuQ3ebrG5P1ygLdylDdPLu2rmmTU80A",
  authDomain: "blockchain-system.firebaseapp.com",
  projectId: "blockchain-system",
  storageBucket: "blockchain-system.appspot.com",
  messagingSenderId: "261881132537",
  appId: "1:261881132537:web:12df3dfeb6b6be698ab928",
  measurementId: "G-HPHGTK98YN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();