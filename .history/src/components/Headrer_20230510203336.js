import React from 'react'
import '../styles/Header.css'
const Headrer = () => {
    const logo = require('../../public/images/logo.png')
  return (
    <div id='header__'>
        <a><img src='logo' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Headrer