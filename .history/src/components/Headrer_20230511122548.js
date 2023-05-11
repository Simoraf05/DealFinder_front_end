import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
const Headrer = () => {

  return (
    <div id='header__'>
        <a><img src='' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><NavLink  to='/' className={({ isActive }) => "underline" + isActive ? " active" : ""}>Home</NavLink></li>
                <li><NavLink  to='/products' className={({ isActive }) => "underline" + isActive ? " active" : ""}>Shop</NavLink></li>
                <li><NavLink  href='#' className={({ isActive }) => "underline" + isActive ? " active" : ""}>About</NavLink></li>
                <li><NavLink  href='#'>Contact</NavLink></li>
                <li><NavLink  href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer