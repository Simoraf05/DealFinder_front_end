import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
const Headrer = () => {
  const NavLink=({isActive})=>{
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      TextDecodation: isActive ? 
    }
  }
  return (
    <div id='header__'>
        <a><img src='' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><Link to='/' className='active'>Home</Link></li>
                <li><Link to='/products'>Shop</Link></li>
                <li><Link href='#'>About</Link></li>
                <li><Link href='#'>Contact</Link></li>
                <li><Link href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer