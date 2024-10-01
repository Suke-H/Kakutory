/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { Heading } from '../Heading';
import { Heading2 } from '../Heading2';
import { type IsHomeProp } from './IsHomeProp';
import { Typography, Link, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

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
import TankStrike from '../../assets/game/TankStrike.png';

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

interface GameCardProps {
    url: string;
    imageUrl: string;
    title: string;
    date: string;
    description: string;
}

const GameCard = ({ url, imageUrl, title, date, description }: GameCardProps): JSX.Element => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardActionArea href={url}>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const Game = ({ isHome }: IsHomeProp  ): JSX.Element => {

    const games = [
        {   
            url: "https://unityroom.com/games/stray_bot", 
            imageUrl: strayBot, 
            title: "STRAY BOT", 
            date: "2024-09-30", 
            description: "最初にゲーム制作に取り組んだ作品" 
        },
        { 
            url: "https://unityroom.com/games/shikaku_reversi", 
            imageUrl: shikakuReversi,
            title: "シカクリバーシ", 
            date: "2024-08-15", 
            description: "A challenging puzzle game." 
        },
        { 
            url: "https://unityroom.com/games/dear_past_diary", 
            imageUrl: konatsu, 
            title: "こなつのえにっき", 
            date: "2024-10-01", 
            description: "Daily life and adventures of Konatsu." 
        },
        { 
            url: "https://unityroom.com/games/tank_strike", 
            imageUrl: TankStrike, 
            title: "TANK STRIKE!!", 
            date: "2024-10-01", 
            description: "Daily life and adventures of Konatsu." 
        },
        
    ];    
    const u1wgames = [
        {   
            url: "https://unityroom.com/games/kaerimichi", 
            imageUrl: kiro, 
            title: "帰路", 
            date: "2024-09-30", 
            description: "Explore as a robot..." 
        },
        {   
            url: "https://unityroom.com/games/dear_past_diary", 
            imageUrl: DearPastDiary, 
            title: "『Dear past diary, 』", 
            date: "2024-09-30", 
            description: "Explore as a robot..." 
        },
        { 
            url: "https://unityroom.com/games/matons_memory_journey", 
            imageUrl: memory, title: "マトン君 記憶探しの旅", 
            date: "2024-10-01", 
            description: "Join Maton in a quest for his lost memories." },
        { 
            url: "https://unityroom.com/games/worship-chocomint", 
            imageUrl: chocomint,
            title: "チョコミントを崇めよ！", 
            date: "2024-08-15", 
            description: "A challenging puzzle game." 
        },
    
        
        { 
            url: "https://unityroom.com/games/full_tank_by_kakusuke", 
            imageUrl: Fulltank, 
            title: "FULL TANK", 
            date: "2024-10-01", 
            description: "Fuel up and roll out on an explosive adventure." 
        },
        { 
            url: "https://unityroom.com/games/company-re-innovation", 
            imageUrl: Company, 
            title: "カンパニーRe:イノベーション", 
            date: "2024-10-01", 
            description: "Revolutionize the company from the inside out." 
        },
    ];

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

        <Heading2 text={"リリース作品"} />
        <Typography gutterBottom component="div" 
            sx={{
                marginBottom: "40px",
                marginLeft: "10%",
                marginRight: "10%",
                fontSize: { xs: '12px', md: '16px' }
                }} >
                {"2022年の『STRAY BOT』からゲーム制作をはじめました（こっちをもっと増やしたいな...）"}
        </Typography>

      <div className='imageWrapper'>
      {games.map(game => (
                    <GameCard key={game.url} {...game} />
            ))}
      </div>

        <Heading2 text={"Unity1Week作品"} />
        <Typography gutterBottom component="div" 
            sx={{
                marginBottom: "40px",
                marginLeft: "10%",
                marginRight: "10%",
                fontSize: { xs: '12px', md: '16px' }
                }} >
                <Link href={"https://unityroom.com/unity1weeks"} sx={{ color: '#1976d2', textDecoration: 'none' }}>
                    {"「Unity1週間ゲームジャム」"}
                </Link>
                {"への参加作品です。2022年9月『ふる』から参加をはじめ、計6回参加しました。"}
        </Typography>

      <div className='imageWrapper'>
            {u1wgames.map(game => (
                    <GameCard key={game.url} {...game} />
            ))}
        
      </div>
    </div>
  );
}

