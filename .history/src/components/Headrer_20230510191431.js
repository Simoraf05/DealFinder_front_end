import React from 'react'
import '../styles/Header.css'

const Headrer = () => {
  return (
    <div id='header__'>
        <a><img src='...' className='logo__'/></a>
        <div id='navbar__'>
            <ul><a href='#' className='active'>Home</a></ul>
            <ul><a>Home</a></ul>
            <ul><a>Home</a></ul>
            <ul><a>Home</a></ul>
            <ul><a><i class="fa-regular fa-bag-shopping"></i></a></ul>
        </div>
    </div>
  )
}

export default Headrer