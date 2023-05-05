import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MesAnn = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image,setImage] = useState(null)
    const [category,setCategory] = useState('')
  
    const handleImageChange = event => {
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
  
    function sellProduct (e){
      e.preventDefault()
      const data = {
        title:title,
        description:description,
        price:price,
        shipping_options:shipping_options,
        image:image.image,
        category:category,
        seller_id : currentUser.id,
      }
  
      return axios.post('http://127.0.0.1:8000/api/addProduct', data)
      .then(res=>{
        console.log(res)
      })
      
    }
    return (
        <div id="content">
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                tggiyg
            </div>
            </nav>
        </div>
    )
  }

export default MesAnn


/*


*/