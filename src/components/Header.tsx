/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import kakutorySVG from '../assets/kakutory.svg';
import './Header.css';

export const Header = (): JSX.Element => {
  return (
    <div className="headerContainer">
      <div className="title">
        <img src={kakutorySVG} alt="kakutory" width="360" height="60" />
      </div>

      <div className="separateLine"></div>

      <div className="menuContainer">
        <div className="menuItem">ABOUT</div>
        <div className="menuItem">GAMES</div>
        <div className="menuItem">DIARY</div>
      </div>
    </div>
  );
}

