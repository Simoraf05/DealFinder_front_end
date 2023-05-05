import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Services from '../pages/Services'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from './Register'
import MesAnn from '../pages/MesAnn'
import MesCommandes from '../pages/MesCommandes'
import MyAccount from '../pages/MyAccount'
import UpadatProfile from '../pages/UpadatProfile'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route  element={<ProtectedRoute/>}>
                  <Route path='/profile' element={<Profile/>}/>
                </Route>
            <Route path='/updateP' element={<UpadatProfile/>}/>
            <Route path='/mesA' element={<MesAnn/>}/>
            <Route path='/mesC' element={<MesCommandes/>}/>
            <Route path='/MonC' element={<MyAccount/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

        </Routes>
    </div>
  )
}

export default Routers