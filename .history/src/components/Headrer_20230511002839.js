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
                <li><Link href='#'>Shop</Link></li>
                <li><Link href='#'>About</Link></li>
                <li><Link href='#'>Contact</a></li>
                <li><Link href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer