import React, { useState } from 'react';
import './nav-style.css';
import logo from './logo-payfood.svg';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="navbar__logo">
        <img src={logo} alt='logo de payfood' style={{}}></img>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#restaurants-partenaires" className="navbar__link">Espace restaurateurs</a>
        </li>
        <li className="navbar__item">
          <a href="#about-us" className="navbar__link">Blog</a>
        </li>
        <li className="navbar__item">
          <a href="#contact-us" className="navbar__link contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
