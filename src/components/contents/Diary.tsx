/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

// import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import './Diary.css';

import { DiaryList } from './DiaryList';
import { AllDiarySummary } from './AllDiarySummary';
import { DiaryContent } from './DiaryContent';
  
export const Diary = (): JSX.Element => {
    return (
        <div className='diary'>
            <h1 className="column">DIARY</h1>

          <Routes>
            <Route path="/" element={<DiaryList allDiarySummary={AllDiarySummary} />} />
            <Route path="/:id" element={<DiaryContent />} />
          </Routes>
        </div>
    );
}
