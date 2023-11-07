/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { useState } from 'react';
import kakutorySVG from '../assets/kakutory.svg';
import './Header.css';

export const Header = (): JSX.Element => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
      setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="headerContainer">

      <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-button" onClick={toggleMenu}>&times;</div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Diary</a></li>
          <li><a href="#">Gallary</a></li>
        </ul>
      </div>

      <div className="title">
        <img src={kakutorySVG} alt="kakutory" className="title-image" />
      </div>

      <div className="headerSeparateLine"></div>

      <div className="menuContainer">
        <div className="menuItem">About</div>
        <div className="menuItem">Games</div>
        <div className="menuItem">Diary</div>
        <div className="menuItem">Gallary</div>
      </div>
    </div>
  );
}

