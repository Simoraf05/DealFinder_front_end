import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import FiltringProducts from './FiltringProducts'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Headrer from '../../components/Headrer'
const Home = () => {

  const [products, setProducts] = useState([])
  const [currentUser, setCurrentUser] = useState([null])
  

  useEffect(() => {
    const dataFetch = async () => {
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts')
      ).json()
      setProducts(products.products.products)
    }
    dataFetch(products.id);
  }, [])



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);


  const [stockStatus, setStockStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/checkStock');
        setStockStatus(response.data.Product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate()

  const productD=(product)=>{
    navigate('/productD',{state:product})
  }


  return (
    <div>
      <Headrer></Headrer>
      <section id='hero__section'>
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On All Products</h1>
        <button>Shop Now</button>
      </section>

      <section id='featured__' className='section__p1'>
        <div className='fe__box'>
          <img src="images/featured/f1.png"/>
          <h6>Free Shipping</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f1=2.png"/>
          <h6>Online Order</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f3.png"/>
          <h6>Save Money</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f5.png"/>
          <h6>Happy Sell</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f6.png"/>
          <h6>h24/7</h6>
        </div>
      </section>

      <section>

        <div class="container my-5">
          <FiltringProducts></FiltringProducts>

          <header class="mb-4">
            <h3>New products</h3>
          </header>
          <div class="container mt-30">
            {
              products.map((item) => (
                <div class="col-xs-3">
                  <div class="">
                    <div class="">
                      <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                        <div class="inner">
                          <div class="main-img"><img src={`http://localhost:8000/`+item.image} className='product__img'/></div>
                          {

                            stockStatus.map(stock => (
                              stock.product_id === item.id ?
                                <span class="tag2 hot">
                                  Sold
                                </span> :
                                null
                            ))
                          }

                        </div></a>
                        <div class="card-body text-center">
                          <h4 class="card-title">{item.title}</h4>
                          <p class="text-muted">Starting from ${item.price}</p><Link class="btn btn-outline-primary btn-sm" to='/productD' state={item} data-abc="true">View Products</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

/*
                  products.map((item)=>(
                    <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                    {
                      
                      stockStatus.map(stock=>(
                        stock.product_id === item.id ?
                        <span class="offer_OutS">Out of stock</span> :
                        <span class="offer_InS">In stock</span>

                      ))
                      
                    }
                      <img src={`http://localhost:8000/`+item.image} class="card-img-top"  />
                      <div class="card-body d-flex flex-column">
                        <div className='row'>
                          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Title :</h5>
                          <p className='col-4'>{item.title}</p>
                        </div>
                        <div className='row'>
                          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Price :</h5>
                          <p className='col-4'>${item.price}</p>
                        </div>
                        <div className='row'>
                          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Seller :</h5>
                          <p className='col-4'>{item.name}</p>
                        </div>
                        <div className='row'>
                          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>offers :</h5>
                          <p className='col-4'>{
                              item.offer_prices.map(offers=>(
                                Object.keys(offers) == '' 
                                ?
                                <p>No offers found</p>
                                :
                                <p>
                                  {
                                    currentUser == null ?
                                    <p>{Object.values(offers)}</p>
                                    :
                                    Object.keys(offers) == currentUser.id 
                                    ?
                                    <p>ME {Object.values(offers)}</p>
                                    :
                                    <p>{Object.values(offers)}</p>

                                  }
                                </p>        
                              ))

                          }</p>
                        </div>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <button onClick={() => addToCart(item.id)}  class="btn btn-info shadow-0 me-1">Add to cart</button>
                          <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>
                          {
                            <img src={`http://localhost:8000/`+item.profile_picture} class="rounded-circle"/>

                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
*/