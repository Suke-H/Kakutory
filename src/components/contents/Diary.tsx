/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

// import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import { Heading } from '../Heading';
import { DiaryList } from './DiaryList';
import { AllDiarySummary } from './AllDiarySummary';
import { DiaryContent } from './DiaryContent';
import { type IsHomeProp } from './IsHomeProp';

import './Diary.css';
import Button from '@mui/material/Button';
  
export const Diary = ( {isHome}: IsHomeProp ): JSX.Element => {
    return (
        <div className='diary'>

          <Heading text={"DIARY"} />

          <Routes>
            <Route path="/" element={<DiaryList allDiarySummary={AllDiarySummary} />} />
            <Route path="/:id" element={<DiaryContent />} />
          </Routes>

          {isHome ? 
              <a href="/#/diary/" className='read-more'>
                  <Button 
                      variant="contained"
                      sx={{ 
                          marginTop: {xs: "20px", md: '50px'},
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
              <></>
            )
          }
        </div>
    );
}
