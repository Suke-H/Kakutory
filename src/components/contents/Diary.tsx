/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import { Heading } from '../Heading';
import { DiaryList } from './DiaryList';
import { AllDiarySummary } from './AllDiarySummary';
import { type IsHomeProp } from './IsHomeProp';

import './Diary.css';
import Button from '@mui/material/Button';

export const Diary = ( {isHome}: IsHomeProp ): JSX.Element => {
    return (
        <div className='diary'>

          <Heading text={"DIARY"} />

          <DiaryList allDiarySummary={AllDiarySummary} isHome={isHome} />

          {isHome ?
              <a href="/diary" className='read-more'>
                  <Button 
                    variant="contained"
                    sx={{ 
                      marginTop: { xs: '40px', md: '80px' },
                      marginBottom: '50px',
                      backgroundColor: '#585858',
                      '&:hover': {
                        backgroundColor: '#585858',
                      },
                      fontSize: { xs: '16px', md: '20px' },
                      padding: '5px 40px' 
                    }}>
                    &gt;&gt; READ MORE
                  </Button>

              </a>
            : (
              <></>
            )
          }
        </div>
    );
}
