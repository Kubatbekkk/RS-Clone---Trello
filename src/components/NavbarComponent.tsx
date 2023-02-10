/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from 'src/contexts/AuthContext';

function NavbarComponent() {
  const { currentUser } = useAuth();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  useEffect(() => setUserEmail(currentUser?.email || null), [currentUser?.email, userEmail]);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/" className='text-warning text-decoration-none'>Trello</Link></Navbar.Brand>
        <Nav className="me-auto align-items-center gap-4">
          <Link to="/" className='text-light text-decoration-none'>Home</Link>
          <Link to="/signup" className='text-light text-decoration-none'>Sign Up</Link>
          <Link to="/login" className='text-light text-decoration-none'>Log In</Link>
          <Link to="/boards" className='text-light text-decoration-none'>Boards</Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-info'>
            Signed in as:
            {' '}
            <Link to="/profile">
              {userEmail}
            </Link>
          </Navbar.Text>
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
