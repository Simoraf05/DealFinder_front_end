import React, { useEffect, useState } from 'react'
import Headrer from '../../components/Headrer'
import axios from 'axios'
import '../../styles/cart.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Cart = () => {
  const [cart,setCart] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const [priceOffer,setPriceOffer] = useState([])
  const [offerAdded,setOfferAdded] = useState(false)


  const handelPriceChange = (e, productId) => {
    const newQuantities = [...priceOffer];
    newQuantities[productId] = e.target.value;
    setPriceOffer(newQuantities);
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getCart',{buyer:currentUser.id})
      .then(response =>{
        setCart(response.data.cart)
        console.log(cart)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);

  const addOffer=({listing_id:listing_id,price:price,seller:seller})=>{
    const data = {
      buyer_id:currentUser.id,
      listing_id:listing_id,
      price:price
    }

    return axios.post('http://127.0.0.1:8000/api/addOffer',data)
    .then(res=>{

      if(res.data.status === 410){
        toast.error(res.data.message, {
          position: "top-ce nter",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
      else if(res.data.status === 409){
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
      else{
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


  const deleteFromCart =(id)=>{
    axios.delete(`http://127.0.0.1:8000/api/deleteFromCart/${id}`)
    .then(res=>{
      console.log(res)
    })
  }

  return (
    <div>
      <Headrer></Headrer>
      
    </div>
  )
}

export default Cart

/*

              
              
*/