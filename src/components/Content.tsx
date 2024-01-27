/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { Home } from './contents/Home';
import { Game } from './contents/Game';
import { About } from './contents/About';
import { Diary } from './contents/Diary';
import { Gallery } from './contents/Gallery';
import { NotFound } from './contents/NotFound';
import { Routes, Route } from 'react-router-dom';

export const Content = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About isHome={false}/>} />
        <Route path="/game" element={<Game isHome={false}/>} />
        <Route path="/diary/*" element={<Diary isHome={false}/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
