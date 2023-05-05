import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'

const Feedback = () => {
  return (
    <div>
        <Navbar></Navbar>
        <!--Modal Launch Button-->
<button type="button" class="btn btn-info btn-lg openmodal" data-toggle="modal" data-target="#myModal">Open
  Modal</button>

<!--Division for Modal-->
<div id="myModal" class="modal fade" role="dialog">

  <!--Modal-->
  <div class="modal-dialog">

    <!--Modal Content-->
    <div class="modal-content">

      <!-- Modal Header-->
      <div class="modal-header">
        <h3>Feedback Request</h3>

        <!--Close/Cross Button-->
        <button type="button" class="close" data-dismiss="modal" style="color: white;">&times;</button>
      </div>

      <!-- Modal Body-->
      <div class="modal-body text-center">
        <i class="far fa-file-alt fa-4x mb-3 animated rotateIn icon1"></i>
        <h3>Your opinion matters</h3>
        <h5>Help us improve our product? <strong>Give us your feedback.</strong></h5>
        <hr>
        <h6>Your Rating</h6>
      </div>

      <!-- Radio Buttons for Rating-->
      <div class="form-check mb-4">
        <input name="feedback" type="radio">
        <label class="ml-3">Very good</label>
      </div>
      <div class="form-check mb-4">
        <input name="feedback" type="radio">
        <label class="ml-3">Good</label>
      </div>
      <div class="form-check mb-4">
        <input name="feedback" type="radio">
        <label class="ml-3">Mediocre</label>
      </div>
      <div class="form-check mb-4">
        <input name="feedback" type="radio">
        <label class="ml-3">Bad</label>
      </div>
      <div class="form-check mb-4">
        <input name="feedback" type="radio">
        <label class="ml-3">Very Bad</label>
      </div>

      <!--Text Message-->
      <div class="text-center">
        <h4>What could we improve?</h4>
      </div>
      <textarea type="textarea" placeholder="Your Message" rows="3"></textarea>


      <!-- Modal Footer-->
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