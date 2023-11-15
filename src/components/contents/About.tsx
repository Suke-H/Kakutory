/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import corn from '../../assets/corn.png';

import strayBot from '../../assets/home/strayBot.png';
import shikakuReversi from '../../assets/home/shikakuReversi.png';
import chocomint from '../../assets/home/chocomint.png';
import memory from '../../assets/home/memory.png';

import './About.css';

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

export const About = (): JSX.Element => {
    return (
        <div className='about'>
            <h1 className="column">ABOUT</h1>
            <div className='imageWrapper'>
                <img src={corn} width="100" alt="corn" />
                under construction...
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
        </div>
    );
}
