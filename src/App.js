import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import NavTabs from "./components/NavTabs";

import React from 'react';
import { useState } from 'react'

// import './App.css';

const [ aboutMe, setAboutMe ] = useState ( false )

function App() {
  return (
    <div>
      <Nav
      setAboutMe = { setAboutMe }Tabs />
      <PortfolioContainer />
    </div>
  );
}

export default App;
