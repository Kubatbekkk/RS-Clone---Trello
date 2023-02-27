/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import TodoList from 'src/components/TodoList';
// import EmptyImage from 'src/components/Utils/EmptyImage';
import { auth } from 'src/config/Firebase';
import { BoardsContext } from 'src/contexts/boardsContext';
import { StyledBoard } from './styles';

const Welcome = () => {
  const { id } = useParams();

  const { tasks, getTasks } = useContext(BoardsContext);
  const [user] = useAuthState(auth);

  useEffect(() => {
    // if (!user) navigate('/login');
    if (user && id) getTasks(id);
  }, [user, id]);

  return (
    <StyledBoard>
      <div>
        <h1>{tasks && tasks.length > 0 ? 'tasks' : 'welcome'}</h1>
      </div>
    </StyledBoard>
  );
};

export default Welcome;
