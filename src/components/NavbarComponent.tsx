/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button, Container, Nav, Navbar,
} from 'react-bootstrap';
import { useAuth } from 'src/contexts/AuthContext';

function NavbarComponent() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
    }
  };
  // useEffect(() => setUserEmail(currentUser?.email || null), [currentUser?.email, userEmail]);
  return (
    <Navbar bg="primary" variant="dark" className='shadow'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-warning text-decoration-none">
            Trello
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto align-items-center gap-4">
          <Link to="/" className="text-light text-decoration-none">
            Home
          </Link>
          {/* <Link to="/login" className='text-light text-decoration-none'>Log In</Link> */}
          {currentUser && (
            <Link to="/boards" className="text-light text-decoration-none">
              Boards
            </Link>
          )}
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {currentUser ? (
            <Navbar.Text className="text-info d-flex align-items-center gap-2">
              Signed in as:
              {' '}
              <Link to={`/${currentUser.uid}`} className="mx-auto">
                {currentUser.email}
              </Link>
              <Button type="button" onClick={handleLogout} className="btn btn-secondary btn-sm">
                Log Out
              </Button>
            </Navbar.Text>
          ) : (
            <div className="d-flex align-items-center gap-4">
              <Link to="/login" className="text-light text-decoration-none">
                Log In
              </Link>
              <Link to="/signup" className="text-warning text-decoration-none">
                Sign Up
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (
  //   <nav className='navbar'>
  //     <div className='navbar__center'>
  //       <ul className='navbar__list'>
  //         <li>
  //           <Link to='/'>
  //             <h1 className='navbar__logo'>Trello</h1>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link to='/'>Home</Link>
  //         </li>
  //         <li>
  //           <Link to='/boards'>Boards</Link>
  //         </li>
  //         <li>
  //           <Link to='/login'>Login</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}
export default NavbarComponent;
