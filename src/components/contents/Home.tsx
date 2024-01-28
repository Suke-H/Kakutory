/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { About } from './About';
import { Game } from './Game';
import { Diary } from './Diary';
// import { Welcome } from './Welcome';

import './Home.css';

export const Home = (): JSX.Element => {
    return (
        <div className='home'>
            {/* <Welcome /> */}
            <About isHome={true}/>
            <Game isHome={true}/>
            <Diary isHome={true}/>

            {/* <h1>CONTACT</h1> */}
            {/* ご用件はこちらまで */}
        </div>
    );
}
