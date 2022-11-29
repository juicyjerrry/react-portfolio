import React from 'react';
import Fetch from '../../assets/Fetch-A-Pet-Screenshot.jpg'

// Here we are importing a CSS file as a dependency
import '../../styles/Content.css';

function Project() {
  return (
    <header className="content">
      <h1>My Projects</h1>
      <div class="flex-container">
        <div>
          <a href="https://github.com/juicyjerrry/Project-2-Fetch-a-Pet" ><img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" /></a>
          <h2>Fetch-a-pet</h2>
          <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Project-2-Fetch-a-Pet"><img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" /></a>
          <h2>Fetch-a-pet</h2>
          <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Project-2-Fetch-a-Pet"><img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" /></a>
          <h2>Fetch-a-pet</h2>
          <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Project-2-Fetch-a-Pet"><img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" /></a>
          <h2>Fetch-a-pet</h2>
          <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Project-2-Fetch-a-Pet"><img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" /></a>
          <h2>Fetch-a-pet</h2>
          <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Project-2-Fetch-a-Pet"><img src={Fetch} alt="Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets" /></a>
          <h2>Fetch-a-pet</h2>
          <p>Fetch-a-pet, a project I worked on that allowed for streamlined adoption of local pets</p>
        </div>
      </div>
    </header>
  );
}

export default Project;
