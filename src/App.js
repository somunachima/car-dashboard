import React, { useEffect, useState } from 'react';
import './App.css';
import Images from "./images.json";
import Popup from './Popup';
import SignUp from './SignUp';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='app'>
      <div className="navbar">
        <img className="home-logo" src="../logo192.png" alt="logo"/>
        <a className="contact-btn" href="mailto:som@motorway.com?subject=Hello!">Contact Us</a>
      </div>

      <div className='hero-page'>
        <h1><strong><i>Find the best car for you.</i></strong></h1>
        <button className="sign-btn" onClick={() => setButtonPopup(true)}>Sign Up</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h6>Sign Up</h6>
          <span className="task-type">
            <SignUp/>
          </span>
        </Popup>
      </div>
      <h3 className='search-title'><strong><i>Read what people are saying about your car of choice</i></strong></h3>

      <div className='search'>
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input className="search-bar" id="input" name="name" type="text" placeholder="Search cars by colour" autofocus></input>
      </div>
      <div id="display-data"></div>

      {
        Images && Images.map(img => (
          <div key={img.id} className='car-card' >
            <img className="car-img" src={`${img.url}.jpg`} alt=''/>
            <div className="card-right">
            <img className="hero-img" src={`${img.user.profile_image}.webp`} alt=''/>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
