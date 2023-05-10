import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/productD.css'
import { useState } from 'react'
import { useEffect } from 'react'

const ProductD = () => {
    const location = useLocation()
    const [currentUser, setCurrentUser] = useState([null])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user);
    }, []);
    console.log('hhh', location.state)
    return (
        <div>
            <Navbar></Navbar>
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-3">
                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={`http://localhost:8000/` + location.state.image} /></div>
                                </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{location.state.title}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no">41 reviews</span>
                                </div>
                                <p class="product-description">{location.state.description}</p>
                                <h4 class="price">Starting from: <span>${location.state.price}</span></h4>

                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                                    <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                                </div>
                            </div>
                            <div className='offers col-md-3'>
                                <div class="table">
                                    <div class="table-header">
                                        <div class="header__item">Offers</div>
                                    </div>
                                    <div class="table-content">
                                        {
                                            location.state.offer_prices.map(offers => (
                                                Object.keys(offers) == ''
                                                    ?
                                                    <div class="table-row">
                                                        <div class="table-data">No offers found</div>
                                                    </div> :
                                                    <div class="table-row">
                                                        {
                                                            currentUser == null ?
                                                                <div class="table-row">{Object.values(offers)}</div>
                                                                :
                                                                Object.keys(offers) == currentUser.id
                                                                    ?
                                                                    <div class="table-row"><div class="table-data">ME {Object.values(offers)}</div></div>
                                                                    :
                                                                    <div class="table-row"><div class="table-data">{Object.values(offers)}</div></div>

                                                        }
                                                    </div>
                                            ))

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">

                <div class="row  d-flex justify-content-center">

                    <div class="col-md-12">

                        <div class="headings d-flex justify-content-between align-items-center mb-3">
                            <h5>Unread comments(6)</h5>

                            <div class="buttons">

                                <span class="badge bg-white d-flex flex-row align-items-center">
                                    <span class="text-primary">Comments "ON"</span>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>

                                    </div>
                                </span>

                            </div>

                        </div>



                        <div class="card p-3">

                            <div class="d-flex justify-content-between align-items-center">

                                <div class="user d-flex flex-row align-items-center">

                                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2"/>
                                        <span><small class="font-weight-bold text-primary">james_olesenn</small> <small class="font-weight-bold">Hmm, This poster looks cool</small></span>

                                </div>


                                <small>2 days ago</small>

                            </div>


                            <div class="action d-flex justify-content-between mt-2 align-items-center">

                                <div class="reply px-4">
                                    <small>Remove</small>
                                    <span class="dots"></span>
                                    <small>Reply</small>
                                    <span class="dots"></span>
                                    <small>Translate</small>

                                </div>

                                <div class="icons align-items-center">

                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-check-circle-o check-icon"></i>

                                </div>

                            </div>



                        </div>







                        <div class="card p-3 mt-2">

                            <div class="d-flex justify-content-between align-items-center">

                                <div class="user d-flex flex-row align-items-center">

                                    <img src="https://i.imgur.com/C4egmYM.jpg" width="30" class="user-img rounded-circle mr-2"/>
                                        <span><small class="font-weight-bold text-primary">olan_sams</small> <small class="font-weight-bold">Loving your work and profile! </small></span>

                                </div>


                                <small>3 days ago</small>

                            </div>


                            <div class="action d-flex justify-content-between mt-2 align-items-center">

                                <div class="reply px-4">
                                    <small>Remove</small>
                                    <span class="dots"></span>
                                    <small>Reply</small>
                                    <span class="dots"></span>
                                    <small>Translate</small>

                                </div>

                                <div class="icons align-items-center">
                                    <i class="fa fa-check-circle-o check-icon text-primary"></i>

                                </div>

                            </div>



                        </div>










                        <div class="card p-3 mt-2">

                            <div class="d-flex justify-content-between align-items-center">

                                <div class="user d-flex flex-row align-items-center">

                                    <img src="https://i.imgur.com/0LKZQYM.jpg" width="30" class="user-img rounded-circle mr-2"/>
                                        <span><small class="font-weight-bold text-primary">rashida_jones</small> <small class="font-weight-bold">Really cool Which filter are you using? </small></span>

                                </div>


                                <small>3 days ago</small>

                            </div>


                            <div class="action d-flex justify-content-between mt-2 align-items-center">

                                <div class="reply px-4">
                                    <small>Remove</small>
                                    <span class="dots"></span>
                                    <small>Reply</small>
                                    <span class="dots"></span>
                                    <small>Translate</small>

                                </div>

                                <div class="icons align-items-center">
                                    <i class="fa fa-user-plus text-muted"></i>
                                    <i class="fa fa-star-o text-muted"></i>
                                    <i class="fa fa-check-circle-o check-icon text-primary"></i>

                                </div>

                            </div>



                        </div>






                        <div class="card p-3 mt-2">

                            <div class="d-flex justify-content-between align-items-center">

                                <div class="user d-flex flex-row align-items-center">

                                    <img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" class="user-img rounded-circle mr-2" />
                                    <span><small class="font-weight-bold text-primary">simona_rnasi</small> <small class="font-weight-bold text-primary">@macky_lones</small> <small class="font-weight-bold text-primary">@rashida_jones</small> <small class="font-weight-bold">Thanks </small></span>

                                </div>


                                <small>3 days ago</small>

                            </div>


                            <div class="action d-flex justify-content-between mt-2 align-items-center">

                                <div class="reply px-4">
                                    <small>Remove</small>
                                    <span class="dots"></span>
                                    <small>Reply</small>
                                    <span class="dots"></span>
                                    <small>Translate</small>

                                </div>

                                <div class="icons align-items-center">

                                    <i class="fa fa-check-circle-o check-icon text-primary"></i>

                                </div>

                            </div>



                        </div>



                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductD