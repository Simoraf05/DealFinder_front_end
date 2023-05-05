import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/checkO.css'
import Profile from './Profile'
import { useLocation } from 'react-router-dom'

const CheckOut = () => {
    const location  = useLocation()
    const [data,setData] = useState([])

    useEffect(()=>{
        setData(location.state)

        console.log(data)
    },[data])
  return (
    <div>
        <Profile></Profile>
        
    </div>
  )
}

export default CheckOut