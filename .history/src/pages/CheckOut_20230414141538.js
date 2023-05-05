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
        <div>
            <div class="container__checkO mt-5 px-5">

                <div class="mb-4">

                    <h2>Confirm order and pay</h2>
                <span>please make the payment, after that you can enjoy all the features and benefits.</span>
                    
                </div>

            <div class="row">

                <div class="col-md-8">
                    

                    <div class="card p-3">

                        <h6 class="text-uppercase">Payment details</h6>
                        <div class="inputbox mt-3"> <input type="text" name="name" class="form-control" required="required"/> <span>Name on card</span> </div>


                        <div class="row">

                            <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <i class="fa fa-credit-card"></i> <span>Card Number</span> 


                                </div>
                                

                            </div>

                            <div class="col-md-6">

                                <div class="d-flex flex-row">


                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <span>Expiry</span> </div>

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <span>CVV</span> </div>
                                    

                                </div>
                                

                            </div>
                            

                        </div>



                        <div class="mt-4 mb-4">

                            <h6 class="text-uppercase">Billing Address</h6>


                            <div class="row mt-3">

                                <div class="col-md-6">

                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <span>Street Address</span> </div>
                                    

                                </div>


                                <div class="col-md-6">

                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <span>City</span> </div>
                                    

                                </div>


                                

                            </div>


                            <div class="row mt-2">

                                <div class="col-md-6">

                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <span>State/Province</span> </div>
                                    

                                </div>


                                <div class="col-md-6">

                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required"/> <span>Zip code</span> </div>
                                    

                                </div>


                                

                            </div>

                        </div>

                    </div>


                    <div class="mt-4 mb-4 d-flex justify-content-between">


                                <span>Previous step</span>


                                <button class="btn btn-success bg-info px-3">Pay $840</button>


                                

                            </div>

                </div>

                <div class="col-md-4 ">

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
            

        </div>
        </div>
    </div>
  )
}

export default CheckOut