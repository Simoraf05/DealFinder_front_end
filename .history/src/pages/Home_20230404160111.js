import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react'

import '../styles/home.css'
import FiltringProducts from './FiltringProducts'
const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const dataFetch = async (product_id) =>{
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts',product_id)
      ).json()
      setProducts(products.products)
    }
    dataFetch(products.id);
  },[])


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



      </div>
  )
}

export default Home