// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración compartida de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrZ4orIjUytBhZ6o1Pj4h_4JoWa6dUs4I",
  authDomain: "fir-pruebaweb-3a9f8.firebaseapp.com",
  projectId: "fir-pruebaweb-3a9f8",
  storageBucket: "fir-pruebaweb-3a9f8.firebasestorage.app",
  messagingSenderId: "880021465759",
  appId: "1:880021465759:web:8be77a09bd336b8abcd0aa"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
