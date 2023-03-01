/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from 'src/assets/menu.png';
import Close from 'src/assets/close.png';
import SchoolIcon from 'src/assets/rs_school.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'src/config/Firebase';
import GithubIcon from 'src/assets/github.svg';
import NewBoard from './NewBoard';
import { StyledSidebar } from './styles';
import Button from '../Utils/Button';
import BoardsList from './BoardList';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNewBoardOpen, setIsNewBoardOpen] = useState<boolean>(false);

  const [user] = useAuthState(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsNewBoardOpen(false);
  }, [location]);

  const createNewBoard = () => {
    setIsOpen(false);
    setIsNewBoardOpen(true);
  };

  return (
    <>
      <NewBoard
        open={isNewBoardOpen}
        onClose={() => setIsNewBoardOpen(false)}
      />
      <button
        type='button'
        className={`openSidebar ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={Menu}
          alt="menu"
        />
      </button>
      <StyledSidebar
        isOpen={isOpen}
        className={`${isOpen ? 'openedAnimation' : ''}`}
        ref={sidebarRef}
      >
        <div>
          <Link to="/" aria-label="go to home">
            <h1>RS-Kanban</h1>
          </Link>

          <button
            type='button'
            className="closeSidebar"
            onClick={() => setIsOpen(false)}
          >
            <img src={Close} alt='close button' />
          </button>
        </div>
        {user ? (
          <>
            <BoardsList />
            <Button
              onClick={createNewBoard}
              text="+ Add New Board"
              height="50px"
              width="85%"
            />
          </>
        ) : (
          <div className="login">
            <Button
              onClick={() => navigate('/login')}
              text="Login"
              height="50px"
              width="85%"
              variant
            />
            <Button
              onClick={() => navigate('/register')}
              text="Register"
              height="50px"
              width="85%"
              variant
            />
          </div>
        )}
        <div className="team">
          <h3>Our Team</h3>
          <a
            href="https://github.com/Kubatbekkk"
            target="_blank"
            aria-label="visit Kubatbekkk github"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="dev-git" />
            {' '}
            Kubat: React/Typescript/
            Firebase
          </a>
          <a
            href="https://github.com/elMP"
            target="_blank"
            aria-label="visit elMP github"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="dev-git" />
            {' '}
            Elena:  Create-repo/GH-Projects Board
          </a>
          <a
            href="https://github.com/meloknaasfalte"
            target="_blank"
            aria-label="visit meloknaasfalte github"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="dev-git" />
            {' '}
            Vlad: Design
          </a>
        </div>

        <div className="school">
          <div>
            <a href="https://rs.school/" target='_blank' rel="noreferrer">
              <img src={SchoolIcon} alt="rs-school" />
            </a>
          </div>

        </div>
      </StyledSidebar>
    </>
  );
};
export default Sidebar;
