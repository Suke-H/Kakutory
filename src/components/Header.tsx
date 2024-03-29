/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import kakutoryPNG from '../assets/kakutory.png';
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
          <nav>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/game" onClick={toggleMenu}>Game</Link></li>
              <li><Link to="/diary" onClick={toggleMenu}>Diary</Link></li>
              <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            </ul>
        </nav>
      </div>

      <Link to="/" className="title">
        <img src={kakutoryPNG} alt="kakutory" className="title-image" />
      </Link>

      <div className="headerSeparateLine"></div>

      <div className="menuContainer">
        <Link to="/about" className="menuItem">About</Link>
        <Link to="/game" className="menuItem">Game</Link>
        <Link to="/diary" className="menuItem">Diary</Link>
        <Link to="/gallery" className="menuItem">Gallery</Link>
      </div>
    </div>
  );
}

