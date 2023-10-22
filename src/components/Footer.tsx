/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

const copywriteStyle: React.CSSProperties = {
    color : '#E0E0E0',
    position: 'absolute',
    right: '200px',
}

const footerStyle: React.CSSProperties = {
    position: 'relative',
    bottom: '0',
    width: '100%',
    margin: '10vh 0 0 0',
    height: '40px',
    backgroundColor: '#585858',

    // 垂直方向に中央揃え
    display: 'flex',
    alignItems: 'center',
}

export const Footer = () : JSX.Element => {
    return (
        <footer style={footerStyle}>
            <p style={copywriteStyle}>© 2023 かくひと</p>
        </footer>
    );
};
