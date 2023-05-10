import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ProductD = () => {
    const location = useLocation()
    console.log('hhh',location.state)
  return (
    <div>
        <Navbar></Navbar>
        ProductD
    </div>
  )
}

export default ProductD