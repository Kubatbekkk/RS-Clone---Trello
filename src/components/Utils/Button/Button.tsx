import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  onClick?: () => void;
  text: string;
  icon?: unknown;
  width: string;
  height: string;
  variant?: boolean;
  pulsing?: true;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  onClick,
  text,
  icon,
  width,
  height,
  variant,
  pulsing,
  type,
}: ButtonProps) {
  return (
    // @ts-ignore
    <StyledButton
      type={type || 'button'}
      onClick={onClick}
      width={width}
      height={height}
      variant={variant}
      pulsing={pulsing}
    >
      <>
        {icon && <img src={icon as string} alt='button' />}
        {text}
      </>
    </StyledButton>
  );
}

export default Button;
