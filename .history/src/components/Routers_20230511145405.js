import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home Page/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Services from '../pages/Services'
import Cart from '../pages/Carte/Cart'
import Profile from '../pages/Profile/Profile'
import Login from './'
import Register from './Register'
import MesAnn from '../pages/Profile/Mes annonces/MesAnn'
import MesCommandes from '../pages/Profile/Mes Commandes/MesCommandes'
import MyAccount from '../pages/Profile/MyAccount'
import UpadatProfile from '../pages/Profile/UpadatProfile'
import ProtectRoutes from './ProtectRoutes'
import MesOff from '../pages/Profile/Mes offers/MesOff'
import CheckOut from '../pages/CheckOut/CheckOut'
import Feedback from '../pages/Feedback/Feedback'
import ProductD from '../pages/Home Page/ProductD'
import AddProduct from '../pages/Profile/Mes annonces/AddProduct'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/services' element={<Services/>}/>

            <Route  element={<ProtectRoutes/>}>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/updateP' element={<UpadatProfile/>}/>
              <Route path='/mesA' element={<MesAnn/>}/>
              <Route path='/mesC' element={<MesCommandes/>}/>
              <Route path='/MonC' element={<MyAccount/>}/>
              <Route path='/mesO' element={<MesOff/>}/>
              <Route path='/addProduct' element={<AddProduct/>}/>

              <Route path='/checkO' element={<CheckOut/>}/>
              <Route path='/feedback' element={<Feedback/>}/>
            </Route>
            <Route path='/productD' element={<ProductD/>}/>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Routers