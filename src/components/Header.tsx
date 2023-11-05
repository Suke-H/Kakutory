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
          <li><a href="#">ホーム</a></li>
          <li><a href="#">サービス</a></li>
          <li><a href="#">プロフィール</a></li>
          <li><a href="#">お問い合わせ</a></li>
        </ul>
      </div>

      <div className="title">
        <img src={kakutorySVG} alt="kakutory" className="title-image" />
      </div>

      <div className="separateLine"></div>

      {/* <div className="menuContainer">
        <div className="menuItem">ABOUT</div>
        <div className="menuItem">GAMES</div>
        <div className="menuItem">DIARY</div>
      </div> */}
    </div>
  );
}

