/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { AboutContent } from './AboutContent';
import { Profile } from './Profile';
import './About.css';

export const About = (): JSX.Element => {
    return (
        <div className='about'>
            <h1 className="column">ABOUT</h1>
            <Profile />
            <AboutContent />
        </div>
    );
}
