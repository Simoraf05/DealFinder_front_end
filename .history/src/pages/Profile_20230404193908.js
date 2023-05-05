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
        <a >My App</a>
        </header>
        <ul class="nav">
            <li>
                <Link >
                    <i clLinkss="zmdi zmdi-view-dashboard"></i> Profile
                </Link>
            </li>
            <li>
                <Link >
                    <i class="zmdi zmdi-link"></i> Mes commandes
                </Link>
            </li>
            <li>
                <Link to='/mesA'>
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
            tggiyg
        </div>
        </nav>
    </div>
    </div>
  )
}

export default Profile