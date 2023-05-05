import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Feedback = () => {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const location  = useLocation()
    const [data,setData] = useState([])

    useEffect(()=>{
        setData(location.state)

        console.log(data)
    },[data])
    const handleRating = (rate) => {
        setRating(rate)
    }

    const sendFeedback=()=>{
        const data = {
            author_id:author_id,
            recipient_id:recipient_id,
            listings_id:listings_id,
            rating:rating,
            comment:comment
        }
        const response = axios.post('http://127.0.0.1:8000/api/addFeedback',data)
    }

  return (
    <div>
        <Navbar></Navbar>
        <div class="credit">CheckOut success <span >❤</span></div>

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
        <div class="col-md-12">

<div class="md-form">
    <textarea type="text" id="message" onChange={e=>{setComment(e.target.value)}} name="message" rows="2" class="form-control md-textarea"></textarea>
    <label for="message">Your message</label>
</div>

</div>
      <button class="btn__feed" id="send">Send Review</button>
    </div>
    </div>
  )
}

export default Feedback