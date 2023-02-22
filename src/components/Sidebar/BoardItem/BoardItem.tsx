/* eslint-disable react/prop-types */
import React from 'react';
import NotesIcon from 'src/assets/notes-icon.svg';
import { useNavigate } from 'react-router-dom';
import { StyledBoardItem } from './styles';

interface ItemProps {
  props: {
    id: string;
    name: string;
  }
}

const BoardItem = ({ props }: ItemProps) => {
  const { id, name } = props;
  const navigate = useNavigate();
  return (
    <StyledBoardItem active onClick={() => navigate(`/board/${id}`)}>
      <div>
        <img src={NotesIcon} alt="notes" />
        <p>{name}</p>
      </div>
    </StyledBoardItem>
  );
};

export default BoardItem;
