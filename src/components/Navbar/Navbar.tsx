import { signOut } from 'firebase/auth';
import React, { useState, useEffect, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'src/components/Utils/Button';
import { auth } from 'src/config/Firebase';
import type { ThemeProps } from 'src/types/boardsAndTasks';
import NotesIcon from '../../assets/notes-icon.svg';
import TodoForm from '../TodoForm';
import { StyledNavbar } from './styles';
import ThemeSwitch from './ThemeSwitch';

const Navbar = ({ isDarkTheme, handleThemeSwitch }: ThemeProps): JSX.Element => {
  const [actualPage, setActualPage] = useState<string>('');
  const [openNewTask, setOpenNewTask] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('user-is-not-logged-in');

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const getUsername = useCallback(() => {
    if (user && !user.displayName && user.email) {
      setUsername(user.email.split('@')[0]);
    } else if (user && user.displayName) {
      setUsername(user.displayName);
    }
  }, [user]);

  const logoutUser = async () => {
    await signOut(auth);
    navigate('/login');
  };

  useEffect(() => {
    getUsername();
  }, [getUsername]);

  useEffect(() => {
    if (pathname.slice(0, 6) === '/board' && user) setActualPage('Your tasks');
    if (pathname.slice(0, 6) === '/login') setActualPage('Login');
    if (pathname.slice(0, 9) === '/register') setActualPage('Register');
    if (pathname === '/') setActualPage('Boards');
  }, [pathname, user]);

  return (
    <>
      <TodoForm open={openNewTask} onClose={() => setOpenNewTask(false)} />
      <StyledNavbar>
        <div className="sectionName">
          <img src={NotesIcon} alt='notes-icon' />
          <h1>{actualPage}</h1>
        </div>
        <div />
        <div className='themeToggle'>
          <ThemeSwitch
            isDarkTheme={isDarkTheme}
            handleThemeSwitch={handleThemeSwitch}
          />
        </div>
        <div>
          {actualPage === 'Your tasks' && (
            <Button
              text="+ Task"
              height="40px"
              width="90px"
              onClick={() => setOpenNewTask(true)}
              pulsing
            />
          )}

          <p>{user ? `Hello, ${username}` : 'Welcome'}</p>
          {
            user && (
              <Button
                text="Logout"
                width="80px"
                height="30px"
                onClick={logoutUser}
              />
            )
          }

        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
