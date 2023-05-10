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

  const productD = (product) => {
    navigate('/productD', { state: product })
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
          <img src="images/featured/f1.png" />
          <h6>Free Shipping</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f2.png" />
          <h6>Online Order</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f3.png" />
          <h6>Save Money</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f5.png" />
          <h6>Happy Sell</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f6.png" />
          <h6>h24/7 Support</h6>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <section id='products__1' className='section__p1'>
            <h2>Featured Products</h2>
            <h3>Summer Collection New  Modern Design</h3>
            <div className='pro__container'>
              {
                products.map((item) => (
                  <div className='pro'>
                    <img src={`http://localhost:8000/` + item.image} />
                    <div className='des__'>
                      <span>{item.category}</span>
                      <h5>{item.title}</h5>
                      <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                      </div>
                      <h4>Starting from ${item.price}</h4>
                    </div>
                    <Link to='/productD' state={item}><i class="fa-regular fa-circle-info cart"></i></Link>
                  </div>
                ))
              }
            </div>
          </section>
        </div>
      </section>
      <section id='banner__'>
        <h4>Repair Services</h4>
        <h2>Buy Now With <span>Free Shipping</span>- On All Products</h2>
        <button>Explore More</button>
      </section>
      <section id='sm__banner' className='section__p1'>
        <div className='banner__box'>
          <h4>crazy deals</h4>
          <h2>Free Shpping</h2>
          <span>The best classic dress is on sale at dealfinder</span>
          <button>Learn More</button>
        </div>
        <div className='banner__box banner__box2'>
          <h4>crazy deals</h4>
          <h2>Free Shpping</h2>
          <span>The best classic dress is on sale at dealfinder</span>
          <button>Learn More</button>
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

      <footer calss="bg-white">
        <div calss="container py-5">
          <div calss="row py-4">
            <div calss="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" calss="mb-3" />
              <p calss="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <ul calss="list-inline mt-4">
                <li calss="list-inline-item"><a href="#" target="_blank" title="twitter"><i calss="fa fa-twitter"></i></a></li>
                <li calss="list-inline-item"><a href="#" target="_blank" title="facebook"><i calss="fa fa-facebook"></i></a></li>
                <li calss="list-inline-item"><a href="#" target="_blank" title="instagram"><i calss="fa fa-instagram"></i></a></li>
                <li calss="list-inline-item"><a href="#" target="_blank" title="pinterest"><i calss="fa fa-pinterest"></i></a></li>
                <li calss="list-inline-item"><a href="#" target="_blank" title="vimeo"><i calss="fa fa-vimeo"></i></a></li>
              </ul>
            </div>
            <div calss="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 calss="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul calss="list-unstyled mb-0">
                <li calss="mb-2"><a href="#" calss="text-muted">For Women</a></li>
                <li calss="mb-2"><a href="#" calss="text-muted">For Men</a></li>
                <li calss="mb-2"><a href="#" calss="text-muted">Stores</a></li>
                <li calss="mb-2"><a href="#" calss="text-muted">Our Blog</a></li>
              </ul>
            </div>
            <div calss="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 calss="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul calss="list-unstyled mb-0">
                <li calss="mb-2"><a href="#" calss="text-muted">Login</a></li>
                <li calss="mb-2"><a href="#" calss="text-muted">Register</a></li>
                <li calss="mb-2"><a href="#" calss="text-muted">Wishlist</a></li>
                <li calss="mb-2"><a href="#" calss="text-muted">Our Products</a></li>
              </ul>
            </div>
            <div calss="col-lg-4 col-md-6 mb-lg-0">
              <h6 calss="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p calss="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <div calss="p-1 rounded border">
                <div calss="input-group">
                  <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" calss="form-control border-0 shadow-0" />
                  <div calss="input-group-append">
                    <button id="button-addon1" type="submit" calss="btn btn-link"><i calss="fa fa-paper-plane"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div calss="bg-light py-4">
          <div calss="container text-center">
            <p calss="text-muted mb-0 py-2">© 2019 Bootstrapious All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

/*
            {
              products.map((item) => (
                <div calss="col-xs-3">
                  <div calss="">
                    <div calss="">
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