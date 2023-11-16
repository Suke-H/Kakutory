/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import corn from '../../assets/corn.png';

import './Gallery.css';


export const Gallery = (): JSX.Element => {
    return (
        <div className='gallery'>
            <h1 className="column">GALLERY</h1>

            {/* 画像の挿入 */}
            <img src={corn} width="80vw" alt="corn" className="cornImg" />

            <h1 className="underConstruction">under construction...</h1>
            
        </div>
    );
}
