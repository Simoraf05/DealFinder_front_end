import React, { useEffect, useState } from 'react'
import Headrer from '../components/Headrer'
import '../styles/products.css'
import { toast } from 'react-toastify'
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const dataFetch = async (product_id) =>{
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts',product_id)
      ).json()
      setProducts(products.products.products)
    }
    dataFetch(products.id);
  },[])

  const [currentUser,setCurrentUser] = useState([])
  
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  const addToCart=(product_id)=>{
    if (!localStorage.getItem('token')) {
      toast.warn('You should login!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    
    }
    else{
      const data = {
        product: product_id,
        buyer : currentUser.id,
      }

      return axios.post('http://127.0.0.1:8000/api/addToCart',data)
      .then(res=>{
        if(res.data.status===409){
          toast.warn(res.data.message, {
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
        else if(res.data.status===201){
            toast.success(res.data.message, {
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
      })
    }
  }

  return (
    <div>
        <Headrer></Headrer>

  
  )
}

export default Products