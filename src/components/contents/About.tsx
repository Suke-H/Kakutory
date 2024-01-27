/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import { AboutContent } from './AboutContent';
import { Profile } from './Profile';
import './About.css';
import { type IsHomeProp } from './IsHomeProp';
import Button from '@mui/material/Button';

export const About = ({ isHome }: IsHomeProp): JSX.Element => {
    return (
        <div className='about'>
            <h1 className="column">ABOUT</h1>

            <Profile />

            {isHome ? 
                <a href="/#/about/" className='read-more'>
                    <Button 
                        variant="contained"
                        sx={{ 
                            marginTop: '50px',
                            marginButtom: '50px',
                            backgroundColor: '#585858',
                            '&:hover': {
                                backgroundColor: '#585858',
                            },
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
