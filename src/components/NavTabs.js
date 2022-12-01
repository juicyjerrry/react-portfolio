import React from 'react';

const styles = {
	header: {
  	display: "flex",
    
    flexDirection: "row",

    flexWrap: "noWrap",

    justifyContent: "space-between",

    alignItems: 'flex-start',

    alignContent: 'flex-start',

    background: "black",

    color: "white",

    textDecoration: "none",
    
  },
  inline: {
    display: "inline",
  },
  spaceAround: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    textDecoration: "none",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.spaceAround}>
      <li style={styles.inline}>
        <a
          style={styles.text}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li style={styles.inline}>
        <a
          style={styles.text}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li style={styles.inline}>
        <a
          style={styles.text}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li style={styles.inline}>
        <a
          style={styles.text}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
