import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import profil_Img from './images'

const Navbar = () => {
    const [currentUser,setCurrentUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const storedData = localStorage.getItem('user');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setCurrentUser(parsedData);
        }
      }, []);


      const [data, setData] = useState({});

      useEffect(() => {
        const storedData = localStorage.getItem('user');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setData(parsedData);
        }
      }, []);

    const logout = () => {
    
        axios.post('/api/logout', null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })      
        .then((response) => {
            console.log(response.data.message);
          })
          
          .catch((error) => {
            console.log(error.response.data.message);
          });
      }

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
  return (
    <div>
        	<div class="superNav border-bottom py-2 bg-light">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
                        <select  class="me-3 border-0 bg-light">
                          <option value="en-us">EN-US</option>
                        </select>
                        <span class="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>info@somedomain.com</strong></span>
                        <span class="me-3"><i class="fa-solid fa-phone me-1 text-info"></i> <strong>1-800-123-1234</strong></span>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
                        <span class="me-3"><i class="fa-solid fa-truck text-muted me-1"></i><a class="text-muted" >Shipping</a></span>
                        <span class="me-3"><i class="fa-solid fa-file  text-muted me-2"></i><a class="text-muted" >Policy</a></span>
                    </div>
                    </div>
                </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
                <div class="container">
                    <Link to='/' class="navbar-brand" ><i class="fa-solid fa-shop me-2"></i> <strong>DEAL FINDER</strong></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                    <div class="input-group">
                        <span class="border-info input-group-text bg-info text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control border-info" />
                        <button class="btn btn-info text-white">Search</button>
                    </div>
                    </div>
                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="ms-auto d-none d-lg-block">
                        <div class="input-group">
                        <span class="border-info input-group-text bg-info text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control border-info" />
                        <button class="btn btn-info text-white">Search</button>
                        </div>
                    </div>
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase active" aria-current="page" >Offers</a>
                        </li>
                        <li class="nav-item">
                        <Link to='/products' class="nav-link mx-2 text-uppercase" >Products</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/services' class="nav-link mx-2 text-uppercase">Services</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/about' class="nav-link mx-2 text-uppercase">About</Link>
                        </li>
                    </ul>
                    {
                        !currentUser ?
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                            <Link to='/login' class="nav-link mx-2 text-uppercase" ><i class="fa-solid fa-cart-shopping me-1"></i>Se connecter</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/register' class="nav-link mx-2 text-uppercase" ><i class="fa-solid fa-circle-user me-1"></i>S'inscrire</Link>
                            </li>
                        </ul>
                        :
                    
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                            <Link to='/cart' class="nav-link mx-2 text-uppercase" ><i class="fa-solid fa-cart-shopping me-1"></i> Cart</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/monC'  class="nav-link mx-2 text-uppercase" ><i class="fa-solid fa-circle-user me-1"></i> Add Product</Link>
                            </li>
                            <div class="dropdown">
                                <a class="dropdown-toggle d-flex align-items-center hidden-arrow" 
                                id="navbarDropdownMenuLink" role="button" data-bs-toggle='dropdown' aria-expanded="false">
                                {
                                    !currentUser.profile_picture === null ?
                                    <img src={profil_Img.profilImg} class="rounded-circle" height="22"
                                    alt="" loading="lazy" />
                                    :
                                    <img src={`http://localhost:8000/`+currentUser.profile_picture}class="rounded-circle" height="22"
                                    alt="" loading="lazy" />
                                }
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/MonC' class="dropdown-item" >My profile</Link></li>
                                    <li><a class="dropdown-item" >Settings</a></li>
                                    <li><a class="dropdown-item" onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </div>
                        </ul>
                        
                    }
                    </div>
                </div>
                </nav>
    </div>
  )
}

export default Navbar