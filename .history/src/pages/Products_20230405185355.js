import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Products = () => {
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
        {
          
        }
    </div>
  
  )
}

export default Products