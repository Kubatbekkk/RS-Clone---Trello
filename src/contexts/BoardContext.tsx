/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import { onAuthStateChanged, User } from 'firebase/auth';
import { onValue, ref, set } from 'firebase/database';
import React, { useContext, useState } from 'react';
import { auth, db } from 'src/firebase';
import type { AuthProviderProps } from 'src/pages/types/types';
import { uid } from 'uid';
import { useAuth } from './AuthContext';

interface Todo {
  [key: string]: string;
}

interface BoardContextState {
  writeToDatabase: () => void
  todos: Todo[]
}

interface BoardContextModel {
  writeToDatabase: () => void
  todos: Todo[]
}

const BoardContext = React.createContext<BoardContextState>({} as BoardContextState);

export function useBoard(): BoardContextModel {
  return useContext(BoardContext);
}

function BoardProvider({ children }: AuthProviderProps): JSX.Element {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const { currentUser } = useAuth();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        onValue(ref(db, `/${currentUser?.uid}`), (snapshot) => {
          setTodos([]);
          const data = snapshot.val();
          if (data !== null) {
            // eslint-disable-next-line array-callback-return
            Object.values(data).map((todo: Todo) => {
              setTodos((prevArray) => [...prevArray, todo.value]);
            });
          }
        });
      }
    });
  }, [currentUser]);

  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${currentUser?.uid}/${uidd}`), {
      todo,
      uidd,
    });
    setTodo('');
  };
  return (
    <BoardContext.Provider value={{
      writeToDatabase,
      todos,
    }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export default BoardProvider;
