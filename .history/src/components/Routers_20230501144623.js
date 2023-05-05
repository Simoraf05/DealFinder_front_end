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
import ProtectRoutes from './ProtectRoutes'
import MesOff from '../pages/MesOff'
import SideBare from '../Admin/SideBare'
import Dashboard from '../Admin/Dashboard'
import CheckOut from '../pages/CheckOut'
import Accueil from '../Admin/Accueil'
import Users from '../Admin/Users'
import Feedback from '../pages/Feedback'
import MyStore from '../pages/MyStore'
import Sidebar from '../Admin/Sidebar'

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
              <Route path='/checkO' element={<CheckOut/>}/>
              <Route path='/feedback' element={<Feedback/>}/>
            </Route>
            <Route path='/myStore' element={<MyStore/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin/accueil' element={<Accueil/>}/>
            <Route path='/admin/users' element={<Users/>}/>


        </Routes>
    </div>
  )
}

export default Routers