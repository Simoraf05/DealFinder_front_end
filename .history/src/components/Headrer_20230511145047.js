import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

const Headrer = () => {
  const [currentUser,setCurrentUser] = useState()

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentUser(parsedData);
    }
  }, []);

  return (
    <div id='header__'>
        <a><img src='' className='logo__'/></a>
        <div>
            <ul id='navbar__'>
                <li><NavLink  to='/' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Home</NavLink></li>
                <li><NavLink  to='/products' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>Shop</NavLink></li>
                <li><NavLink  to='/about' className={({ isActive }) => (isActive ? "active" : "not-active-class")}>About</NavLink></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Headrer