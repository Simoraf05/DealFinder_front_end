import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';

const Feedback = () => {
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
      }

  return (
    <div>
        <Navbar></Navbar>
        <div id="panel" class="panel-container">
            <strong>How satisfied are you with our <br /> customer support performance?</strong>
            <div class="ratings-container">
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo'
            />
        </div>
        <textarea type="textarea" placeholder="Your Message" rows="3"></textarea>

      <button class="btn__feed" id="send">Send Review</button>
    </div>
    <div class="credit">Made with <span >❤</span> by <a  href="https://www.learningrobo.com/">Learning Robo</a></div>
    </div>
  )
}

export default Feedback