import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchBar from './SearchBar'

const Headrer = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentUser(parsedData);
    }
  }, []);

  const navigate = useNavigate()

  const logout = () => {

    axios.post('/api/logout', null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
      })

      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  async function handleLogout() {
    try {
      logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setCurrentUser(null);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <>
    <div id='header__'>
      <a><img src='' className='logo__' /></a>
      <div>
        <ul id='navbar__'>
          <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Home</NavLink></li>
          <li><NavLink to='/products' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Shop</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>About</NavLink></li>
          <li>
            <SearchBar></SearchBar>
          </li>
          {
            currentUser
              ?
              <><li><NavLink to='/cart' className={({ isActive }) => (isActive ? "active" : "not-active-class")}><img src='icones/shopping-bag-line.png'/></NavLink></li>
                <li>
                  <div class="dropdown">
                    <i class="fas fa-user"></i>
                    <div class="dropdown-content">
                      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active-class")} to='/monC'>Profile</NavLink>
                      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active-class")} to='/addProduct'>Add product</NavLink>
                      <a onClick={handleLogout}>Logout</a>
                    </div>
                  </div>
                </li>
              </>
              :
              <><li><NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Login</NavLink></li><li><NavLink to='/register' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Signin</NavLink></li></>
          }
        </ul>
      </div>
    </div>
    <
    </>
  )
}

export default Headrer