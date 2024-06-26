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

        console.log(data.name)
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

                    <div class="card card-blue bg-info p-3 text-white mb-3">

                    <span>You have to pay</span>
                        <div class="d-flex flex-row text-dark align-items-end mb-3">
                            <h1 class="mb-0 ">$549</h1> <span>.99</span>
                        </div>

                        <span>Enjoy all the features and perk after you complete the payment</span>
                        <a href="#" class="text-white decoration">Know all the features</a>

                        <div class="hightlight bg-secondary">

                            <span>100% Guaranteed support and update for the next 5 years.</span>
                            

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