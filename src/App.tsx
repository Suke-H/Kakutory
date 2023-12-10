/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App = (): JSX.Element =>{

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header/>
        <Content/>
      </Router>
      
      <Footer/>
    </>
  )
}
