import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import '../styles/cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
  const [cart,setCart] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const [priceOffer,setPriceOffer] = useState(0.00)
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getCart',{buyer:currentUser.id})
      .then(response =>{
        setCart(response.data.cart)
        console.log(response.data.cart)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);

  const addOffer=({buyer_id:buyer_id,listing_id:listing_id})=>{
    const data = {
      buyer_id:buyer_id,
      listing_id:cart.id,
      price:priceOffer
    }
    return axios.post('http://127.0.0.1:8000/api/addOffer',data)
    .then(res=>{
      console.log(res)
    })
  }

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
              <><div class="d-flex justify-content-between align-items-center mb-4">
                    <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                    <div>
                      <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                        class="fas fa-angle-down mt-1"></i></a></p>
                    </div>
                  </div><div>
                      {cart.map(item => (
                        <div class="card rounded-3 mb-4">
                          <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={`http://localhost:8000/` + item.image}
                                  class="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <p class="lead fw-normal mb-2">{item.title}</p>
                                <p><span class="text-muted">Category: </span>{item.category}</p>
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button class="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                  <i class="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="0" name="quantity" onChange={e=>{setPriceOffer(e.target.value)}} defaultValue={item.price} type="number"
                                  class="form-control form-control-sm" />

                                <button class="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">${item.price}</h5>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></button>
                              </div>
                              <div class="col-md-3 col-lg-5 col-xl-1">
                                <button onClick={()=>{addOffer({buyer_id:item.id,})}} type="button" class="btn btn-info text-white btn-md">Send offer</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div><div class="card">

                    </div>
                  </>
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