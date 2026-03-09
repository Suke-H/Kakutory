/* eslint-disable react/react-in-jsx-scope */
import { Heading } from '../Heading';
import { Heading2 } from '../Heading2';
import { type IsHomeProp } from './IsHomeProp';
import { Typography, Link, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

import './Game.css';
import Button from '@mui/material/Button';

import strayBot from '../../assets/game/strayBot.png?url';
import shikakuReversi from '../../assets/game/shikakuReversi.png?url';
import chocomint from '../../assets/game/chocomint.png?url';
import memory from '../../assets/game/memory.png?url';
import DearPastDiary from '../../assets/game/DearPastDiary.png?url';
import Fulltank from '../../assets/game/Fulltank.png?url';
import Company from '../../assets/game/Company.png?url';
import kiro_u1w from '../../assets/game/kiro_u1w.png?url';
import kiro_steam from '../../assets/game/kiro_steam.png?url';
import shinyu from '../../assets/game/shinyu.png?url';
import konatsu from '../../assets/game/konatsu.png?url';
import TankStrike from '../../assets/game/TankStrike.png?url';


interface GameCardProps {
    url: string;
    imageUrl: string;
    title: string;
    date: string;
    description: string;
    isHome: boolean;
}

const GameCard = ({ url, imageUrl, title, date, description, isHome }: GameCardProps): JSX.Element => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardActionArea href={url}>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={title}
                />
                
                    
                    {!isHome && (
                        <>
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
                        </>
                    )}
                
            </CardActionArea>
        </Card>
    );
};

export const Game = ({ isHome }: IsHomeProp  ): JSX.Element => {

    const games = [
        {   
            url: "https://store.steampowered.com/app/3409620/_/?l=japanese", 
            imageUrl: kiro_steam, 
            title: "帰路", 
            date: "2025-12-29", 
            description: "早く家に帰りたい少女いこいを、「白黒反転」を使ってゴールへ導くパズルゲームです。初めてのSteam、初めての4人チーム制作です。ゼヒアソンデネ" 
        },
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
            url: "https://unityroom.com/games/moshimoshi_shinyu",
            imageUrl: shinyu,
            title: "もしもし、しんゆう", 
            date: "2025-08-11", 
            description: "夏もそろそろ終わるし、花火大会に行きたい。久しぶりに親友に電話をかけて、何とか興味をひかせよう。うすいしお(@ususio0unity)さんが描いたベルくんが、とてもかわいいのです。" 
        },
        {   
            url: "https://unityroom.com/games/kaerimichi", 
            imageUrl: kiro_u1w, 
            title: "帰路（unity1week版）", 
            date: "2024-08-18", 
            description: "Steam版『帰路』の元ネタです。ジャムのお題が「かえす」→「白黒を返す」＋「家に帰す」という発想。キャラが自動で道を見つけてくれる、ちょっと変わったパズルゲームになりました。" 
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
            description: "「チョコミントを全世界に布教しよう！」なカルト風クッキークリッカーです。1週間でここまでイラストを描いてくれた友達(@acro_works)に感謝。" 
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
            url: "https://store.steampowered.com/app/3409620/_/?l=japanese", 
            imageUrl: kiro_steam, 
            title: "帰路", 
            date: "2025-12-29", 
            description: "Steamで公開しました！4人で作成したゲームとなります。オモシロイヨゼヒアソンデネ。" 
        },
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
            url: "https://unityroom.com/games/moshimoshi_shinyu",
            imageUrl: shinyu,
            title: "もしもし、しんゆう",
            date: "2025-08-11",
            description: "うすいしお(@ususio0unity)さんとの共同制作。花火大会に行きたいし、久しぶりに親友に電話をかけて興味をひこう。ベルくんがとてもかわいい"
        },
    ];

    // Home の場合の内容
  if (isHome) {
    return (
      <div className='game'>
        <Heading text={"GAME"} />

        <div className='imageWrapper'>
            {homegames.map(game => (
                    <GameCard key={game.url} {...game} isHome={isHome} />
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
              fontSize: { xs: '16px', md: '20px' },
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
                fontSize: { xs: '14px', md: '16px' }
                }} >
                {"2022年の『STRAY BOT』からゲーム制作をはじめました。いろいろ作っていくぞ"}
        </Typography>

      <div className='imageWrapper'>
      {games.map(game => (
                    <GameCard key={game.url} {...game} isHome={isHome} />
            ))}
      </div>

        <Heading2 text={"Unity1Week作品"} />
        <Typography gutterBottom component="div" 
            sx={{
                marginBottom: "40px",
                marginLeft: "10%",
                marginRight: "10%",
                fontSize: { xs: '14px', md: '16px' }
                }} >
                <Link href={"https://unityroom.com/unity1weeks"} sx={{ color: '#1976d2', textDecoration: 'none' }}>
                    {"「Unity1週間ゲームジャム」"}
                </Link>
                {"への参加作品です。2022年9月『ためる』から参加をはじめ、計7回参加しました。"}
        </Typography>

      <div className='imageWrapper'>
            {u1wgames.map(game => (
                    <GameCard key={game.url} {...game} isHome={isHome} />
            ))}
        
      </div>
    </div>
  );
}

