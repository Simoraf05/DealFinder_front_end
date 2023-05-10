import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
const Headrer = () => {
  return (
    <div id='header__'>
        <a><img src='' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><Link href='#' className='active'>Home</Link></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer