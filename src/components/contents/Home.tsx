/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
// import { useState } from 'react';
import strayBot from '../../assets/home/strayBot.png';
import shikakuReversi from '../../assets/home/shikakuReversi.png';
import chocomint from '../../assets/home/chocomint.png';
import memory from '../../assets/home/memory.png';

import '../../App.css';

// interface ImageWithHoverProps {
//     url: string;
//     src: string;
//     alt: string;
//     style: React.CSSProperties;
//   }
  
// const ImageWithHover: React.FC<ImageWithHoverProps> = ({ src, alt, style }) => {
//     return (
//       <div className="image-container">
//         <img src={src} alt={alt} />
//       </div>
//     );
// };

// const [isHovered, setIsHovered] = useState(false);

// const handleMouseEnter = (): void => {
// setIsHovered(true);
// };

// const handleMouseLeave = (): void => {
// setIsHovered(false);
// };
  

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

    // boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)'
};

const imageItemStyle = {
    width: '100%',  // 親のコンテナの幅を全て使用
    display: 'flex',
    justifyContent: 'center',  // 横方向の中央寄せ

    transition: 'transform 0.3s',
    // transform: isHovered ? 'scale(1.2)' : 'scale(1)',
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
                    <img 
                        src={strayBot} 
                        alt="STRAY BOT" 
                        style={imageItemStyle} 
                        className='img-button'
                        // onMouseEnter={handleMouseEnter}
                        // onMouseLeave={handleMouseLeave}
                    />
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
