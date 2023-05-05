import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/checkO.css'
import Profile from './Profile'
import { useLocation } from 'react-router-dom'

const CheckOut = () => {
    const location  = useLocation()
    const [data,setData] = useState([])

    useEffect(()=>{
        setData(location.state)

        console.log(data)
    },[data])


  return (
    <div>
        <Profile></Profile>
        <div class="card">
            <div class="card-top border-bottom text-center">
                 <a href="#"> Back to shop</a>
                <span id="logo">BBBootstrap.com</span>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-7">
                                     
                    </div>
                    <div class="col-md-5">
                        <div class="right border">
                            <div class="header">Order Summary</div>
                            <p>2 items</p>
                            <div class="row item">
                                <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/79M6pU0.png"/></div>
                                <div class="col-8">
                                    <div class="row"><b>$ 26.99</b></div>
                                    <div class="row text-muted">Be Legandary Lipstick-Nude rose</div>
                                    <div class="row">Qty:1</div>
                                </div>
                            </div>
                            <div class="row item">
                                <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/Ew8NzKr.jpg"/></div>
                                <div class="col-8">
                                    <div class="row"><b>$ 19.99</b></div>
                                    <div class="row text-muted">Be Legandary Lipstick-Sheer Navy Cream</div>
                                    <div class="row">Qty:1</div>
                                </div>
                            </div>
                            <hr/>
                            <div class="row lower">
                                <div class="col text-left">Subtotal</div>
                                <div class="col text-right">$ 46.98</div>
                            </div>
                            <div class="row lower">
                                <div class="col text-left">Delivery</div>
                                <div class="col text-right">Free</div>
                            </div>
                            <div class="row lower">
                                <div class="col text-left"><b>Total to pay</b></div>
                                <div class="col text-right"><b>$ 46.98</b></div>
                            </div>
                            <div class="row lower">
                                <div class="col text-left"><a href="#"><u>Add promo code</u></a></div>
                            </div>
                            <button class="btn">Place order</button>
                            <p class="text-muted text-center">Complimentary Shipping & Returns</p>
                        </div>
                    </div>
                </div>
            </div>
            
         <div>
        </div>
        </div>
    </div>
  )
}

export default CheckOut