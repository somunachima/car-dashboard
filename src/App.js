import React, { useEffect, useState } from 'react';
import './App.css';
import Images from "./images.json";

function App() {

  return (
    <div className='app'>
      <div className="navbar">
        <img className="home-logo" src="../logo192.png"/>
        <div className='menu'>
          <a>Home</a>
          <a>About</a>
          <a>Cars</a>
        </div>
        <a className="contact-btn" href="mailto:som@motorway.com?subject=Hello!">Contact Us</a>
      </div>

      <div className='hero-page'>
        <h1><strong><i>Find the best car for you.</i></strong></h1>
        <a className="sign-btn" src="">Sign Up</a>
      </div>
      <h3 className='search-title'><strong><i>Read what people are saying about the car of your choice</i></strong></h3>
      <div className='search-bar'>

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
