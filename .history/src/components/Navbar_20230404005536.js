import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
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
                        <span class="me-3"><i class="fa-solid fa-phone me-1 text-warning"></i> <strong>1-800-123-1234</strong></span>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
                        <span class="me-3"><i class="fa-solid fa-truck text-muted me-1"></i><a class="text-muted" href="#">Shipping</a></span>
                        <span class="me-3"><i class="fa-solid fa-file  text-muted me-2"></i><a class="text-muted" href="#">Policy</a></span>
                    </div>
                    </div>
                </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
                <div class="container">
                    <Link to='/' class="navbar-brand" ><i class="fa-solid fa-shop me-2"></i> <strong>GEAR SHOP</strong></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                    <div class="input-group">
                        <span class="border-warning input-group-text bg-warning text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control border-warning" />
                        <button class="btn btn-warning text-white">Search</button>
                    </div>
                    </div>
                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="ms-auto d-none d-lg-block">
                        <div class="input-group">
                        <span class="border-warning input-group-text bg-warning text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control border-warning" />
                        <button class="btn btn-warning text-white">Search</button>
                        </div>
                    </div>
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
                        </li>
                        <li class="nav-item">
                        <Link to='products' class="nav-link mx-2 text-uppercase" >Products</Link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" >Catalog</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" >Services</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" >About</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" ><i class="fa-solid fa-cart-shopping me-1"></i> Cart</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" href="#"><i class="fa-solid fa-circle-user me-1"></i> Account</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
    </div>
  )
}

export default Navbar