import React from 'react';
import './nav-style.css'; 
import logo from  './payfood-logo.svg'
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt='logo de payfood' style={{}}></img>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#about-us" className="navbar__link" >Blog</a>
        </li>
        <li className="navbar__item">
          <a href="#restaurants-partenaires" className="navbar__link">Restaurants partenaires</a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
