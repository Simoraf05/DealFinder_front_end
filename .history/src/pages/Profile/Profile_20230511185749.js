import React from 'react'
import Header from '../../components/Header'
import '../../styles/profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='profil__'>
    <Header></Header>
    <nav id="sidebar">
        <header>
            <div className='image__text'>
                <span className='image__'>
                    <img src='images/'/>
                </span>
            </div>
        </header>
    </nav>

    </div>
  )
}

export default Profile