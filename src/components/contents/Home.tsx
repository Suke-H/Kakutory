/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import strayBot from '../../assets/home/strayBot.png';
import shikakuReversi from '../../assets/home/shikakuReversi.png';
import chocomint from '../../assets/home/chocomint.png';
import memory from '../../assets/home/memory.png';

import './Home.css';

interface LinkedImageProps {
    url: string;
    src: string;
    alt: string;
  }
  
const LinkedImage = (props: LinkedImageProps): JSX.Element => {
    return (
        <a href={props.url}>
            <img src={props.src} 
                alt={props.alt} 
                className='imageItem'
            />
        </a>
    )
}

export const Home = (): JSX.Element => {

    return (
        <div className='home'>
            <h1 className="column">GAMES</h1>
            {/* <Link to="/games"> */}
                {/* <img src="https://via.placeholder.com/150" alt="games" /> */}
            {/* </Link> */}

            {/* <div className="homeSeparateLine"></div> */}

            <div className='imageWrapper'>
                <LinkedImage 
                    url="https://unityroom.com/games/stray_bot"
                    src={strayBot}
                    alt="STRAY BOT"
                />
                <LinkedImage 
                    url="https://unityroom.com/games/shikaku_reversi"
                    src={shikakuReversi}
                    alt="シカクリバーシ"
                />
                <LinkedImage 
                    url="https://unityroom.com/games/worship-chocomint"
                    src={chocomint}
                    alt="チョコミントを崇めよ！"
                />
                <LinkedImage 
                    url="https://unityroom.com/games/matons_memory_journey"
                    src={memory}
                    alt="マトン君 記憶探しの旅"
                />
            </div>

            {/* <h1>ABOUT</h1> */}

            {/* <h1>DIARY</h1> */}

            {/* <h1>CONTACT</h1> */}
            {/* ご用件はこちらまで */}
        </div>
    );
}
