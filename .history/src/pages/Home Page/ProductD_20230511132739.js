import React from 'react'
import { useLocation } from 'react-router-dom'
import Headrer from '../../components/Headrer'
import '../../styles/productD.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Footer from '../../components/Footer'

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
                    <img src={`http://localhost:8000/` + location.state.image} width='70%' id='MainImg__' />
                </div>
                <div className='single__pro__details'>
                    <h6>Home / {location.state.title}</h6>
                    <h4>{location.state.category}</h4>
                    <h2>Starting from ${location.state.price}</h2>
                    <button className='normal__' onClick={() => addToCart(location.state.id)} >Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{location.state.description}
                    </span>
                </div>
            </section>
            <section id='banner3__'>
                <div className='banner__box'>
                    <h2>SEASONAL SALE</h2>
                    <h3>The best classic dress is on sale at dealfinder</h3>
                </div>
                <div className='banner__box banner__box2'>
                    <h2>SEASONAL SALE</h2>
                    <h3>The best classic dress is on sale at dealfinder</h3>
                </div>
                <div className='banner__box banner__box3'>
                    <h2>SEASONAL SALE</h2>
                    <h3>The best classic dress is on sale at dealfinder</h3>
                </div>
            </section>
            <div id="comments__">
                <div className="row  d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="headings__ d-flex justify-content-between align-items-center mb-3">
                            <h5>comments(6)</h5>
                        </div>
                        <div className="card p-3 comment__detail">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user__ d-flex flex-row align-items-center">
                                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" p-5 className="user-img rounded-circle mr-2" />
                                    <span><small className="font-weight-bold text-primary">james_olesenn</small> <small className="font-weight-bold">Hmm, This poster looks cool</small></span>
                                </div>
                                <small>2 days ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
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