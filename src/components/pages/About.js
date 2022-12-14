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
          <span>š Hi, Iām Jeremiah</span>
        </ul>
        <ul>
          <span>
            š Iām interested in changing careers from Legal Processes and
            Administration to Software Development and Programming
          </span>
        </ul>
        <ul>
          <span>
            š„¾ I've graduated from the University of Minnesota- Twin Cities Full
            Stack Bootcamp and am currently refining my skills and making more
          </span>
        </ul>
        <ul>
          <span>š± Iām currently learning Python 3.0 from FreeCodeCamp</span>
        </ul>
        <ul>
          <span>
            šļø Iām looking to collaborate on open source projects. What really
            interests me are social media APIs, Machine Learning, Open Source
            Projects, and Unconventional Website Design.
          </span>
        </ul>
        <ul>
          <span>
            š« You can reach me @juicyjerrry on twitter or email at
            kendljeremiah@gmail.com
          </span>
        </ul>
      </ul>
    </header>
  );
}

export default About;
