import React, { useEffect, useState } from 'react';
import './App.css';
import Images from "./images.json";

function App() {

  return (
    <div className='app'>
      <div className="navbar">
        <img className="home-logo" src="../logo192.png"/>
        <div className='menu'>
          <p>Home</p>
          <p>About</p>
          <p>Cars</p>
        </div>
        <button>Contact Us</button>
      </div>

      <div className='hero-page'>

      </div>

      {
        Images && Images.map(img => (
          <div key={img.id} className='car-card' >
            <img className="car-img" src={`${img.url}.jpg`} alt=''/>
            <img className="hero-img" src={`${img.user.profile_image}.webp`} alt=''/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
