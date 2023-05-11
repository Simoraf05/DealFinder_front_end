import React from 'react'
import '../../styles/sidebar.css'
import Headrer from '../../components/Headrer'
const Sidebar = () => {
    return (
        <div id='sidebar__'>
            <Headrer></Headrer>
            <aside className='aside__'>
                <p> Menu </p>
                <NavLink href="javascript:void(0)">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    My Informations
                </NavLink>
                <NavLink href="javascript:void(0)">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Mes annonces
                </NavLink>
                <NavLink href="javascript:void(0)">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    Mes commandes
                </NavLink>
                <NavLink href="javascript:void(0)">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    Mes Offeres
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    Trash
                </a>
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