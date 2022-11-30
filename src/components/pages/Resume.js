import React from 'react';

// Here we are importing a CSS file as a dependency
import '../../styles/Content.css';

const styles ={
    text: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        color: "white",
    }
}


function Project() {
  return (
    <div >
        <h1 style={styles.text}>Personal Proficiencies</h1>
        <li style={styles.text}>HTML</li>
        <li style={styles.text}>CSS</li>
        <li style={styles.text}>JavaScript</li>
        <li style={styles.text}>Heroku</li>
        <li style={styles.text}>API Services</li>
        <li style={styles.text}>Documentation Browsing and Learning</li>
        <li style={styles.text}>Teambuilding Projects</li>
        <li style={styles.text}>MERN Structured Applications</li>
    <div>
    <h1>
        <a style={styles.text} href="https://drive.google.com/file/d/1mbNtQHEAVNOuwv9DpYw5PoAn7bjXGyp2/view">Link to Resume</a>
    </h1>
    </div>
    </div>

  );
}

export default Project;
