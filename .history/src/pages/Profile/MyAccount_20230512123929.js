import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../../styles/muAcc.css'
import { toast } from 'react-toastify';
const MyAccount = () => {
  const [data, setData] = useState({});
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [adresse,setAdresse] = useState('')
  const [pwd,setPwd] = useState('')
  const [Cpwd,setCpwd] = useState('')
  const [image, setImage] = useState([]);
  const [currentUser,setCurrentUser] = useState([])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  const handelImage=(file)=>{
    setImage(file[0])
  }

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

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
        toast.success(data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <div class="container rounded bg-white mt-5 mb-5 ">
        <div class="row myInfo__">
          
          <div class="col-6 border-right form__">
            <div class="p-3 py-5 info__inputs">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={handleUpdate}>
              <div class="row mt-3">
                <div class="col-md-6"><label class="labels">Name</label><input onChange={e=>{setName(e.target.value)}} type="text" placeholder="name" value="" /></div>
                <div class="col-md-6"><label class="labels">Mobile Number</label><input onChange={e=>{setPhone(e.target.value)}} type="text" placeholder="phone number" value="" /></div>
                <div class="col-md-6"><label class="labels">Address Line 1</label><input  onChange={e=>{setAdresse(e.target.value)}} type="text" placeholder="address line 1" value="" /></div>
                <div class="col-md-6"><label class="labels">Email</label><input type="text" onChange={e=>{setEmail(e.target.value)}} placeholder="email" value="" /></div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6"><label class="labels">Password</label><input type="password" placeholder="Password" value="" /></div>
                <div class="col-md-6"><label class="labels">Confirm Password</label><input type="password" value="" placeholder="Confirm Password" /></div>
              </div>
              <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
              </form>
            </div>
          </div>
          <div class="col-md-6 border-right profile__">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" id='profile__picture'>
              <img class="rounded-circle mt-5" width="150px"
                src={`http://localhost:8000/` + currentUser.profile_picture} />
                <div className='upload__section'></div>
              <span class="font-weight-bold">{currentUser.name}</span>
              <span class="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
            <div id="avatar-edit">
              <input type='file' onChange={(e) => handelImage(e.target.files)} id="imageUpload" accept=".png, .jpg, .jpeg" />
              <label for="imageUpload"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount