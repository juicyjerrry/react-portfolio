import React from 'react';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav className="Nav">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Register</a>
        </div>
        <div>
          <a href="#">Now</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
    </nav>
  );
}
