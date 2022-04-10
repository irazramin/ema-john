// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEjmtHmQBHxhxmPf9xdA3wfPYszwBIX8Q',
  authDomain: 'ema-john-24c93.firebaseapp.com',
  projectId: 'ema-john-24c93',
  storageBucket: 'ema-john-24c93.appspot.com',
  messagingSenderId: '455309901627',
  appId: '1:455309901627:web:8514b89357f9d97fe2011e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);

export default auth;