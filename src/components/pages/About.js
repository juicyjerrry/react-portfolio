import React from "react";
import hello from "../../assets/hell0.gif";
import Profile from "../../assets/Pic.jfif";

// Need to update the css for this, used to be header
import "../../styles/About.css";

function About() {
  return (
    <header class="header">
      <ul>
        <img class="car" src={hello} alt="hello gif" />
      </ul>
      <ul class="profilePic">
        <img src={Profile} alt="Recent picture of me" />
      </ul>
      <ul class="Now">
        <ul>
          <span>👋 Hi, I’m Jeremiah</span>
        </ul>
        <ul>
          <span>
            👀 I’m interested in changing careers from Legal Processes and
            Administration to Software Development and Programming
          </span>
        </ul>
        <ul>
          <span>
            🥾 I've graduated from the University of Minnesota- Twin Cities Full
            Stack Bootcamp and am currently refining my skills and making more
          </span>
        </ul>
        <ul>
          <span>🌱 I’m currently learning Python 3.0 from FreeCodeCamp</span>
        </ul>
        <ul>
          <span>
            💞️ I’m looking to collaborate on open source projects. What really
            interests me are social media APIs, Machine Learning, Open Source
            Projects, and Unconventional Website Design.
          </span>
        </ul>
        <ul>
          <span>
            📫 You can reach me @juicyjerrry on twitter or email at
            kendljeremiah@gmail.com
          </span>
        </ul>
      </ul>
    </header>
  );
}

export default About;
