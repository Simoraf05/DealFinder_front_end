import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import '../styles/updateP.css'
import axios from 'axios'


const UpadatProfile = () => {
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [adresse,setAdresse] = useState('')
  const [pwd,setPwd] = useState('')
  const [Cpwd,setCpwd] = useState('')
  const [image, setImage] = useState("");
  const [newUser,setNewUser] = useState([])

  const [data, setData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }



  const handleUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('profile_picture', image.image);
    formData.append('location', adresse);
    fetch(`/api/updateProfile/${data.id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response data
      })
      .catch((error) => console.error(error));
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
                      <input onChange={handleImageChange} class="form-control form-control-lg" id="formFileLg" type="file" />
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