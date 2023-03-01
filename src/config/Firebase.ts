import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCCPT4TjVD-IZz7HKJrfDFCLTSL9OJPQfw',
  authDomain: 'rskanban-b4d5a.firebaseapp.com',
  projectId: 'rskanban-b4d5a',
  storageBucket: 'rskanban-b4d5a.appspot.com',
  messagingSenderId: '695948939226',
  appId: '1:695948939226:web:ea2bfdf769a6c28e223ae3',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
