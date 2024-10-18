// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebaseの設定をここに記述
const firebaseConfig = {
    apiKey: "AIzaSyD14xkLJGW_cv_OalZJI46H_DurwCy2dj8",
    authDomain: "aipricompcheck.firebaseapp.com",
    projectId: "aipricompcheck",
    storageBucket: "aipricompcheck.appspot.com",
    messagingSenderId: "298281090052",
    appId: "1:298281090052:web:70d0a2799d375492104951",
    measurementId: "G-94CXXTR1L7"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// AuthとFirestoreのインスタンスを取得
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };