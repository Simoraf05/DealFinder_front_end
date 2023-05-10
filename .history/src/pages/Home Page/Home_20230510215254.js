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
          <img src="images/featured/f2.png"/>
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
          <h6>h24/7 Support</h6>
        </div>
      </section>

      <section>

        <div class="container my-5">
          <FiltringProducts></FiltringProducts>

          <section id='products__1' className='section__p1'>
            <h2>Featured Products</h2>
            <h3>Summer Collection New  Modern Design</h3>
            <div className='pro__container'>
              <div className='pro'>
                <img src='images/hero4.png'/>
                <div className='des__'>
                  <span>Adidas</span>
                  <h5>Cartoon Astric dgzgu</h5>
                  <div className='stars'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>Starting from $</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Home

/*
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
*/