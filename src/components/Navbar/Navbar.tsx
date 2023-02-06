/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__center'>
        <ul className='navbar__list'>
          <li>
            <Link to='/'>
              <h1 className='navbar__logo'>Trello</h1>
            </Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/boards'>Boards</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
