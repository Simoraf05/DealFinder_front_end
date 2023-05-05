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
  const [image, setImage] = useState('');
  const [newInfoUser,setNewInfoUser] = useState([])

  const [data, setData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  /*const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }*/





  const dataToUpdate = {};

  if (name ) {
    dataToUpdate.name = name;
  }
  
  if (email ) {
    dataToUpdate.email = email;
  }
  
  if (phone ) {
    dataToUpdate.phone = phone;
  }
  
  if (adresse ) {
    dataToUpdate.location = adresse;
  }
  
  if (image.image) {
    dataToUpdate.profile_picture = image.image;
  }
  const handleUpdate = (event) => {
    event.preventDefault();
  


    
    axios.put(`http://127.0.0.1:8000/api/updateProfile/${data.id}`,dataToUpdate)
      .then((response) => {
        console.log(response.data.message)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
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
                      <input onChange={(e) => setImage(e.target.files[0])} class="form-control form-control-lg" id="formFileLg" type="file" />
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