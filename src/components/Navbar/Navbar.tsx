import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'src/components/Utils/Button';
import NotesIcon from '../../assets/notes-icon.svg';
import { StyledNavbar } from './styles';

const Navbar = (): JSX.Element => {
  const [actualPage, setActualPage] = useState('');

  const { pathname } = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    if (pathname.slice(0, 6) === '/board') setActualPage('Your tasks');
    // if (pathname.slice(0, 6) === "/login") setActualPage("Login");
    // if (pathname.slice(0, 9) === "/register") setActualPage("Register");
    if (pathname === '/') setActualPage('Boards');
  }, [pathname]);
  return (
    <StyledNavbar>
      <div className="sectionName">
        <img src={NotesIcon} alt='notes-icon' />
        <h1>{actualPage}</h1>
      </div>
      <div />
      <div>
        {actualPage === 'Your tasks' && (
        <Button
          text="+"
          height="40px"
          width="40px"
        />
        )}

        <p>Hello, Username</p>
        <Button
          text="Logout"
          width="80px"
          height="30px"
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
