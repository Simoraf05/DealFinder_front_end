import React from 'react'
import '../styles/feedback.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Feedback = () => {
  return (
    <div>
        <Navbar></Navbar>
            <Link to='/' class="btn btn-info btn-lg openmodal">Go Home</Link>
            <div  class="modal fade">

            <div class="modal-dialog">

                uuuu

            </div>

            </div>
    </div>
  )
}

export default Feedback