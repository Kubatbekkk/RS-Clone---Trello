import React from 'react';
import { StyledSwitch } from './styles';

const ThemeSwitch = () => {
  console.log('titi');
  return (
    <StyledSwitch>
      <label htmlFor="switch">
        <span>Switch</span>
        <input type="checkbox" name='switch' />
        <div />
      </label>
    </StyledSwitch>
  );
};

export default ThemeSwitch;
