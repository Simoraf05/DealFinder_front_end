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
        
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

            {
              cart.length === 0 ?
              <div class="card mb-4">
                <div class="card-body p-4 d-flex flex-row">
                  <div class="form-outline flex-fill">
                    <label class="form-label" for="form1">No products found in your cart</label>
                  </div>
                  <Link to='/products' class="btn btn-outline-warning btn-lg ms-3">Go to shopping</Link>
                </div>
              </div>
              :
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                        class="fas fa-angle-down mt-1"></i></a></p>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                </div>
              </div>

            }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart

/*

              
              
*/