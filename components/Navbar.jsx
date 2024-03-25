import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <div className='Navbarbg'>
        <nav className='NavB'>
          <ul className='Nav'>
            <h1>X</h1>
            <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
              <Link to='/'>Home</Link>
            </li>
            <li className={activeItem === 'Speakers' ? 'active' : ''} onClick={() => handleItemClick('Speakers')}>
              <Link to='#Speakers'>Speakers</Link>
            </li>
            <li className={activeItem === 'Sponsors' ? 'active' : ''} onClick={() => handleItemClick('Sponsors')}>
              <Link to='/Sponsors'>Sponsors</Link>
            </li>
            <li className={activeItem === 'Team' ? 'active' : ''} onClick={() => handleItemClick('Team')}>
              <Link to='/Team'>Team</Link>
            </li>
          </ul>
          <Link to='/Register' class="buttonn" onClick={() => handleItemClick('')} >
  Register
</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
