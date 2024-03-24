import React from 'react';
import '../styles/Nav.css';

const Navbar = () => {
  return (
    <nav className='navba'>
      <div className='nav'>
        <ul className='nav-items'>
          <li>Home</li>
          <li>Speakers</li>
          <li>Sponsors</li>
          <li>Team</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
