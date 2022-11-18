import React from 'react';
import hello from '../assets/hell0.gif'
import Profile from '../assets/Pic.jfif'

// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>___About Me</h1>
        <ul>
        <img src={hello} alt="hello gif" />
        </ul>
        <ul>
        I'm @juicyjerrry
        </ul>
        <ul className="profilePic">
        <img src={Profile} alt="Recent picture of me" />
        </ul>
        <ul>
        👀 I'm interested in changing careers from Legal Processes and Administration to Software Development and Programming
        </ul>
        <ul>
        🥾 I'm working in a full-stack bootcamp learning all different types of things
        </ul>
        <ul>
        📫 You can reach me @juicyjerrry on twitter or email at kendljeremiah@gmail.com
        </ul>
    </header>
  );
}

export default Header;
