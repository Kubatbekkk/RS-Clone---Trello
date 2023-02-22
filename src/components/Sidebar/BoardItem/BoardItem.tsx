import React from 'react';
import NotesIcon from 'src/assets/notes-icon.svg';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
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

// BoardItem.propTypes = {
//   props: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default BoardItem;
