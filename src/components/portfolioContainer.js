import React, { useState } from 'react';
import NavTabs from './NavTabs'; //good
import Resume from './pages/Resume'; //good
import About from './pages/About'; //good
import Portfolio from './pages/Portfolio'; //good
import Contact from './pages/Contact'; //good
import mailLogo from "../assets/mailLogo.png"
import logo from "../assets/logo100x100.png"

export default function PortfolioContainer() {
  //our homepage is the initial state
  const [currentPage, setCurrentPage] = useState('About');

  //inline styling for this page
  const styles = {
    mailLogo: {
      width: "50px",
      height: "50px",
    }
  };
  
  // renders the page dependening on value of currentPage
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div class="topnavB"></div>
      <div class="sidenavL">
        <a styles={styles.mailLogo} href="https://twitter.com/JuicyJerrry">
          <img styles={styles.mailLogo} src={logo} />
        </a>
      </div>
      <div class="sidenavR">
        <a href="#contact">
          <img styles={styles.mailLogo} src={mailLogo} />
        </a>
      </div>
      {renderPage()}
    </div>
  );
}