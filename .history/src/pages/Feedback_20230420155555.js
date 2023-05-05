import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import StarsRating from "react-star-ratings";
import { useState } from 'react';

const Feedback = () => {
    const [value, setValue] = useState(0);

  return (
    <div>
        <Navbar></Navbar>
        <div id="panel" class="panel-container">
      <strong>How satisfied are you with our <br /> customer support performance?</strong>
      <div class="ratings-container">
      <StarsRating value={value} onChange={value=>{setValue(value)}} />

      </div>
      <button class="btn__feed" id="send">Send Review</button>
    </div>
    <div class="credit">Made with <span >❤</span> by <a  href="https://www.learningrobo.com/">Learning Robo</a></div>
    </div>
  )
}

export default Feedback