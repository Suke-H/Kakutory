/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { Heading } from '../Heading';
import { type IsHomeProp } from './IsHomeProp';
import { Profile } from './Profile';
import { AboutContent } from './AboutContent';

import './About.css';
import Button from '@mui/material/Button';

export const About = ({ isHome }: IsHomeProp): JSX.Element => {
    return (
        <div className='about'>
            <Heading text={"ABOUT"} />

            <Profile />

            {isHome ? 
                <a href="/#/about/" className='read-more'>
                    <Button 
                        variant="contained"
                        sx={{ 
                            marginTop: '50px',
                            marginBottom: '30px',
                            backgroundColor: '#585858',
                            '&:hover': {
                                backgroundColor: '#585858',
                            },
                            fontFamily: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"].join(','),
                    }}>
                        MORE
                    </Button>
                </a>
                
                : (
                    <AboutContent />
                )
            }
        </div>
    );
}
