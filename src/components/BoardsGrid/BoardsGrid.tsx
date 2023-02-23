import React, { ReactNode } from 'react';
import { StyledBoardsGrid } from './styles';

const BoardsGrid = ({ children }: { children: ReactNode[] }) => (
  <StyledBoardsGrid className='animeLeft'>
    <div>{ children }</div>
  </StyledBoardsGrid>
);

export default BoardsGrid;
