import React, { useContext, useState } from 'react';
import type { Status } from 'src/types/boardsAndTasks';
import { BoardsContext } from 'src/contexts/boardsContext';
import { StyledChangeStatus } from './styles';

import CloseIcon from '../../../assets/close.png';
import Button from '../../Utils/Button';

interface IChangeStatus {
  open: boolean;
  onClose: () => void;
  id: string | undefined;
  actualStatusValue: Status;
  boardId: string;
}

const ChangeStatus = ({
  open,
  onClose,
  id,
  actualStatusValue,
  boardId,
}: IChangeStatus) => {
  const [actualStatus, setActualStatus] = useState<Status>(actualStatusValue);
  const { updateTask } = useContext(BoardsContext);
  const oldStatusValue = actualStatusValue;

  if (!open) return null;

  const changeTaskStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (oldStatusValue === actualStatus) return onClose();
    updateTask(id, actualStatus, boardId);
    onClose();
  };

  return (
    <StyledChangeStatus>
      <form className="animeLeft" onSubmit={changeTaskStatus}>
        <button
          aria-label="close new task form"
          className="closeBtn"
          type="button"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="close button" />
        </button>
        <div className="status">
          <label htmlFor="taskStatus">
            Status:
            {' '}
          </label>
          <select
            name="taskStatus"
            id="taskStatus"
            value={actualStatus}
            onChange={({ target }) => setActualStatus(target.value as Status)}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <Button
          height="50px"
          text="Done"
          width="100%"
          type="submit"
          variant
        />
      </form>
    </StyledChangeStatus>
  );
};

export default ChangeStatus;
