/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/game">Game</Link></li>
              {/* <li><Link to="/diary">Diary</Link></li> */}
              {/* <li><Link to="/gallery">Gallery</Link></li> */}
            </ul>
        </nav>
      </div>

      <div className="title">
        <img src={kakutorySVG} alt="kakutory" className="title-image" />
      </div>

      <div className="headerSeparateLine"></div>

      <div className="menuContainer">
        <Link to="/" className="menuItem">Home</Link>
        <Link to="/about" className="menuItem">About</Link>
        <Link to="/game" className="menuItem">Game</Link>
        <Link to="/diary" className="menuItem">Diary</Link>
        <Link to="/gallery" className="menuItem">Gallery</Link>
      </div>
    </div>
  );
}

