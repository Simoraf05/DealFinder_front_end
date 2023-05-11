import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
const Headrer = () => {

  return (
    <div id='header__'>
        <a><img src='' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><NavLink  to='/' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Home</NavLink></li>
                <li><NavLink  to='/products' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Shop</NavLink></li>
                <li><NavLink  to='/about' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>About</NavLink></li>
                <li><NavLink  to='/contact' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Contact</NavLink></li>
                <li><NavLink  to='/products' className={({ isActive }) => (isActive ? "active" : "not-active-class")}><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer