import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledBoard } from './styles';

const Board = () => {
  const { id } = useParams();

  return (
    <StyledBoard>
      Board:
      {id}
    </StyledBoard>
  );
};

export default Board;
