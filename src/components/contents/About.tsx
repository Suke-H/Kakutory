/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import kakuhito from '../../assets/about/kakuhito.png';
import x from '../../assets/about/SNS/x-logo-black.png';
import github from '../../assets/about/SNS/github-mark.png';
import zenn from '../../assets/about/SNS/zenn-logo-only.svg';
import note from '../../assets/about/SNS/note-icon.png';

import './About.css';

const Profile = (): JSX.Element => {
    return (
        <div className="container">
            <div className="logo">
                <img src={kakuhito} alt="かくひと" />

                <div className="icons">
                    <a href="https://twitter.com/kakuhito_66">
                        <img src={x}  alt="X" />
                    </a>
                    <a href="https://github.com/Suke-H/">
                        <img src={github} alt="GitHub" />
                    </a>
                    <a href='https://zenn.dev/kakuhito'>
                        <img src={zenn} alt="Zenn" />
                    </a>

                    <a href='https://note.com/kaku_suke_33'>
                        <img src={note} alt="note" />
                    </a>
                </div>
            </div>
            <div className="titles">
                <p>かくひと</p>
                <ul>
                    <li>おもいつきゲームクリエイター</li>
                    <li>かけだしWebエンジニア</li>
                </ul>
            </div>

        </div>
    );
};

export const About = (): JSX.Element => {
    return (
        <div className='about'>
            <h1 className="column">ABOUT</h1>
            <Profile />
        </div>
    );
}
