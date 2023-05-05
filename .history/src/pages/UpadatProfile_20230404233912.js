import React from 'react'
import Profile from './Profile'

const UpadatProfile = () => {
  return (
    <div>
        <Profile></Profile>
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                <h1 class="text-dark mb-4">Update Your Profile</h1>
                <hr></hr>
                <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control"  placeholder="Enter Username"/>
                </div>

                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control"  placeholder="Enter Phone No"/>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="Email" class="form-control"  placeholder="Enter Email"/>
                </div>
                <div class="form-group">
                  <label>Description</label>
                   <textarea class="form-control"  placeholder="Enter your Description"></textarea>
                </div>
                
                <p class="text-muted text-center">Change Password</p>
                <div class="form-group">
                  <label>Password</label>
                  <input type="Email" class="form-control"  placeholder="Enter Password"/>
                </div>
                
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input type="Email" class="form-control"  placeholder="Renter Password"/>
                </div>
                
               
                
              </div>
  
              <div class="box-footer">
                 
                 
                      <button type="submit" class="btn btn-primary">Update</button>
                   
              </div>
            </form>
                </div>
              </div>
            </div>
        </section>  
    </div>
  )
}

export default UpadatProfile