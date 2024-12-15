// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDt2SwruBvlyOOHyuCOBvMh4fqEgNtb5oA',
    authDomain: 'desafio-firestore-uno.firebaseapp.com',
    projectId: 'desafio-firestore-uno',
    storageBucket: 'desafio-firestore-uno.firebasestorage.app',
    messagingSenderId: '810487296342',
    appId: '1:810487296342:web:8d749e9cde53b7348726f7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const USUARIOS_COLLECTION = 'usuarios';
export const usuariosRef = collection(db, USUARIOS_COLLECTION);
export default app;
