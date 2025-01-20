// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage"; // Import only the required Firebase products

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvDSIg4qJ_HQT63J8XWRrKOPcCA1NEfh0",
  authDomain: "capstone2-3243e.firebaseapp.com",
  projectId: "capstone2-3243e",
  storageBucket: "capstone2-3243e.firebasestorage.app", // Fixed typo
  messagingSenderId: "211817566185",
  appId: "1:211817566185:web:f3554f310e8544f1a48578",
  measurementId: "G-R89BBD8GR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);
const storageRef = ref(storage)



export { app, storage };
