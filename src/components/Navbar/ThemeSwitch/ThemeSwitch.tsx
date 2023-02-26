import React from 'react';
import type { ThemeProps } from 'src/types/boardsAndTasks';
import { StyledSwitch } from './styles';

const ThemeSwitch = ({ isDarkTheme, handleThemeSwitch }: ThemeProps) => (
  <StyledSwitch>
    <label htmlFor="switch">
      <span>{isDarkTheme ? 'Dark' : 'Light'}</span>
      <input
        type="checkbox"
        checked={isDarkTheme}
        id='switch'
        onChange={handleThemeSwitch}
      />
      <div />
    </label>
  </StyledSwitch>
);
export default ThemeSwitch;
