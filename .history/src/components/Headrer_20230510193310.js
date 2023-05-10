import React from 'react'
import '../styles/Header.css'
import '../../'
const Headrer = () => {
  return (
    <div id='header__'>
        <a><img src='../../public/images/logo.png' className='logo__'/></a>
        <div id='navbar__'>
            <ul><a href='#' className='active'>Home</a></ul>
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'><i class="fa-regular fa-bag-shopping"></i></a></ul>
        </div>
    </div>
  )
}

export default Headrer