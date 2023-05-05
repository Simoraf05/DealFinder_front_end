  import React, { useEffect, useState } from 'react'
  import Profile from './Profile'
  import '../styles/updateP.css'
  import axios from 'axios'
  import { toast } from 'react-toastify'


  const UpadatProfile = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [adresse,setAdresse] = useState('')
    const [pwd,setPwd] = useState('')
    const [Cpwd,setCpwd] = useState('')
    const [image, setImage] = useState([]);
    const [newInfoUser,setNewInfoUser] = useState([])
    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    const handelImage=(file)=>{
      setImage(file[0])
    }





    const handleUpdate = async (e) => {
      e.preventDefault();
        const formData = new FormData();

        if (name) {
          formData.append('name',name);
        }
        
        if (email) {
          formData.append('email',email);
        }
        
        if (phone) {
          formData.append('phone',phone);
        }
        
        if (adresse) {
          formData.append('location',adresse);
        }
        
        if (image) {
          formData.append('profile_picture',image);
        }
        console.log(formData)
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/updateProfile/${currentUser.id}`, {
            method: 'POST',
            body: formData
          });
          const data = await response.json();
          console.log(data.user)
          localStorage.setItem('user',JSON.stringify(data.user))
        } catch (error) {
          console.error(error);
        }




    };
    return (
      <div>
          <Profile></Profile>
          <section class="mesAnn__">
              <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-xl-9">
                  <h1 class="text-dark mb-4">Update Your Profile</h1>
                  <hr></hr>
                  <form role="form" onSubmit={handleUpdate} className='form__updateP'>
                    <div class="box-body">
                      <div class="form-group">
                        <label>name</label>
                        <input onChange={e=>{setName(e.target.value)}} type="text" class="form-control"  placeholder="Enter name"/>
                      </div>

                      <div class="form-group">
                        <label>Phone</label>
                        <input type="text" onChange={e=>{setPhone(e.target.value)}} class="form-control"  placeholder="Enter Phone No"/>
                      </div>
                      
                      <div class="form-group">
                        <label>Profile Image</label>
                        <input onChange={(e) => handelImage(e.target.files)} class="form-control form-control-lg" id="formFileLg" type="file" />
                        <div class="small text-muted mt-2">Upload your Profile Image. Max filesize 2048 px</div>

                      </div>

                      <div class="form-group">
                        <label>Email</label>
                        <input type="Email" onChange={e=>{setEmail(e.target.value)}} class="form-control"  placeholder="Enter Email"/>
                      </div>

                      <div class="form-group">
                        <label>Adresse</label>
                        <input type="text" onChange={e=>{setAdresse(e.target.value)}} class="form-control"  placeholder="Enter Adresse"/>
                      </div>
                      
                      <p class="text-muted text-center">Change Password</p>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" onChange={e=>{setPwd(e.target.value)}} class="form-control"  placeholder="Enter Password"/>
                      </div>
                      
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" onChange={e=>{setCpwd(e.target.value)}} class="form-control"  placeholder="Renter Password"/>
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