import React from 'react';
import './Style.css'; 
import logo from  './logopayfood.png'
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt='logo de payfood'></img>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#" className="navbar__link navbar__link--active">Accueil</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">Restaurants partenaires</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">Mon compte</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">Aide</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
