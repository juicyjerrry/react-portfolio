import React from 'react';
import Fetch from '../assets/Fetch-A-Pet-Screenshot.jpg'

// Here we are importing a CSS file as a dependency
import '../styles/Content.css';

function Content() {
  return (
    <header className="content">
      <h1>My Projects</h1>
    <div class="flex-container">
       <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
        <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
       </div>
       <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
       </div>
       <div>
        <img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" />
       </div>
    </div>
    </header>
  );
}

export default Content;
