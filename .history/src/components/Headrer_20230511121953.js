import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
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
                <li><Link style={NavLink} to='/' className='active'>Home</Link></li>
                <li><Link style={NavLink} to='/products'>Shop</Link></li>
                <li><Link style={NavLink} href='#'>About</Link></li>
                <li><Link style={NavLink} href='#'>Contact</Link></li>
                <li><Link style={NavLink} href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer