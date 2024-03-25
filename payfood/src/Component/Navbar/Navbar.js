import React, { useState } from 'react';
import './nav-style.css';
import logo from './logo-payfood.svg';

function NavigationBar({ onPageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (page) => {
    setMenuOpen(false);
    onPageChange(page);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="navbar__logo">
        <img src={logo} alt='logo de payfood' style={{}} onClick={() => handleLinkClick('landing')}></img>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" onClick={() => handleLinkClick('restaurants')}>
            Espace restaurateurs
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about-us" className="navbar__link" onClick={() => handleLinkClick('landing')}>
            Blog
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact-us" className="navbar__link contact" onClick={() => handleLinkClick('landing')}>
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" onClick={() => handleLinkClick('newsletter')}>
            Newsletter
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
