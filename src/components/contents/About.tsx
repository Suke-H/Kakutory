/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { AboutContent } from './AboutContent';
import { Profile } from './Profile';
import './About.css';
import { type IsHomeProp } from './IsHomeProp';

export const About = ({ isHome }: IsHomeProp): JSX.Element => {
    return (
        <div className='about'>
            <h1 className="column">ABOUT</h1>

            <Profile />

            {isHome ? 
                <a href="/#/about/" className='read-more'>{">>"} READ MORE</a>
                : (
                    <AboutContent />
                )
            }
        </div>
    );
}
