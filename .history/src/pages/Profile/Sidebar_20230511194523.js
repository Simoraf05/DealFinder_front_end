import React from 'react'
import '../../styles/sidebar.css'
import Headrer from '../../components/Headrer'
const Sidebar = () => {
    return (
        <div id='sidebar__'>
            <Headrer></Headrer>
            <aside className='aside__'>
                <p> Menu </p>
                <a href="javascript:void(0)">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    My Informations
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Mes annonces
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    Shared with me
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    Starred
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