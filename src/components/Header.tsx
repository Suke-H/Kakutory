import React from 'react';
import kakutorySVG from '../assets/kakutory.svg';

const headerStyle: React.CSSProperties = {
    // 背景
    backgroundColor: '#373B7A',
    width: '100vw',
    height: '100px',

    // 文字
    color: '#E9E9E9',
    padding: '20px 0',
    fontSize: '24px',

    // 位置
    position: 'fixed' as const,
    top: '100px',
    left: '50%',
    transform: 'translateX(-50%)',

    // 文字を中央揃えに
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
};

const separateLineStyle: React.CSSProperties = {
  // 背景
  backgroundColor: '#585858',
  width: '100vw',
  height: '10px',

  // 位置
  position: 'fixed' as const,
  top: '240px',
  left: '0',

  // display: 'flex',
}

const menuContainerStyle: React.CSSProperties = {
  // 背景
  width: '100vw',
  height: '40px',

  // 配置
  display: 'flex', // 横並びに
  position: 'fixed', // 座標指定
  top: 'calc(200px + 50px)', 
  left: '0', 
};

const menuItemStyle: React.CSSProperties = {
  width: '100px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 10px',

  // 文字
  color: '#585858',
  fontWeight: 'bold',
  fontSize: '20px',
};

export const Header = (): JSX.Element => {
  return (
    <>
      <div style={headerStyle}>
        <img src={kakutorySVG} alt="kakutory" width="360" height="60" />
      </div>

      <div style={separateLineStyle}></div>

      <div style={menuContainerStyle}>
        <div style={menuItemStyle}>ABOUT</div>
        <div style={menuItemStyle}>GAME</div>
        <div style={menuItemStyle}>DIARY</div>
      </div>
    </>
  );
}
