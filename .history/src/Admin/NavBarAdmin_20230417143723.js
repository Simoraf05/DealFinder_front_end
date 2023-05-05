import React from 'react'

const NavBarAdmin = () => {
  return (
    <div>
        <div class="content">
            <header>
                <p><label for="menu"><span class="fa fa-bars"></span></label><span class="accueil">Accueil</span></p>

                <div class="search-wrapp">
                    <span class="fa fa-search"></span>
                    <input type="search" name="" placeholder="recherche">
                </div>

                <div id="dropdown" class="user-wrapp">
                    <div>
                        <h4>Alassane</h4>
                        <small>Admin</small>
                    </div>
                    <img decoding="async" src="images/pp.jpg" width="30" height="30" class="logo-admin">
                    <div class="dropdown-content">
                        <p>Profil</p>
                        <p>Deconnexion</p>
                    </div>
                </div>
            </header>
        </div>
    </div>
  )
}

export default NavBarAdmin