/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { Heading } from '../Heading';
import { type IsHomeProp } from './IsHomeProp';

import './Game.css';
import Button from '@mui/material/Button';

import strayBot from '../../assets/game/strayBot.png';
import shikakuReversi from '../../assets/game/shikakuReversi.png';
import chocomint from '../../assets/game/chocomint.png';
import memory from '../../assets/game/memory.png';
import DearPastDiary from '../../assets/game/DearPastDiary.png';
import Fulltank from '../../assets/game/Fulltank.png';
import Company from '../../assets/game/Company.png';
import kiro from '../../assets/game/kiro.png';
import konatsu from '../../assets/game/konatsu.png';

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

    // Home の場合の内容
  if (isHome) {
    return (
      <div className='game'>
        <Heading text={"GAME"} />

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
            url="https://unityroom.com/games/dear_past_diary"
            src={DearPastDiary}
            alt="『Dear past diary, 』"
          />
        </div>
        <a href="/#/game/" className='read-more'>
          <Button 
            variant="contained"
            sx={{ 
              marginTop: { xs: '40px', md: '80px' },
              marginBottom: '50px',
              backgroundColor: '#585858',
              '&:hover': {
                backgroundColor: '#585858',
              },
            }}>
            MORE
          </Button>
        </a>
      </div>
    );
  } 

  // Home ではない場合の内容
  return (
    <div className='game'>
      <Heading text={"GAME"} />

      <Heading text={"GAME"} />

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
      </div>

      <Heading text={"Unity1Week作品"} />

      <div className='imageWrapper'>
        <LinkedImage 
          url="https://unityroom.com/games/dear_past_diary"
          src={kiro}
          alt="帰路"
        />
        <LinkedImage 
          url="https://unityroom.com/games/dear_past_diary"
          src={konatsu}
          alt="こなつのえにっき"
        />
        <LinkedImage 
          url="https://unityroom.com/games/dear_past_diary"
          src={DearPastDiary}
          alt="『Dear past diary, 』"
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
        <LinkedImage 
          url="https://unityroom.com/games/matons_memory_journey"
          src={Fulltank}
          alt="FULL TANK"
        />
        <LinkedImage 
          url="https://unityroom.com/games/matons_memory_journey"
          src={Company}
          alt="カンパニーRe:イノベーション"
        />
        
        
      </div>
    </div>
  );
}

