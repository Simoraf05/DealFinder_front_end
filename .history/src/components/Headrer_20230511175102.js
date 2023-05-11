import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

const Headrer = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentUser(parsedData);
    }
  }, []);

  return (
    <div id='header__'>
      <a><img src='' className='logo__' /></a>
      <div>
        <ul id='navbar__'>
          <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Home</NavLink></li>
          <li><NavLink to='/products' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Shop</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>About</NavLink></li>
          {
            currentUser
              ?
                  <li><NavLink  to='/cart' className={({ isActive }) => (isActive ? "active" : "not-active-class")}><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
                  <li>
                    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbar-list-4">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <a class="dropdown-item" href="#">Dashboard</a>
                              <a class="dropdown-item" href="#">Edit Profile</a>
                              <a class="dropdown-item" href="#">Log Out</a>
                            </div>
                          </li>   
                        </ul>
                      </div>
</nav>
                  </li>
              :
              <><li><NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Login</NavLink></li><li><NavLink to='/register' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Signin</NavLink></li></>
          }
        </ul>
      </div>
    </div>
  )
}

export default Headrer