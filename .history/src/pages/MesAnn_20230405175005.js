import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import '../styles/mesAnn.css'
const MesAnn = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image,setImage] = useState(null)
    const [category,setCategory] = useState('')
    const [myProducts,setMyProducts] = useState([])
    const handleImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        setImage({
          image: URL.createObjectURL(event.target.files[0])
        });
      }
    }
  
    

    const [data, setData] = useState({});

    useEffect(() => {
      const storedData = localStorage.getItem('user');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
    }, []);


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

    useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/getMyProducts',{seller_id:data.id})
        .then(response =>{
         
          setMyProducts(response)
          console.log('myProducts',myProducts)
        })
        .catch(error => {
          console.log(error)
        });
    }, []);



    return (
      <div>
        <Profile></Profile>
          <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
  
                  <h1 class="text-dark mb-4">Add your product</h1>
  
                  {
                    
                  }
  
                </div>
              </div>
            </div>
          </section>
          </div>
    )
  }

export default MesAnn