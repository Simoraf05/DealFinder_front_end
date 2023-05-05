import React from 'react'
import Profile from './Profile'

const MyAccount = () => {
  return (
    <div>
        <Profile></Profile>
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
  
                <div class="content-wrapper">
    
    <section class="content-header">
      <h1>
        Profile
      </h1>
    </section>

    <section class="content ">
  <div class="box box-primary">
            <div class="box-body box-profile">
              <img class="profile-user-img img-responsive img-circle" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture">

              <h3 class="profile-username text-center">John Abia</h3>

              <p class="text-muted text-center">Administrator</p>
              <p class="text-muted text-center">biochemistry technologist</p>
              <p class="text-muted text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p class="text-muted text-center">johnabia@gmail.com</p>
              <p class="text-muted text-center">+264 813345387</p>
              

              

              
            </div>
          </div>


      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">Profile update</h3>

              
            </div>
           
            
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control"  placeholder="Enter Username"/>
                </div>
                <div class="form-group">
                  <label>Specialization</label>
                  <input type="text" class="form-control"  placeholder="Enter Specialization"/>
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
    <!-- /.content -->
  </div>  
                </div>
              </div>
            </div>
        </section>    
    </div>
  )
}

export default MyAccount