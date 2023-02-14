import { child, ref, push } from 'firebase/database';
import { db } from 'src/firebase';
import { authService } from './auth';

const userBoards = () => child(child(ref(db, 'users'), authService.getUser()?.uid || ''), 'boards');

const addBoard = (board: string) => push(userBoards(), board);

export const boardService = { addBoard, userBoards };
