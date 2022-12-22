import React from "react";
import hello from "../../assets/hell0.gif";
import Profile from "../../assets/Pic.jfif";

// Need to update the css for this, used to be header
import "../../styles/About.css";

function About() {
  return (
    <header className="header">
      <ul>
        <img src={hello} alt="hello gif" />
      </ul>
      <ul className="profilePic">
        <img src={Profile} alt="Recent picture of me" />
      </ul>
      <ul>👋 Hi, I’m Jeremiah</ul>
      <ul>
        👀 I’m interested in changing careers from Legal Processes and
        Administration to Software Development and Programming
      </ul>
      <ul>
        🥾 I've graduated from the University of Minnesota- Twin Cities Full
        Stack Bootcamp and am currently refining my skills and making more
      </ul>
      <ul>
        🌱 I’m currently learning Python 3.0 from FreeCodeCamp
      </ul>
      <ul>
        💞️ I’m looking to collaborate on open source projects. What really
        interests me are social media APIs, Machine Learning, Open Source
        Projects, and Unconventional Website Design.
      </ul>
      <ul>
        📫 How to reach me @juicyjerrry on twitter or my email is
        kendljeremiah@gmail.com
      </ul>
    </header>
  );
}

export default About;
