import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/profile.css'

const Profile = () => {
  return (
    <div className='profil__'>
      <Navbar></Navbar>
      
        <div id="sidebar">
        <header>
        <a href="#">My App</a>
        </header>
        <ul class="nav">
            <li>
                <a href="#">
                    <i class="zmdi zmdi-view-dashboard"></i> Profile
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-link"></i> Mes commandes
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-widgets"></i> Mes annonces
                </a>
            </li>
            <li className='lofout'>
                <a href="#">
                    <i class="zmdi zmdi-widgets"></i> Mes annonces
                </a>
            </li>
        </ul>

    </div>
    <div id="content">
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <ul class="nav navbar-nav navbar-right">
            <li>
                <a href="#"><i class="zmdi zmdi-notifications text-danger"></i>
                </a>
            </li>
            <li><a href="#">Test User</a></li>
            </ul>
        </div>
        </nav>
    </div>
    </div>
  )
}

export default Profile