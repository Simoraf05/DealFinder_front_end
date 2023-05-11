import React from 'react'
import '../../styles/sidebar.css'
import Headrer from '../../components/Headrer'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div id='sidebar__'>
            <Headrer></Headrer>
            <aside className='aside__'>
                <p> Menu </p>
                <NavLink to='/MonC'>
                <box-icon name='info-circle'></box-icon>
                    My Informations
                </NavLink>
                <NavLink to='/mesA'>
                    Mes annonces
                </NavLink>
                <NavLink to='/mesC'>
                    Mes commandes
                </NavLink>
                <NavLink to='/mesO'>
                    Mes Offeres
                </NavLink>
            </aside>

            <div class="social">
                <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
                    <i class="fa fa-linkedin"></i>
                </a>
            </div>

        </div>
    )
}

export default Sidebar