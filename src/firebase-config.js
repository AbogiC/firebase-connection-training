import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS66STFMHxpGIsYIcdehM-BYrwQmZ4i5U",
    authDomain: "fir-testing-360dd.firebaseapp.com",
    projectId: "fir-testing-360dd",
    storageBucket: "fir-testing-360dd.appspot.com",
    messagingSenderId: "490378714455",
    appId: "1:490378714455:web:6f92d5b3c7cee43d37f212",
    measurementId: "G-0C4QZKV430"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);