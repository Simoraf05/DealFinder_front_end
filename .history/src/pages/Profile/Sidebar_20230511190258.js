import React from 'react'
import Header from '../../components/Header'

const Sidebar = () => {
  return (
    <div className='profil__'>
    <Header></Header>
    <nav id="sidebar">
        <header>
            <div className='image__text'>
                <span className='image__'>
                    <img src='images/hero4.png'/>
                </span>
                <div className='text__ header__text'>

                </div>
            </div>
        </header>
    </nav>

    </div>  )
}

export default Sidebar