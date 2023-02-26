import React from 'react';
import type { ThemeProps } from 'src/types/boardsAndTasks';
import { StyledSwitch } from './styles';

const ThemeSwitch = ({ isDarkTheme, setIsDarkTheme }: ThemeProps) => (

  <StyledSwitch>
    <label htmlFor="switch">
      <span>{!isDarkTheme ? 'Light' : 'Dark'}</span>
      <input
        type="checkbox"
        checked={isDarkTheme}
        id='switch'
        onChange={() => setIsDarkTheme(!isDarkTheme)}
      />
      <div />
    </label>
  </StyledSwitch>
);

export default ThemeSwitch;
