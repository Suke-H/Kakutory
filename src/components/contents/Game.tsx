/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import strayBot from '../../assets/home/strayBot.png';
import shikakuReversi from '../../assets/home/shikakuReversi.png';
import chocomint from '../../assets/home/chocomint.png';
import memory from '../../assets/home/memory.png';

import './Game.css';
import { type IsHomeProp } from './IsHomeProp';
import Button from '@mui/material/Button';

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

export const Game = ({ isHome }: IsHomeProp  ): JSX.Element => {

    return (
        <div className='game'>
            <h1 className="column">GAMES</h1>
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

            {isHome ? 
                <a href="/#/game/" className='read-more'>
                    <Button 
                        variant="contained"
                        sx={{ 
                            marginTop: '80px',
                            marginBottom: '50px',
                            backgroundColor: '#585858',
                            '&:hover': {
                                backgroundColor: '#585858',
                            },
                        }}>
                        MORE
                    </Button>
                </a>
                : (
                    <></>
                )
            }

        </div>
    );
}
