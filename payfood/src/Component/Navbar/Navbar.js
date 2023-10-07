import React from 'react';
import './Style.css'; 
import logo from  './payfood-logo.svg'
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt='logo de payfood' style={{}}></img>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#" className="navbar__link" >Blog</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">Restaurants partenaires</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
