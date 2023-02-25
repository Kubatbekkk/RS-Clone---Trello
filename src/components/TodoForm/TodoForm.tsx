/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import type { Status } from 'src/types/boardsAndTasks';
import { BoardsContext } from 'src/contexts/boardsContext';
import { useLocation } from 'react-router-dom';
import { StyledTodoForm } from './styles';
import CloseIcon from '../../assets/close.png';
import Input from '../Utils/Input';
import Button from '../Utils/Button';

interface ITodoForm {
  open: boolean
  onClose: () => void
}

const TodoForm = ({ open, onClose }: ITodoForm) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<Status>('todo');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(0, 6) !== '/board') onClose();
  }, [location]);

  const { createNewTask, getTasks } = useContext(BoardsContext);

  const boardId = location.pathname.slice(7, location.pathname.length);

  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 3) {
      setError('Task name must be at least 3 characters long');
      return;
    }
    setError('');
    createNewTask({
      boardId,
      name,
      description,
      status,
    });
    getTasks(boardId);
    onClose();
    setDescription('');
    setName('');
    setStatus('todo');
  };

  if (!open) return null;

  return (
    <StyledTodoForm>
      <form className='animeButton' onSubmit={createTask}>
        <button
          aria-label="close new task form"
          type='button'
          onClick={onClose}
          className='closeBtn'
        >
          <img src={CloseIcon} alt="close" />
        </button>
        <Input
          id='taskName'
          label='Name'
          placeholder='My new task...'
          type='text'
          value={name}
          onChange={({ target }) => setName(target.value)}
          error={error}
          maxLength={70}
        />
        <Input
          id='taskDescription'
          label='Description'
          placeholder='This task is for...'
          type='text'
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          maxLength={250}
        />
        <div className='status'>
          <label htmlFor="taskStatus">
            Status:
            {' '}
          </label>
          <select
            name="taskStatus"
            id="taskStatus"
            value={status}
            onChange={({ target }) => setStatus(target.value as Status)}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

        </div>
        <Button
          height='50px'
          width='100%'
          text='Submit task'
          variant
          type='submit'
        />
      </form>
    </StyledTodoForm>
  );
};

export default TodoForm;
