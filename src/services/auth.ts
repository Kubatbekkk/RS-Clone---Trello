import { ref, set } from 'firebase/database';
import { auth, db } from 'src/firebase';

const createUser = (id: unknown, email: unknown) => set(ref(db, `users/${id}`), {
  email,
});

const getUser = () => auth.currentUser;

export const authService = { createUser, getUser };
