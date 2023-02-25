/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import TodoList from 'src/components/TodoList';
import EmptyImage from 'src/components/Utils/EmptyImage';
import { auth } from 'src/config/Firebase';
import { BoardsContext } from 'src/contexts/boardsContext';
import { StyledBoard } from './styles';

const Board = () => {
  const { id } = useParams();

  const { tasks, getTasks } = useContext(BoardsContext);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user && id) {
      getTasks(id);
    }
  }, [user, id]);

  return (
    <StyledBoard>
      {
        !tasks || tasks.length < 1 ? (
          <EmptyImage
            emptyText1="You don't have any tasks"
            emptyText2="Create your new task"
          />
        ) : (<TodoList tasks={tasks} boardId={id || '1'} />)
      }
    </StyledBoard>
  );
};

export default Board;
