import React from 'react'
import { Route, Routes } from 'react-router-dom'

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