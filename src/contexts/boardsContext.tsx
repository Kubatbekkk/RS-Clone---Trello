/* eslint-disable react/jsx-no-constructed-context-values */
import {
  addDoc, collection, getDocs, query, where,
} from 'firebase/firestore';
import React, { createContext, ReactNode, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/Firebase';

interface ITask {
  boardId: string
  name: string
  description: string
  status: 'todo' | 'doing' | 'done'
  id?: string
  ownerId?: string
  createdAt?: Date
}

interface IBoard {
  ownerId: string;
  id: string;
  name: string;
  todos: ITask[]
}

interface IBoardsContext {
  boards: IBoard[] | null;
  tasks: ITask[] | null;
  createNewBoard: (name: string) => void
  getBoards: () => void
  getTasks: (boardId: string) => void;
  createNewTask: ({ boardId, name, description }: ITask) => void
}

export const BoardsContext = createContext({} as IBoardsContext);

const BoardsProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [boards, setBoards] = useState<IBoard[] | null>([]);
  const [tasks, setTasks] = useState<ITask[] | null>(null);

  const [user] = useAuthState(auth);

  const boardsCollection = collection(db, 'boards');

  const tasksCollection = collection(db, 'tasks');

  const getBoards = async () => {
    if (user) {
      const boardsQuery = query(
        boardsCollection,
        where('ownerId', '==', user.uid),
      );
      const boardsDocs = await getDocs(boardsQuery);

      const boardTasks = query(
        tasksCollection,
        where('ownerId', '==', user.uid),
      );

      const tasksDoc = await getDocs(boardTasks);
      const tasks = tasksDoc.docs.map((task) => task.data()) as ITask[];

      setBoards(
        boardsDocs.docs.map((board) => ({
          ...board.data(),
          id: board.id,
          createdAt: new Date(),
          todos: tasks.filter((task) => task.boardId === board.id),
          done: tasks.filter((task) => task.boardId === board.id && task.status === 'done'),
        })) as unknown as IBoard[],
      );
    }
  };

  const createNewBoard = async (name: string) => {
    if (user) {
      try {
        await addDoc(boardsCollection, {
          ownerId: user.uid,
          name,
          createdAt: new Date(),
        });
        getBoards();
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    }
  };

  const createNewTask = async ({
    boardId, name, description, status,
  }: ITask) => {
    if (user) {
      try {
        await addDoc(tasksCollection, {
          boardId,
          name,
          description,
          status,
          ownerId: user.uid,
          createdAt: new Date(),
        });
        getBoards();
      } catch (err) {
        if (err instanceof Error) console.error(err);
      }
    }
  };

  const getTasks = async (boardId: string) => {
    if (user) {
      const tasksQuery = query(
        tasksCollection,
        where('boardId', '==', boardId),
      );
      const tasksDocs = await getDocs(tasksQuery);
      setTasks(tasksDocs.docs.map((task) => ({
        ...task.data(),
        id: task.id,
      })) as ITask[]);
    }
  };

  return (
    <BoardsContext.Provider value={{
      boards,
      tasks,
      createNewBoard,
      getBoards,
      getTasks,
      createNewTask,
    }}
    >
      {children}
    </BoardsContext.Provider>
  );
};

export default BoardsProvider;
