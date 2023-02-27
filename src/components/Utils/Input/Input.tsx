import React from 'react';
import { StyledInputWrapper } from './styles';

interface IInput {
  type: string;
  placeholder: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id: string;
  label: string;
  error?: string;
  maxLength?: number;
}

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  id,
  label,
  error,
  maxLength,
}: IInput) => (
  <StyledInputWrapper
    error={error}
  >
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      type={type || 'text'}
    />
    {error && <p className="errorMsg">{error}</p>}
  </StyledInputWrapper>
);
export default Input;
