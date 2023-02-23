import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA8hoToZQv-P6iJptbu1GtI7f3dj5EF0cY',
  authDomain: 'rskanban.firebaseapp.com',
  projectId: 'rskanban',
  storageBucket: 'rskanban.appspot.com',
  messagingSenderId: '12056786311',
  appId: '1:12056786311:web:a84f67e6e1661add1d4f22',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
