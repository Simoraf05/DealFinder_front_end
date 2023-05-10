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
                                        <div class="header__item"><a id="name" class="filter__link" href="#">Offers</a></div>
                                    </div>
                                    <div class="table-content">
                                        <div class="table-row">
                                            <div class="table-data">Tom</div>
                                        </div>
                                        {
                                            location.state.offer_prices.map(offers => (
                                                Object.keys(offers) == ''
                                                    ?
                                                    <div class="table-row">
                                                    <div class="table-data">No offers found</div>
                                                </div>                                                    :
                                                    <div class="table-row">
                                                        {
                                                            currentUser == null ?
                                                                <div class="table-row">{Object.values(offers)}</div>
                                                                :
                                                                Object.keys(offers) == currentUser.id
                                                                    ?
                                                                    <div class="table-row"><div class="table-data">No offers found</div> {Object.values(offers)}</div>
                                                                    :
                                                                    <div class="table-row">{Object.values(offers)}</div>

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
        </div>
    )
}

export default ProductD