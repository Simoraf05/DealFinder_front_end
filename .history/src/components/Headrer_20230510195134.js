import React from 'react'
import '../styles/Header.css'
const Headrer = () => {
  return (
    <div id='header__'>
        <a><img src='../../public/images/logo.png' className='logo__'/></a>
        <ul id='navbar__'>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
        </ul>
    </div>
  )
}

export default Headrer