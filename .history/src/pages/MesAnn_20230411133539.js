import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import '../styles/mesAnn.css'
import { toast } from 'react-toastify';
import MyProducts from './MyProducts';
import AddProduct from './AddProduct';





const MesAnn = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image, setImage] = useState([]);
    const [category,setCategory] = useState('')
    const [myProducts,setMyProducts] = useState([])


    const handelImage=(file)=>{
      setImage(file[0])
    }
  
    

    const [data, setData] = useState({});

    useEffect(() => {
      const storedData = localStorage.getItem('user');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
    }, []);

    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);


    const sellProduct =  (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('shipping_options', shipping_options);
      formData.append('image', image);
      formData.append('category', category);
      formData.append('seller_id', currentUser.id);
  
      try {
        const response = axios.post('http://127.0.0.1:8000/api/addProduct',formData);
        console.log(response)
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
      } catch (error) {
        toast.warn('error', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    };



    useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/getMyProducts',{seller_id:currentUser.id})
        .then(response =>{
          setMyProducts(response.data.Myproducts)
          console.log(myProducts)
        })
        .catch(error => {
          console.log(error)
        });
    }, [currentUser]);

   
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getCategories')
        .then(response => {
          setCategories(response.data.categories)

        });
    }, []);
    const dataArray = Object.entries(categories)



    return (
      <div>
        <Profile></Profile>
          <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                <hr></hr>

                <div className='title__'>
                  <h1 class="text-dark mb-4">Mes annonces</h1>
                </div>
                <hr></hr>


                  {

                    myProducts.length === 0?
                    <AddProduct></AddProduct>
                    :
                  <div>

                      <MyProducts></MyProducts>
                  </div>
                  }
  
              </div>
            </div>
        </div>
      </section>
    </div>
    )
  }

export default MesAnn