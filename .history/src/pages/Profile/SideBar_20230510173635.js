import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/sidebar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h2>DealFinder</h2>
      </div>
      <div className='sidebar__routes'>
        <NavLink to='/'>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to='/users'>
          <span>Users</span>
        </NavLink>
        <NavLink to='/products'>
          <span>Products</span>
        </NavLink>
        <NavLink to='/offers'>
          <span>Offers</span>
        </NavLink>
      </div>
      <div className='sidebar__bottom'>
        <span>Yasser</span>
      </div>
    </div>
    )
}

export default SideBar