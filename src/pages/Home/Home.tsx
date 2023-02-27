/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import EmptyImage from 'src/components/Utils/EmptyImage';
import Loading from 'src/components/Utils/Loading';
import { BoardsGrid, BoardsGridItem } from '../../components/BoardsGrid';
import { auth } from '../../config/Firebase';
import { BoardsContext } from '../../contexts/boardsContext';
import { StyledHome } from './styles';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const { boards, getBoards } = useContext(BoardsContext);

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    setLoading(true);
    if (!user) {
      navigate('/login');
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (user) {
      setLoading(true);
      // eslint-disable-next-line func-names
      (async function () {
        await getBoards();
      }()).then(() => setLoading(false));
    }
  }, [user]);

  if (loading) {
    return (
      <Loading height='100%' width='100%' />
    );
  }
  return (
    <StyledHome>
      {!boards || boards.length < 1 ? (
        <EmptyImage
          emptyText1="You don't have any boards"
          emptyText2="Create your new board"
          emptyBoard
        />
      ) : (
        <BoardsGrid>
          {boards.map((board) => (
            <BoardsGridItem
              key={board.id}
              id={board.id}
              name={board.name}
              tasks={{ todos: board.todos, done: board.done }}
            />
          ))}
        </BoardsGrid>
      )}
    </StyledHome>
  );
};

export default Home;
