// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtdlns46Mg69wXmW9RV48wa2-SRAx4YCw',
  authDomain: 'emna-pfe.firebaseapp.com',
  projectId: 'emna-pfe',
  storageBucket: 'emna-pfe.appspot.com',
  messagingSenderId: '880906943337',
  appId: '1:880906943337:web:801ee5e614ebeb210e1bf8',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
