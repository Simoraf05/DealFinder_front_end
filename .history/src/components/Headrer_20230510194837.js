import React from 'react'
import '../styles/Header.css'
const Headrer = () => {
  return (
    <div id='header__'>
        <a><img src='../../public/images/logo.png' className='logo__'/></a>
        <div id='navbar__'>
            <ul><a href='#' className='active'>Home</a></ul>
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'>                            <Link to='/cart' class="nav-link mx-2 text-uppercase" ><i class="fa fa-shopping-cart" aria-hidden="true"></i>{cart.length}</Link>
</a></ul>
        </div>
    </div>
  )
}

export default Headrer