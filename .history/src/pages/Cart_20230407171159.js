import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import '../styles/cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
  const [cart,setCart] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  
  
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


  return (
    <div>
      <Navbar></Navbar>
      <section class="h-100" >
        
        {
          cart.length ===0 ?
          <p></
        }
      </section>
    </div>
  )
}

export default Cart