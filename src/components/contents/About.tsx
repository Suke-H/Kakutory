/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { Heading } from '../Heading';
import { type IsHomeProp } from './IsHomeProp';
import { Profile } from './Profile';
import { AboutContent } from './AboutContent';

import './About.css';
// import Button from '@mui/material/Button';

export const About = ({ isHome }: IsHomeProp): JSX.Element => {
    return (
        <div className='about'>
            <Heading text={"ABOUT"} />
            <Profile />
            
            {isHome ? <></> : <AboutContent />}
        </div>
    );
}
