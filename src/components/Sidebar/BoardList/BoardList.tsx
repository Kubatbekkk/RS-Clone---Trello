/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useContext, useEffect } from 'react';
import { BoardsContext } from 'src/contexts/boardsContext';
import BoardItem from '../BoardItem';
import { StyledBoardsList } from './styles';

interface IBoardItemProps {
  ownerId: string,
  id: string,
  name: string
}

const BoardList = () => {
  const { boards, getBoards } = useContext(BoardsContext);

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  return (
    <StyledBoardsList>
      <>
        <h2>Your boards</h2>
        {boards && boards.length > 0 ? (
          boards.map((board: IBoardItemProps) => (
            <BoardItem key={board.id} props={board} />
          ))
        ) : (<h2 className='createNewBoard'>Create new board</h2>)}
      </>
    </StyledBoardsList>
  );
};

export default BoardList;
