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
            date: "2022-10-27", 
            description: "最初にゲーム制作に取り組んだ作品です。ロボットの『マトン君』を導くパズルゲーム。友達に描いてもらい、今でもお気に入りなロボです。" 
        },
        { 
            url: "https://unityroom.com/games/shikaku_reversi", 
            imageUrl: shikakuReversi,
            title: "シカクリバーシ", 
            date: "2023-08-31", 
            description: "ZeF君(@ZeF_games)との共同制作。「丸みもマス目もないリバーシ」です、ぜひ遊んでみてください。東京ゲームダンジョン3に出展しました。" 
        },
        { 
            url: "https://unityroom.com/games/konatsu_enikki", 
            imageUrl: konatsu, 
            title: "こなつのえにっき", 
            date: "2024-08-04", 
            description: "けめるさん(@qemelly_ongaku)とunity1weekの練習としてつくった作品。はじめてイラスト側に回って共同制作した作品です。" 
        },
        { 
            url: "https://unityroom.com/games/tank_strike", 
            imageUrl: TankStrike, 
            title: "TANK STRIKE!!", 
            date: "2024-10-01", 
            description: "RDAG(@paldynojosh)さんのTinyTankを使った3D作品です。タンクがかわいいので、ほのぼのした感じを目指しました。一発ネタです。" 
        },
        
    ];    
    const u1wgames = [
        {   
            url: "https://unityroom.com/games/kaerimichi", 
            imageUrl: kiro, 
            title: "帰路", 
            date: "2024-08-18", 
            description: "けめるさん(@qemelly_ongaku)との共同制作。パネルで2色をひっくり返して、少女を正しいゴールへ導くパズルゲーム。今後も育てたい作品です。" 
        },
        {   
            url: "https://unityroom.com/games/dear_past_diary", 
            imageUrl: DearPastDiary, 
            title: "『Dear past diary, 』", 
            date: "2024-04-01", 
            description: "実家の勉強机をごそごそしながら、自分の日記を読み返してみるノベルゲームです。ぜひ遊んでみてください。" 
        },
        { 
            url: "https://unityroom.com/games/matons_memory_journey", 
            imageUrl: memory, title: "マトン君 記憶探しの旅", 
            date: "2023-06-26", 
            description: "サイコロを振ってマトン君を進める、タイムアタック式すごろく。進めば進むほど、記憶の解像度が上がっていきます。" 
        },
        { 
            url: "https://unityroom.com/games/worship-chocomint", 
            imageUrl: chocomint,
            title: "チョコミントを崇めよ！", 
            date: "2024-08-15", 
            description: "「チョコミントを全世界に布教しよう！」なカルト風クッキークリッカーです。1週間でここまでイラストを描いてくれた友達に感謝。" 
        },
        { 
            url: "https://unityroom.com/games/full_tank_by_kakusuke", 
            imageUrl: Fulltank, 
            title: "FULL TANK", 
            date: "2022-09-11", 
            description: "unity1week初参加の作品です。音楽に合わせてバケツを操作し、水をキャッチしながらネズミをブロック。マルチタスクな音ゲーを目指したかった。" 
        },
        { 
            url: "https://unityroom.com/games/company-re-innovation", 
            imageUrl: Company, 
            title: "カンパニーRe:イノベーション", 
            date: "2023-01-01", 
            description: "Slay the SpireみたいなマップをGitツリーにできないか模索したゲームです。黒歴史です。" 
        },
    ];

    const homegames = [
        {   
            url: "https://unityroom.com/games/stray_bot", 
            imageUrl: strayBot, 
            title: "STRAY BOT", 
            date: "2022-10-27", 
            description: "最初にゲーム制作に取り組んだ作品です。マトン君というロボットを導くパズルゲーム。友達に描いてもらい、今でもお気に入りなロボです" 
        },
        { 
            url: "https://unityroom.com/games/shikaku_reversi", 
            imageUrl: shikakuReversi,
            title: "シカクリバーシ", 
            date: "2023-08-31", 
            description: "ZeF君(@ZeF_games)との共同制作。「丸みもマス目もないリバーシ」です、ぜひ遊んでみてください。東京ゲームダンジョン3に出展しました。" 
        },
        {   
            url: "https://unityroom.com/games/kaerimichi", 
            imageUrl: kiro, 
            title: "帰路", 
            date: "2024-08-18", 
            description: "けめるさん(@qemelly_ongaku)との共同制作。パネルで2色をひっくり返して、少女を正しいゴールへ導くパズルゲーム。今後も育てたい作品です。" 
        },
        {   
            url: "https://unityroom.com/games/dear_past_diary", 
            imageUrl: DearPastDiary, 
            title: "『Dear past diary, 』", 
            date: "2024-04-01", 
            description: "実家の勉強机をごそごそしながら、自分の日記を読み返してみるノベルゲームです。ぜひ遊んでみてください。" 
        },
    ];

    // Home の場合の内容
  if (isHome) {
    return (
      <div className='game'>
        <Heading text={"GAME"} />

        <div className='imageWrapper'>
            {homegames.map(game => (
                    <GameCard key={game.url} {...game} />
            ))}
        
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
              fontSize: { xs: '12px', md: '20px' },
              padding: '5px 40px' 
            }}>
            &gt;&gt; READ MORE
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
                {"への参加作品です。2022年9月『ためる』から参加をはじめ、計6回参加しました。"}
        </Typography>

      <div className='imageWrapper'>
            {u1wgames.map(game => (
                    <GameCard key={game.url} {...game} />
            ))}
        
      </div>
    </div>
  );
}

