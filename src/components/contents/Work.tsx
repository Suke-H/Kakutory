/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import corn from '../../assets/corn.png';

import './Work.css';

export const Work = (): JSX.Element => {
    return (
        <div className='work'>
            <h1 className="column">GALLERY</h1>

            {/* 画像の挿入 */}
            <img src={corn} width="80vw" alt="corn" className="cornImg" />

            <h1 className="underConstruction">under construction...</h1>
            
        </div>
    );
}
