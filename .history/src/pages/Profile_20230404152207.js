import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/profile.css'
import axios from 'axios'


const Profile = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState(0.00)
  const [shipping_options,setShipping_option] = useState('')
  const [image,setImage] = useState(null)
  const [category,setCategory] = useState('')

  handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }
  const [currentUser,setCurrentUser] = useState()


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  const sellProduct =()=>{
    const data = {
      title:title,
      description:description,
      price:price,
      shipping_options:shipping_options,
      image:image,
      category:category,
      seller_id : currentUser.id,
    }

    return axios.post('http://127.0.0.1:8000/api/addProduct', data)
    .then(res=>{
      console.log(res)
    })
    
  }
  return (
    <div>
        <Navbar></Navbar>
        <section class="vh-100">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-xl-9">

                <h1 class="text-dark mb-4">Add you product</h1>

                <for

              </div>
            </div>
          </div>
        </section>
        </div>
  )
}

export default Profile