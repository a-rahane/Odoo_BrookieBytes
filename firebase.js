// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// 🔧 Replace with YOUR config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBwLPKXaTy4qRA7jhfMzc8p8cqoKBSR4o0",
    authDomain: "odoo-brookiebytes.firebaseapp.com",
    projectId: "odoo-brookiebytes",
    storageBucket: "odoo-brookiebytes.firebasestorage.app",
    messagingSenderId: "254090879828",
    appId: "1:254090879828:web:1ebcac60fb47a74e47dec1",
    measurementId: "G-V4631K9Q5S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
