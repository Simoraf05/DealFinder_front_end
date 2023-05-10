import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductD = () => {
    location = useLocation()
    console.log(location.state)
  return (
    <div>ProductD</div>
  )
}

export default ProductD