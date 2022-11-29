import React, { useState } from 'react';
import NavTabs from './NavTabs'; //good
import Resume from './pages/Resume'; //good
import About from './pages/About'; //good
import Portfolio from './pages/Portfolio'; //good
import Contact from './pages/Contact'; //good

export default function PortfolioContainer() {
  //our homepage is the initial state
  const [currentPage, setCurrentPage] = useState('About');

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}