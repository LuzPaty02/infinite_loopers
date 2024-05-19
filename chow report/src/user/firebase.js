// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC-0LWk6r4M6BOIdp6JHAwxbOoWWYXyL3Y",
    authDomain: "chow-report.firebaseapp.com",
    databaseURL: "https://chow-report-default-rtdb.firebaseio.com",
    projectId: "chow-report",
    storageBucket: "chow-report.appspot.com",
    messagingSenderId: "103678662977",
    appId: "1:103678662977:web:045d204034d375b4eda9c0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };