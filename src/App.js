import React, { useState } from 'react';
import RevealOnScroll from "@phntms/reveal-on-scroll";
import ModalImage from "react-modal-image";
import './App.css';
import Images from "./images.json";
import Popup from './Popup';
import SignUp from './SignUp';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [signs, setSigns] = useState([]);

  const signUp = (sign) => {
    const id = uuidv4();
    const newSign = { id, ...sign }
    setSigns([...signs, newSign]);
    Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully signed up!'
    })
    localStorage.setItem("Signed up!", JSON.stringify([...signs, newSign]));
  }

  new RevealOnScroll();

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
            <SignUp onSave={signUp}/>
          </span>
        </Popup>
      </div>
      <h3 className='search-title'><strong><i>Read what people are saying about your car of choice</i></strong></h3>

      <div className='search'>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input className="search-bar" id="input" name="name" type="text" placeholder="Search cars by colour" autoFocus></input>
      </div>
      <div id="display-data"></div>

      {
        Images && Images.map(img => (
          <div key={img.id} className='car-card' >
            <ModalImage
                className="car-img"
                small={`${img.url}.jpg`}
                large={`${img.url}.jpg`}
                alt=""
              />;
            <div className="card-right">
              <div className="profile">
                <img className="hero-img" src={`${img.user.profile_image}.webp`} alt=''/>
                <p className="name"><strong>{`${img.user.name}`}</strong></p>
              </div>
              <p className="bio">{`${img.user.bio}`}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
