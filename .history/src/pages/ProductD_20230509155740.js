import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductD = () => {
    const location = useLocation()
    console.log('hhh',location.state)
  return (
    <div>ProductD</div>
  )
}

export default ProductD