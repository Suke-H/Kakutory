// import { Link } from "react-router-dom";
import React from 'react';
import strayBot from '../../assets/home/strayBot.png';
import shikakuReversi from '../../assets/home/shikakuReversi.png';
import chocomint from '../../assets/home/chocomint.png';
import memory from '../../assets/home/memory.png';

const homeStyle: React.CSSProperties = {
    // 文字色
    color: '#585858',
    fontFamily: 'Noto Sans JP, Impact, Meiryo,ヒラギノ角ゴ, Lato, sans-serif',
    fontWeight: 'bold',
}

const imageWrapperStyle = {
    width: '60%',   // 画面全体の60%の幅
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr',  // 2つのカラムを等しく分割
    gap: '50px',  // 2つの画像の間の余白を20pxとする
    margin: '0 auto',  // 中央寄せ
};

const imageItemStyle = {
    width: '100%',  // 親のコンテナの幅を全て使用
    display: 'flex',
    justifyContent: 'center',  // 横方向の中央寄せ
};

export const Home = (): JSX.Element => {
    return (
        <div style={homeStyle}>
            <h1 style={{fontSize: '40px'}}>GAMES</h1>
            {/* <Link to="/games"> */}
                {/* <img src="https://via.placeholder.com/150" alt="games" /> */}
            {/* </Link> */}

            <div style={imageWrapperStyle}>
                <a href="https://unityroom.com/games/stray_bot">
                    <img src={strayBot} alt="STRAY BOT" style={imageItemStyle} />
                </a>
                <a href="https://unityroom.com/games/shikaku_reversi">
                    <img src={shikakuReversi} alt="シカクリバーシ"  style={imageItemStyle} />
                </a>
                <a href="https://unityroom.com/games/worship-chocomint">
                    <img src={chocomint} alt="チョコミントを崇めよ！"  style={imageItemStyle} />
                </a>
                <a href="https://unityroom.com/games/matons_memory_journey">
                    <img src={memory} alt="マトン君 記憶探しの旅"  style={imageItemStyle} />
                </a>
            </div>

            {/* <h1>ABOUT</h1> */}

            {/* <h1 style={{fontSize: '40px'}}>DIARY</h1> */}

            {/* <h1 style={{fontSize: '40px'}}>CONTACT</h1> */}
            {/* ご用件はこちらまで */}
        </div>
    );
}
