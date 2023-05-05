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
  const [newInfoUser,setNewInfoUser] = useState([])

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
  

    const dataToUpdate = {};

    if (name !== originalData.name) {
      dataToUpdate.name = name;
    }
    
    if (email !== originalData.email) {
      dataToUpdate.email = email;
    }
    
    if (phone !== originalData.phone) {
      dataToUpdate.phone = phone;
    }
    
    if (adresse !== originalData.location) {
      dataToUpdate.location = adresse;
    }
    
    if (image.image !== originalData.profile_picture) {
      dataToUpdate.profile_picture = image.image;
    }
    console.log(data)
    
    axios.put(`http://127.0.0.1:8000/api/updateProfile/${data.id}`, {    
      dataToUpdate
    })
      .then((response) => {
        console.log(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };
  
  console.log(image.image)

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