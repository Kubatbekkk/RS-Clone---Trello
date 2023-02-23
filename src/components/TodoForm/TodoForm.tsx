import React, { useState } from 'react';
import { StyledTodoForm } from './styles';
import CloseIcon from '../../assets/close.png';
import Input from '../Utils/Input';
import Button from '../Utils/Button';

interface ITodoForm {
  open: boolean
  onClose: () => void
}

type StatusType = 'todo' | 'doing' | 'done';

const TodoForm = ({ open, onClose }: ITodoForm) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<StatusType>('todo');

  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 3) {
      setError('Task name must be at least 3 characters long');
      return;
    }
    setError('');
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
            onChange={({ target }) => setStatus(target.value as StatusType)}
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
