/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import IBoardItemProps from '../BoardItem';
import { StyledBoardsList } from './styles';

interface IBoardItemProps {
  ownerId: string,
  id: string,
  name: string
}

const boards: IBoardItemProps[] = [
  { ownerId: 'kubat', id: '1', name: 'Board1' },
  { ownerId: 'kubat', id: '2', name: 'Board2' },
];

const BoardList = () => (
  <StyledBoardsList>
    <>
      <h2>Your boards</h2>
      {boards && boards.length > 0 ? (
        boards.map((board: IBoardItemProps) => (
          <IBoardItemProps key={board.id} props={board} />
        ))
      ) : (<h2 className='createNewBoard'>Create new board</h2>)}
    </>
  </StyledBoardsList>
);

export default BoardList;
