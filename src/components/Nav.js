import React from 'react';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav className="Nav">
        <div>
          <a href="#AboutMe">About Me</a>
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
