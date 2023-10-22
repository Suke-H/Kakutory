/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import './App.css'
import { Header } from './components/Header'
import { Content } from './components/Content';

export const App = (): JSX.Element =>{

  return (
    <>
      <Header/>
      <Content/>
    </>
  )
}
