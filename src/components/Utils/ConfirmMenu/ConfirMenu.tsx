import React from 'react';
import { StyledConfirmMenu } from './styles';
import Button from '../Button';

interface IConfirmMenu {
  text: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void
}

const ConfirmMenu = ({
  text, open, onClose, onConfirm,
}: IConfirmMenu) => {
  if (!open) return null;
  return (
    <StyledConfirmMenu>
      <div className='animeButton'>
        <p>{text || 'Are you sure?'}</p>
        <div>
          <Button
            onClick={onConfirm}
            text="Confirm"
            height='50px'
            width='100px'
            variant
            aria-label="Confirm board delete"
          />
          <Button
            onClick={onClose}
            text="Cancel"
            height="50px"
            width="100px"
            aria-label="Cancel board delete"
          />
        </div>
      </div>
    </StyledConfirmMenu>
  );
};

export default ConfirmMenu;
