import {
  child, ref, push, get, update,
} from 'firebase/database';
import { Lane } from 'react-trello-ts';
import { db } from 'src/firebase';
import { authService } from './auth';

const userBoards = () => child(child(ref(db, 'users'), authService.getUser()?.uid || ''), 'boards');

const addBoard = (board: string) => push(userBoards(), board);

const userBoard = (board: string) => child(userBoards(), board);

const getBoard = (key: string) => get(userBoard(key));

const updateBoard = (key: string, data: { lanes: typeof Lane[] }) => update(userBoard(key), data);

export const boardService = {
  addBoard, userBoards, userBoard, getBoard, updateBoard,
};
