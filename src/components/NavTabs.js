import React from 'react';
import styling from "../styles/App.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul class="topnav">
        <a
          class="topnav"
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Now
        </a>
        <a
          class="topnav"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
        <a
          class="topnav"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        <a
          class="topnav"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
    </ul>
  );
}

export default NavTabs;
