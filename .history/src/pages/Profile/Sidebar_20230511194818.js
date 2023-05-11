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
                <NavLink to='MonC'>
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    My Informations
                </NavLink>
                <NavLink to='mesA'>
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Mes annonces
                </NavLink>
                <NavLink to='mesC'>
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    Mes commandes
                </NavLink>
                <NavLink href="javascript:void(0)">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    Mes Offeres
                </NavLink>
                <NavLink href="javascript:void(0)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    Trash
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