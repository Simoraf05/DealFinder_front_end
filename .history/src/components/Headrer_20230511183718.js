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

  async function handleLogout() {
    try {
      logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setCurrentUser(null);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getCart',{buyer:data.id})
      .then(response =>{
        setCart(response.data.cart)
        console.log(cart)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);

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
                  <li>
                    <div class="dropdown">
                      <i class="fas fa-user"></i>
                      <div class="dropdown-content">
                        <NavLink to='/'>Link 1</NavLink>
                        <NavLink to='/'>Link 2</NavLink>
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
  )
}

export default Headrer