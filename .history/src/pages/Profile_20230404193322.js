import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/profile.css'
import { Link } from 'react-router-dom'

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
                <Link href="#">
                    <i class="zmdi zmdi-widgets"></i> Mes annonces
                </Link>
            </li>
            <li className='logout__'>
                <button className='li__'>
                    <i class="zmdi zmdi-widgets"></i> lOGOUT
                </button>
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