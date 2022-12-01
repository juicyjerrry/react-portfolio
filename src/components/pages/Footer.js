import React from 'react';
import Github from '../../assets/github.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'

const styles = {
  footerBox: {
    position: 'fixed',
    bottom: '0',
  },
  image: {
    width: '40px',
    height: '40px',
    background: "white",
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
  }

};

function Footer() {
  return (
    <div style={styles.div}>
      <li style={styles.footerBox}>
        <a href="https://github.com/juicyjerrry"><img style={styles.image} src={Github} alt="link to my github" /></a>
        <a href="https://twitter.com/JuicyJerrry"><img style={styles.image} src={Twitter} alt="link to my twitter"/></a>
        <a href="https://www.linkedin.com/in/jeremiah-kendl-49707413b/"><img style={styles.image} src={Linkedin} alt="link to my linkedin"/></a>
      </li>
    </div>
  );
};

export default Footer;
