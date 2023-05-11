import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
const Headrer = () => {

  const NavLink=({isActive})=>{
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      TextDecoration: isActive ? 'none' : 'underline'
    }
  }
  return (
    <div id='header__'>
        <a><img src='' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><NavLink styles={NavLink} to='/' className='active'>Home</NavLink></li>
                <li><NavLink styles={NavLink} to='/products'>Shop</NavLink></li>
                <li><NavLink styles={NavLink} href='#'>About</NavLink></li>
                <li><NavLink styles={NavLink} href='#'>Contact</NavLink></li>
                <li><NavLink styles={NavLink} href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer