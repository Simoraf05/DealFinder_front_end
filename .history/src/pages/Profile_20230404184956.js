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
                    <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-link"></i> Shortcuts
                </a>
            </li>
            <li>
                <a href="#">
                <i class="zmdi zmdi-widgets"></i> Overview
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-calendar"></i> Events
                </a>
            </li>
            <li>
                <a href="#">
                <i class="zmdi zmdi-info-outline"></i> About
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-settings"></i> Services
                </a>
            </li>
            
            <li>
                <a href="#">
                    <i class="zmdi zmdi-comment-more"></i> Contact
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