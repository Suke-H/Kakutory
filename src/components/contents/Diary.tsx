/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import corn from '../../assets/corn.png';

import './Diary.css';


export const Diary = (): JSX.Element => {
    return (
        <div className='diary'>
            <h1 className="column">DIARY</h1>

            {/* 画像の挿入 */}
            <img src={corn} width="80vw" alt="corn" className="cornImg" />

            <h1 className="underConstruction">under construction...</h1>
            
        </div>
    );
}
