import React from 'react';
//need react hook to get state changes to operate
import '../styles/Nav.css';

export default function Nav( setAboutMe ) {
  return (
    <nav className="Nav">
        <div>
          <a href="#AboutMe" onClick= { setAboutMe() }>About Me</a>
        </div>
        <div>
          <a href="#Content">Portfolio</a>
        </div>
        <div>
          <a href="#Contact">Contact</a>
        </div>
        <div>
          <a href="#Resume">Resume</a>
        </div>
    </nav>
  );
}
