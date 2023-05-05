import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const MyStore = () => {
    const location = useLocation()
    console.log(location.state)
  return (
    <div>
        <Navbar></Navbar>
        MyStore
    </div>
  )
}

export default MyStore