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
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" id='profile__picture'>
              <img class="rounded-circle mt-5" width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                <div className='upload__section'></div>
              <span class="font-weight-bold">Edogaru</span>
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