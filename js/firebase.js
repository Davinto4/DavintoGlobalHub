// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, push, onChildAdded, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyByorNdZMBOzoH3oRtAia3V3oNZ83wc7Ss",
  authDomain: "davintoglobalhub.firebaseapp.com",
  projectId: "davintoglobalhub",
  storageBucket: "davintoglobalhub.firebasestorage.app",
  messagingSenderId: "729343348813",
  appId: "1:729343348813:web:0c2bc33c007c3b667a0c04",
  measurementId: "G-3CPZHCSCZJ",
  databaseURL: "https://davintoglobalhub-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

