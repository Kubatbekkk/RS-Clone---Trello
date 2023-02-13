import { User } from 'firebase/auth';
import { child, ref } from 'firebase/database';
import { db } from 'src/firebase';

const userBoards = (currentUser: User | null) => child(child(ref(db, 'users'), currentUser?.uid || ''), 'boards');

export default userBoards;
