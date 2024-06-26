import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Feedback = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div id="panel" class="panel-container">
      <strong>How satisfied are you with our <br /> customer support performance?</strong>
      <div class="ratings-container">
        <div class="rating">
          <img src="https://image.flaticon.com/icons/svg/187/187150.svg" alt="">
          <small>Unhappy</small>
        </div>

        <div class="rating">
          <img src="https://image.flaticon.com/icons/svg/187/187136.svg" alt=""/>
          <small>Neutral</small>
        </div>

        <div class="rating active">
          <img src="https://image.flaticon.com/icons/svg/187/187133.svg" alt=""/>
          <small>Satisfied</small>
        </div>
      </div>
      <button class="btn" id="send">Send Review</button>
    </div>
    <div class="credit">Made with <span style="color:tomato">❤</span> by <a  href="https://www.learningrobo.com/">Learning Robo</a></div>
    </div>
  )
}

export default Feedback