// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDN2f4l0W2UwLwclfuCd1rkHZl9L9vBnZY',
  authDomain: 'myblog-58b10.firebaseapp.com',
  projectId: 'myblog-58b10',
  storageBucket: 'myblog-58b10.appspot.com',
  messagingSenderId: '133358089773',
  appId: '1:133358089773:web:cff86c4aac36450a76aaa4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
