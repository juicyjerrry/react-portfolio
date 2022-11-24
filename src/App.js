import logo from './logo.svg';
import Header from './components/Header'
import Nav from './components/Nav'
import Project from './components/Content'
import Footer from './components/Footer'

import React from 'react';
import { useState } from 'react'

import './App.css';

const [ aboutMe, setAboutMe ] = useState ( false )

function App() {
  return (
    <div>
      <Nav
      setAboutMe = { setAboutMe } />
      <Header />
      <Project />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
