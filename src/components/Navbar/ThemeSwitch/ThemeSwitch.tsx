import React from 'react';
import type { ThemeProps } from 'src/types/boardsAndTasks';
import { StyledSwitch } from './styles';
import DarkIcon from '../../../assets/dark.svg';
import LightIcon from '../../../assets/light.svg';

const ThemeSwitch = ({ isDarkTheme, handleThemeSwitch }: ThemeProps) => (
  <StyledSwitch>
    <label htmlFor="switch">
      <span>
        {isDarkTheme
          ? <img src={DarkIcon} alt='dark-theme' />
          : <img src={LightIcon} alt='light-theme' />}
      </span>
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
