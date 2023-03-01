import React, { useContext, useState } from 'react';
import CloseIcon from 'src/assets/close.png';
import { BoardsContext } from 'src/contexts/boardsContext';
import Input from '../../Utils/Input';
import Button from '../../Utils/Button';
import { StyledNewBoard } from './styles';

interface INewBoard {
  open: boolean;
  onClose: () => void;
}

const NewBoard = ({ open, onClose }: INewBoard) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const { createNewBoard } = useContext(BoardsContext);

  const createBoard = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) return setError('Board name cannot be blank');
    setError('');
    setName('');
    createNewBoard(name);
    onClose();
    return null;
  };

  if (!open) return null;

  return (
    <StyledNewBoard>
      <form onSubmit={createBoard} className="animeLeft">
        <button
          aria-label="close new task form"
          className="closeBtn"
          type="button"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="close button" />
        </button>
        <Input
          id="boardName"
          label="Board name"
          placeholder="Study board.."
          type="text"
          onChange={({ target }) => setName(target.value)}
          value={name}
          error={error}
          maxLength={15}
        />
        <Button
          height="50px"
          width="100%"
          text="Create board"
          type="submit"
          variant
        />
      </form>
    </StyledNewBoard>
  );
};

export default NewBoard;
