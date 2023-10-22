import React from 'react';
import kakutorySVG from '../assets/kakutory.svg';

const widthRatio = '98%';

const headerContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '2vh',
}

const titleStyle: React.CSSProperties = {
    // 背景
    backgroundColor: '#373B7A',
    width: widthRatio,
    height: '140px',

    // 垂直方向に中央揃え
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const separateLineStyle: React.CSSProperties = {
  // 背景
  backgroundColor: '#585858',
  width: widthRatio,
  height: '15px',
}

const menuContainerStyle: React.CSSProperties = {
  // 背景
  width: widthRatio,
  height: '40px',
  // 配置
  display: 'flex', // 横並びに
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
  fontSize: '24px',
  fontFamily: 'Noto Sans JP, Impact, Meiryo,ヒラギノ角ゴ, Lato, sans-serif',
};

export const Header = (): JSX.Element => {
  return (
    <div style={headerContainerStyle}>
      <div style={titleStyle}>
        <img src={kakutorySVG} alt="kakutory" width="360" height="60" />
      </div>

      <div style={separateLineStyle}></div>

      <div style={menuContainerStyle}>
      <div style={menuItemStyle}>ABOUT</div>
      <div style={menuItemStyle}>GAMES</div>
      <div style={menuItemStyle}>DIARY</div>
      </div>
    </div>
  );
}
