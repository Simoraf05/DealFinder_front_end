import React from 'react'
import { useLocation } from 'react-router-dom'
import Headrer from '../../components/Headrer'
import '../../styles/productD.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const ProductD = () => {
    const location = useLocation()
    const [currentUser, setCurrentUser] = useState([null])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user);
    }, []);

    const addToCart = (product_id) => {
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
        else {
            const data = {
                product: product_id,
                buyer: currentUser.id,
            }

            return axios.post('http://127.0.0.1:8000/api/addToCart', data)
                .then(res => {
                    if (res.data.status === 409) {
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
                    else if (res.data.status === 201) {
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
            <section id='productdetail__'>
                <div className='single__pro__image'>
                    <img src='images/hero4.png' width='100%' id='MainImg__'/>
                    <div className='small__img__group'>
                        <div></div>
                    </div>
                </div>
                <div></div>
            </section>
            <div class="container mt-5">

                <div class="row  d-flex justify-content-center">

                    <div class="col-md-12">

                        <div class="headings d-flex justify-content-between align-items-center mb-3">
                            <h5>comments(6)</h5>
                        </div>
                        <div class="card p-3">
                            <div class="d-flex justify-content-between align-items-center">

                                <div class="user d-flex flex-row align-items-center">
                                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2" />
                                    <span><small class="font-weight-bold text-primary">james_olesenn</small> <small class="font-weight-bold">Hmm, This poster looks cool</small></span>
                                </div>
                                <small>2 days ago</small>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductD

/*
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
                                    <button class="add-to-cart btn btn-default" onClick={() => addToCart(location.state.id)} type="button">add to cart</button>
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
*/