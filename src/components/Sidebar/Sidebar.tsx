import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from 'src/assets/menu.png';
import Close from 'src/assets/close.png';
import NewBoard from './NewBoard';
import { StyledSidebar } from './styles';
import Button from '../Utils/Button';
import BoardsList from './BoardList';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNewBoardOpen, setIsNewBoardOpen] = useState<boolean>(false);
  const user = true;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    setIsNewBoardOpen(false);
  }, [location]);

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
              onClick={() => setIsNewBoardOpen(true)}
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
        <a
          href="https://github.com/Kubatbekkk"
          target="_blank"
          className="github"
          aria-label="visit Kubatbekkk github"
          rel="noreferrer"
        >
          @Kubatbekkk
        </a>
      </StyledSidebar>
    </>
  );
};
export default Sidebar;
