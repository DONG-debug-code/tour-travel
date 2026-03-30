// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqIAjYUdbJbfRRTlHUFe7hd9bjc5oIo-k",
  authDomain: "tourdb-7a314.firebaseapp.com",
  projectId: "tourdb-7a314",
  storageBucket: "tourdb-7a314.firebasestorage.app",
  messagingSenderId: "913081252266",
  appId: "1:913081252266:web:c300921ff46e4753b553d3",
  measurementId: "G-318BY040R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

//app2 để tạo user mới mà không ảnh hưởng đến user hiện tại đang đăng nhập
const secondaryApp = initializeApp(firebaseConfig, "Secondary"); 
export const secondaryAuth = getAuth(secondaryApp);

// export const usersCollection = collection(db, "users");