/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

// import { Link } from "react-router-dom";

import './Diary.css';

import { type DiarySummary, DiaryList} from './DiaryList';
  
  // 全日記のサマリ内容
  const DiarySummaries: DiarySummary[] = [
    {
      id: 1,
      title: 'G検定の勉強',
      thumbnail: '/src/assets/diarySam/General.png',
      date: '2023-11-20',
      tags: ['G検定', 'ディープラーニング'],
    },
    {
      id: 2,
      title: 'ホームページつくりました！',
      thumbnail: '/src/assets/diarySam/nikki.png',
      date: '2023-11-17',
      tags: ['Web開発', 'AWS'],
    },
    {
      id: 3,
      title: '釣りに行った話',
      thumbnail: '/src/assets/diarySam/tsuri.png',
      date: '2023-11-20',
      tags: ['日記'],
    },
  ];


export const Diary = (): JSX.Element => {
    return (
        <div className='diary'>
            <h1 className="column">DIARY</h1>

            <DiaryList diarySummaries={DiarySummaries} />
        </div>
    );
}
