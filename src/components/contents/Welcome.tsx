/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import './Welcome.css';

import welcome from '../../assets/home/welcome.png';

export const Welcome = (): JSX.Element => {
    return (
        <div className='welcome'>
            <img src={welcome} alt='welcome' />

            <div className='welcome-comment'>

            作品を完成させることも大事だけど、<br/>
            せっかくなら作る過程まで楽しみたい。<br/>

            完成した作品の紹介だけでなく、
            作ってたときの楽しさや学びもふくめて書いていきます。

            </div>
        </div>
    );
}