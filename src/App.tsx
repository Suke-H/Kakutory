/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import { Content } from './components/Content';
import { Footer } from './components/Footer';

export const App = (): JSX.Element =>{

  return (
    <>
      <Router>
        <Header/>
        <Content/>
      </Router>
      
      <Footer/>
    </>
  )
}
