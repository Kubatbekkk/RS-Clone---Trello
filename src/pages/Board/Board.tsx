import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledBoard } from './styles';

const Board = () => {
  const { id } = useParams();

  return (<StyledBoard>Board</StyledBoard>);
};

export default Board;
