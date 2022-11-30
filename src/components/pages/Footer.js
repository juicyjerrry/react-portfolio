import React from 'react';
import Github from '../../assets/github.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'

const styles = {
  footerBox: {
    display: 'absolute',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  image: {
    width: '40px',
    height: '40px',
    background: "white",
  }

};

function Footer() {
  return (
    <li style={styles.footerBox}>
      <a href="https://github.com/juicyjerrry"><img style={styles.image} src={Github} alt="link to my github" /></a>
      <a href="https://twitter.com/JuicyJerrry"><img style={styles.image} src={Twitter} alt="link to my twitter"/></a>
      <a href="https://www.linkedin.com/in/jeremiah-kendl-49707413b/"><img style={styles.image} src={Linkedin} alt="link to my linkedin"/></a>
    </li>
  );
};

export default Footer;
