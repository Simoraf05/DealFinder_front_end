import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const MyStore = () => {
    const location = useLocation
  return (
    <div>
        <Navbar></Navbar>
        MyStore
    </div>
  )
}

export default MyStore