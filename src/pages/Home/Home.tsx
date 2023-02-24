/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import BoardsGrid from 'src/components/BoardsGrid';
import BoardsGridItem from 'src/components/BoardsGrid/BoardsGridItem';
import EmptyImage from 'src/components/Utils/EmptyImage';
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
  }, [navigate, user]);

  useEffect(() => {
    if (user) {
      setLoading(true);
      getBoards();
      setLoading(false);
    }
  }, [user]);

  if (loading) return (<h1>Loading...</h1>);
  console.log(boards);
  return (
    <StyledHome>
      {!boards || boards.length < 1 ? (
        <EmptyImage
          emptyText1="You don't have any boards"
          emptyText2="Create your new board"
          emptyBoard
        />
      ) : (
      // @ts-ignore
        <BoardsGrid>
          <>
            {boards.map((board) => (
              <BoardsGridItem key={board.id} />
            ))}
          </>
        </BoardsGrid>
      )}
    </StyledHome>
  );
};

export default Home;
