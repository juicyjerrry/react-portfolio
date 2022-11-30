import React from 'react';
import Fetch from '../../assets/Fetch-A-Pet-Screenshot.jpg'
import Mern from '../../assets/ThoughtMachine.PNG'
import PWA from '../../assets/PWATextEditor.png'
import Ecommerce from '../../assets/EcommerceDatabase.png'
import Forecast from '../../assets/ForecastAPI.png'


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
          <a href="https://github.com/juicyjerrry/ecommerce-project-13"><img src={Ecommerce} alt="An online commercial database that can keep track of product sale and movement" /></a>
          <h2>Ecommerce Database</h2>
          <p>An online commercial database that can keep track of product sale and movement</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Thought-Machine"><img src={Mern} alt="Mern Database allowing for simple thought posting" /></a>
          <h2>Thought Machine</h2>
          <p>Mern Database allowing for simple thought posting</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/PWA-Text-Editor-19"><img src={PWA} alt="An offline capable text editor" /></a>
          <h2>PWA Text Editor App</h2>
          <p>An offline capable text editor</p>
        </div>
        <div>
          <a href="https://github.com/juicyjerrry/Weather-API"><img src={Forecast} alt="Taps into a weather API to give the weather forecast for different locations" /></a>
          <h2>Weather API</h2>
          <p>Taps into a weather API to give the weather forecast for different locations</p>
        </div>
      </div>
    </header>
  );
}

export default Project;
