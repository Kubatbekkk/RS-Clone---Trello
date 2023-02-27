/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import ConfirmMenu from 'src/components/Utils/ConfirmMenu';
import { useNavigate } from 'react-router-dom';
import { BoardsContext } from 'src/contexts/boardsContext';
import { StyledBoardsGridItem } from './styles';
import NoteIcon from '../../../assets/notes-icon.svg';
import OptionsIcon from '../../../assets/options.png';

export interface ITask {
  boardId: string;
  name: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  id?: string;
  ownerId?: string;
  createdAt?: Date;
}

interface IBoardGridItem {
  id: string;
  name: string;
  tasks: {
    todos: ITask[] | undefined;
    done: ITask[] | undefined;
  };
}
export const BoardsGridItem = ({ id, name, tasks: { todos, done } }: IBoardGridItem) => {
  const [deleteMenuOpen, setDeleteMenuOpen] = useState<boolean>(false);
  const [confirmMenu, setConfirmMenu] = useState<boolean>(false);
  const [tasksNumber, setTasksNumber] = useState<number>(0);
  const [doneNumber, setDoneNumber] = useState<number>(0);
  const navigate = useNavigate();

  const { deleteBoard } = useContext(BoardsContext);

  const confirmDelete = () => {
    deleteBoard(id);
    setConfirmMenu(false);
  };

  useEffect(() => {
    if (todos) {
      setTasksNumber(0);
      todos.forEach(() => setTasksNumber((prev) => prev + 1));
    }
    if (done) {
      setDoneNumber(0);
      done.forEach(() => setDoneNumber((prev) => prev + 1));
    }
  }, [todos, done]);

  return (
    <>
      <ConfirmMenu
        text="Are you sure you want to delete?"
        open={confirmMenu}
        onClose={() => setConfirmMenu(false)}
        onConfirm={confirmDelete}
      />
      <StyledBoardsGridItem>
        <div
          className='name'
          role='button'
          tabIndex={0}
          onClick={() => navigate(`/board/${id}`)}
        >
          <img src={NoteIcon} alt="note-icon" />
          <h1>{name}</h1>
        </div>
        <p>
          {doneNumber}
          /
          {tasksNumber}
          {' '}
          tasks done
        </p>
        {deleteMenuOpen && (
          <div className="deleteBoard">
            <button
              aria-label="Delete board"
              type='button'
              onClick={() => setConfirmMenu(true)}
            >
              Delete
            </button>
          </div>
        )}
        <img
          src={OptionsIcon}
          role='button'
          tabIndex={0}
          alt='options'
          onClick={() => setDeleteMenuOpen(!deleteMenuOpen)}
        />
      </StyledBoardsGridItem>
    </>
  );
};
