import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBT8OxQGikP5RYMETalhgbDqtZNYONlIHg',
  authDomain: 'auth-trello-7133d.firebaseapp.com',
  databaseURL: 'https://auth-trello-7133d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'auth-trello-7133d',
  storageBucket: 'auth-trello-7133d.appspot.com',
  messagingSenderId: '789417695811',
  appId: '1:789417695811:web:b51c786dc09e73d24dd2f6',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
