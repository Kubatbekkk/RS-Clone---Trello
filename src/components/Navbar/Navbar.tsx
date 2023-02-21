import React from 'react';
import Button from 'src/utils/Button';
import NotesIcon from '../../assets/notes-icon.svg';
import { StyledNavbar } from './styles';

const Navbar = () => (
  <StyledNavbar>
    <div className="sectionName">
      <img src={NotesIcon} alt='notes-icon' />
      <h1>ActualPage</h1>
    </div>
    <div />
    <div>
      {/* <span>Your tasks</span> */}
      <Button
        text="+"
        height="40px"
        width="40px"
      />

      <p>Hello, username</p>
      <Button
        text="Leave >"
        width="80px"
        height="30px"
      />
    </div>
  </StyledNavbar>
);

export default Navbar;
