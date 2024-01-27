/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

// import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import './Diary.css';

import { DiaryList } from './DiaryList';
import { AllDiarySummary } from './AllDiarySummary';
import { DiaryContent } from './DiaryContent';
import { type IsHomeProp } from './IsHomeProp';
  
export const Diary = ( {isHome}: IsHomeProp ): JSX.Element => {
    return (
        <div className='diary'>
          <Routes>
            <Route path="/" element={<DiaryList allDiarySummary={AllDiarySummary} />} />
            <Route path="/:id" element={<DiaryContent />} />
          </Routes>

          {isHome ? 
            <a href="/#/diary/" className='read-more'>{">>"} READ MORE</a>
            : (
              <></>
            )
          }
        </div>
    );
}
