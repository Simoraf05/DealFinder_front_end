import React from 'react'
import '../styles/sidebar.css'
import NavBarAdmin from './NavBarAdmin';
import { Link } from 'react-router-dom';
const SideBare = () => {
  return (
    <div className=''>
      <NavBarAdmin></NavBarAdmin>
      <div class="sidebar">
        <div class="sidebar-brand">
          <h2><span class="fa fa-user-o"> </span> Learn Programming</h2>
        </div>

        <div class="sidebar-menu">
          <ul>
            <li><Link to='/admin/accueil' class="active"><span class="fa fa-home"></span><span>Accueil</span></Link></li>
            <li><Link to='/admin/users'><span class="fa fa-tasks"></span><span>Users</span></Link></li>
            <li><a href="#"><span class="fa fa-th-large"></span><span>Products</span></a></li>
            <li><a href="#"><span class="fa fa-line-chart"></span><span>Statistiques</span></a></li>
            <li><a href="#"><span class="fa fa-address-book"></span><span>A-propos</span></a></li>
            <li><a href="#"><span class="fa fa-clipboard"></span><span>Projets</span></a></li>
            <li><a href="#"><span class="fa fa-money"></span><span>Bilans</span></a></li>
            <li><a href="#"><span class="fa fa-registered"></span><span>Enregistrement</span></a></li>
            <li><a href="#"><span class="fa fa-user"></span><span>Contact</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBare