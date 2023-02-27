/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { BoardsContext } from 'src/contexts/boardsContext';
import BoardItem from '../BoardItem';
import { StyledBoardsList } from './styles';

const BoardList = () => {
  const [loading, setLoading] = useState(false);
  const { boards, getBoards } = useContext(BoardsContext);

  useEffect(() => {
    setLoading(true);
    (async () => getBoards())().then(() => setLoading(false));
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <StyledBoardsList>
      <h2>Your boards</h2>
      {boards && boards.length > 0 ? (
        <div className="scrollBoards">
          {boards.map((board) => (
            <BoardItem key={board.id} props={board} />
          ))}
        </div>
      ) : (
        <h2 className="createNewBoard">Create a new board!</h2>
      )}
    </StyledBoardsList>
  );
};

export default BoardList;
