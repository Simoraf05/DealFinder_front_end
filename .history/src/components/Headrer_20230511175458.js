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
                  <><li><NavLink to='/cart' className={({ isActive }) => (isActive ? "active" : "not-active-class")}><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false"> <i class="fas fa-user mx-1"></i> Profile </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="#">My account</a>
                    </li>

                    <li>
                        <a class="dropdown-item" href="#">Log out</a>
                    </li>
                </ul>
            </li>
                  </>
              :
              <><li><NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Login</NavLink></li><li><NavLink to='/register' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Signin</NavLink></li></>
          }
        </ul>
      </div>
    </div>
  )
}

export default Headrer