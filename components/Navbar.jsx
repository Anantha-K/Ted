import React, { useState } from 'react';
import '../styles/Nav.css';
import logo from '/images.png'; // Import your logo file

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // JSX for mobile responsiveness
  const mobileNavbar = (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <div className="burger-menu" onClick={toggleNav}>
        {isNavOpen ? (
          <div className="cross-icon">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>

      <ul className={`nav-items ${isNavOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/Speakers">Speakers</a></li>
        <li><a href="/Sponsors">Sponsors</a></li>
        <li><a href="/Team">Team</a></li>
      </ul>
      <div className="logo-container">
        <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
      </div>
    </nav>
  );

  return (
    <React.Fragment>
      {mobileNavbar} {/* Render mobile navbar */}
    </React.Fragment>
  );
};

export default Navbar;
