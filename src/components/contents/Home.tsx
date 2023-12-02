/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
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
