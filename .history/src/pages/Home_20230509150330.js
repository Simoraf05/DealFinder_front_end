import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react'

import '../styles/home.css'
import FiltringProducts from './FiltringProducts'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const Home = () => {

  const [products, setProducts] = useState([])
  const [currentUser,setCurrentUser] = useState([null])

  useEffect(() => {
    const dataFetch = async () =>{
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts')
      ).json()
      setProducts(products.products.products)
    }
    dataFetch(products.id);
  },[])


  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);
  
  const addToCart=(product_id)=>{
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
    else{
      const data = {
        product: product_id,
        buyer : currentUser.id,
      }

      return axios.post('http://127.0.0.1:8000/api/addToCart',data)
      .then(res=>{
        if(res.data.status===409){
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
        else if(res.data.status===201){
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

console.log(products)

  return (
    <div>
      <Navbar></Navbar>
        <div class="bg-info text-dark py-5">
          <div class="container py-5">
            <h1>
              Best products & <br />
              brands in our store
            </h1>
            <p>
              Trendy Products, Factory Prices, Excellent Service
            </p>
            <button type="button" class="btn m-2 btn-outline-light">
              Sell your products now
            </button>
            <button type="button" class="btn btn-light shadow-0 text-dark pt-2 border border-white">
              <span class="pt-1">Purchase now</span>
            </button>
          </div>
        </div>


        <section>
          
          <div class="container my-5">
          <FiltringProducts></FiltringProducts>

            <header class="mb-4">
              <h3>New products</h3>
            </header>
              <div class="row">
                {
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
                            currentUser == null ?
                            <p></p>
                            :
                            <Link to='/myStore'>
                            <img src={`http://localhost:8000/`+item.profile_picture} class="rounded-circle"/>
                          </Link>
                          }
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