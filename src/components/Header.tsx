
import React from 'react';
import kakutorySVG from '../assets/kakutory.svg';

const headerStyle = {
    // 背景
    backgroundColor: '#373B7A',
    width: '100vw',
    height: '100px',

    // 文字
    color: '#E9E9E9',
    padding: '20px 0',
    fontSize: '24px',

    // 位置
    position: 'fixed',
    top: '100px',
    transform: 'translateX(-50%)',

    // 文字を中央揃えに
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 

  };

export const Header = () => {
  return (
    <div style={headerStyle}>
        <img src={kakutorySVG} alt="kakutory" width="360" height="60" />
    </div>
  );
}
