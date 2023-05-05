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
        <a >MY PROFILE</a>
        </header>
        <ul class="nav">
            <li>
                <Link to='/monC'>
                    <i clLinkss="zmdi zmdi-view-dashboard"></i> Profile
                </Link>
            </li>
            <li>
                <Link to='/UpdateP'>
                    <i class="zmdi zmdi-link"></i> Update Profile
                </Link>
            </li>
            <li>
                <Link to='/mesC'>
                    <i class="zmdi zmdi-link"></i> Mes commandes
                </Link>
            </li>
            <li>
                <Link to='/mesA'>
                    <i class="zmdi zmdi-widgets"></i> Mes annonces
                </Link>
            </li>    
            <li>
                <Link to='/mesA'>
                    <i class="zmdi zmdi-widgets"></i> Mes offers
                </Link>
            </li>         
        </ul>

    </div>

    </div>
  )
}

export default Profile