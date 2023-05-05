import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/'
const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Routers