import React from 'react'
import '../styles/sidebar.css'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';


const SideBare = () => {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");

    btn.onclick = function(){
        sidebar.classList.toggle("active");
    }
    searchBtn.onclick = function(){
        sidebar.classList.toggle("active");
    }

  return (
    
    <div>
        <div class="sidebar">
            <div class="logo_content">
            <div class="logo">
                <div class="logo_name">Code4education</div>
            </div>
            <i class='bx bx-menu' id="btn"></i>
            </div>
            <ul class="nav_list">
            <li>
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search..."/>
                <span class="tooltip">Search</span>
            </li>
            <li>
                <Link to='/dashboard'>
                <i class='bx bx-grid-alt'></i>
                <span class="links_name">Dashboard</span>
                </Link>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-user'></i>
                <span class="links_name">User</span>
                </a>
                <span class="tooltip">User</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-chat'></i>
                <span class="links_name">Messages</span>
                </a>
                <span class="tooltip">Messages</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-pie-chart-alt-2'></i>
                <span class="links_name">Analytics</span>
                </a>
                <span class="tooltip">Analytics</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-folder'></i>
                <span class="links_name">File Manager</span>
                </a>
                <span class="tooltip">File Manager</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-cart-alt'></i>
                <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-heart'></i>
                <span class="links_name">Saved</span>
                </a>
                <span class="tooltip">Saved</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-cog'></i>
                <span class="links_name">Setting</span>
                </a>
                <span class="tooltip">Setting</span>
            </li>
            </ul>
            <div class="content">
            <div class="user">
                <div class="user_details">
                <img decoding="async" src="images/profile.jpg" alt=""/>
                <div class="name_job">
                    <div class="name">Bhaskar Gupta</div>
                    <div class="job">Web Designer</div>
                </div>
                </div>
                <i class='bx bx-log-out' id="log_out"></i>
            </div>
            </div>
        </div>
        <div class="home_content">
            <Dashboard/>
        </div>


    </div>
  )
}

export default SideBare