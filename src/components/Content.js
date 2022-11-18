import React from 'react';
import Fetch from '../assets/Fetch-A-Pet-Screenshot.jpg'

// Here we are importing a CSS file as a dependency
import '../styles/Content.css';

function Project() {
  return (
    <header className="content">
      <h1>My Projects</h1>
    <div class="flex-container">
    <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <h2>Fetch-a-pet</h2>
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
    </div>
    <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <h2>Project 2</h2>
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
    </div>
    <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <h2>Project 3</h2>
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
    </div>
    <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <h2>Project 4</h2>
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
    </div>
    <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <h2>Project 5</h2>
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
    </div>
    <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <h2>Project 6</h2>
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
    </div>
    </div>
    </header>
  );
}

export default Project;
