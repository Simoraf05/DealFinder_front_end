import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Feedback = () => {
  return (
    <div>
        <Navbar></Navbar>
            <div className='title__'>CheckOut success</div>
            <button type="button" class="btn btn-info btn-lg openmodal" data-toggle="modal" data-target="#myModal">Add feedback</button>
            <Link to='/' class="btn btn-info btn-lg openmodal">Go Home</Link>
            <div id="myModal" class="modal fade" role="dialog">

            <div class="modal-dialog">

                <div class="modal-content">

                <div class="modal-header">
                    <h3>Feedback Request</h3>

                    <button type="button" class="close" data-dismiss="modal" >&times;</button>
                </div>

                <div class="modal-body text-center">
                    <i class="far fa-file-alt fa-4x mb-3 animated rotateIn icon1"></i>
                    <h3>Your opinion matters</h3>
                    <h5>Help us improve our product? <strong>Give us your feedback.</strong></h5>
                    <hr/>
                    <h6>Your Rating</h6>
                </div>

                <span class="star-rating">
                    <input type="radio" name="rating1" value="1"/><i></i>
                    <input type="radio" name="rating1" value="2"/><i></i>
                    <input type="radio" name="rating1" value="3"><i></i>
                    <input type="radio" name="rating1" value="4"><i></i>
                    <input type="radio" name="rating1" value="5"><i></i>
                </span>

                <div class="text-center">
                    <h4>What could we improve?</h4>
                </div>
                <textarea type="textarea" placeholder="Your Message" rows="3"></textarea>


                <div class="modal-footer">
                    <a href="" class="btn btn-primary">Send
                    <i class="fa fa-paper-plane"></i>
                    </a>
                    <a href="" class="btn btn-outline-primary" data-dismiss="modal">Cancel</a>
                </div>

                </div>

            </div>

            </div>
    </div>
  )
}

export default Feedback