/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
// import strayBot from '../../assets/home/strayBot.png';
// import shikakuReversi from '../../assets/home/shikakuReversi.png';
// import chocomint from '../../assets/home/chocomint.png';
// import memory from '../../assets/home/memory.png';
import { Game } from './Game';
import { Diary } from './Diary';

import './Home.css';

export const Home = (): JSX.Element => {
    return (
        <div className='home'>
            <Game/>
            <Diary/>

            {/* <h1>ABOUT</h1> */}

            {/* <h1>DIARY</h1> */}

            {/* <h1>CONTACT</h1> */}
            {/* ご用件はこちらまで */}
        </div>
    );
}
