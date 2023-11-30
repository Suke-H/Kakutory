/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import corn from '../../assets/corn.png';

import './About.css';

export const About = (): JSX.Element => {
    return (
        <div className='about'>
            <h1 className="column">ABOUT</h1>

            {/* 画像の挿入 */}
            <img src={corn} width="80vw" alt="corn" className="cornImg" />

            <h1 className="underConstruction">under construction...</h1>
            
        </div>
    );
}
