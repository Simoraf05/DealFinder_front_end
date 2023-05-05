import React from 'react'
import '../styles/accueil.css'
import SideBare from './SideBare'

const Accueil = () => {
  return (
    <div>
        <SideBare></SideBare>
        <main>
            <div class="cards">
                <div class="card-single">
                    <div>
                        <h2>2.000.000</h2>
                        <small>Ventes</small>
                    </div>
                    <div>
                        <span class="fa fa-shopping-cart"></span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h2>+30</h2>
                        <small>Stock</small>
                    </div>
                    <div>
                        <span class="fa fa-newspaper-o"></span>
                    </div>
                </div>


                <div class="card-single">
                    <div>
                        <h2>58</h2>
                        <small>Fournisseur</small>
                    </div>
                    <div>
                        <span class="fa fa-outdent"></span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                    <h2>20k</h2>
                    <small>Communauté</small>
                    </div>
                    <div>
                    <span class="fa fa-group"></span>
                </div>

            </div>
            </div>
        </main>
        <div class="composant">
        <div class="ventes">
            <div class="case">
                <div class="header-case">
                    <h2>Listes produits</h2>
                    <button class="button">voir plus <span class="fa fa-arrow-right"></span></button>
                </div>
                <div class="body-case">
                    <div class="tableau">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>modou</td>
                                    <td>pathe</td>
                                    <td>demba</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>modou</td>
                                    <td>dmeba</td>
                                    <td><span class="status-produit color-one"></span>mass</td>
                                </tr>
                                <tr>
                                    <td>modou</td>
                                    <td>dmeba</td>
                                    <td><span class="status-produit color-two"></span>mass</td>
                                </tr>
                                <tr>
                                    <td>modou</td>
                                    <td>dmeba</td>
                                    <td><span class="status-produit color-three"></span>mass</td>
                                </tr>
                                <tr>
                                    <td>modou</td>
                                    <td>dmeba</td>
                                    <td><span class="status-produit color-four"></span>mass</td>
                                </tr>
                                <tr>
                                    <td>modou</td>
                                    <td>dmeba</td>
                                    <td><span class="status-produit color-five"></span>mass</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <div class="stock">
            <div class="case">
                <div class="header-case">
                    <h2>Clients fideles</h2>
                </div>

                <div class="body-case">
                    <div class="all-users">
                        <div class="infos">
                            <img decoding="async" src="images/pp.jpg" width="30" height="30"/>
                            <div>
                                <h4>Omar</h4>
                                <small>Embulant</small>
                            </div>
                        </div>

                        <div class="user-contact">
                            <span class="fa fa-facebook"></span>
                            <span class="fa fa-whatsapp"></span>
                            <span class="fa fa-phone"></span>
                        </div>
                    </div>
                    <div class="all-users">
                        <div class="infos">
                            <img decoding="async" src="images/pp.jpg" width="30" height="30"/>
                            <div>
                                <h4>Omar</h4>
                                <small>Embulant</small>
                            </div>
                        </div>

                        <div class="user-contact">
                            <span class="fa fa-facebook"></span>
                            <span class="fa fa-whatsapp"></span>
                            <span class="fa fa-phone"></span>
                        </div>
                    </div>
                    <div class="all-users">
                        <div class="infos">
                            <img decoding="async" src="images/pp.jpg" width="30" height="30"/>
                            <div>
                                <h4>Omar</h4>
                                <small>Embulant</small>
                            </div>
                        </div>

                        <div class="user-contact">
                            <span class="fa fa-facebook"></span>
                            <span class="fa fa-whatsapp"></span>
                            <span class="fa fa-phone"></span>
                        </div>
                    </div>
                    <div class="all-users">
                        <div class="infos">
                            <img decoding="async" src="images/pp.jpg" width="30" height="30"/>
                            <div>
                                <h4>Omar</h4>
                                <small>Embulant</small>
                            </div>
                        </div>

                        <div class="user-contact">
                            <span class="fa fa-facebook"></span>
                            <span class="fa fa-whatsapp"></span>
                            <span class="fa fa-phone"></span>
                        </div>
                    </div>
                    <div class="all-users">
                        <div class="infos">
                            <img decoding="async" src="images/pp.jpg" width="30" height="30"/>
                            <div>
                                <h4>Omar</h4>
                                <small>Embulant</small>
                            </div>
                        </div>

                        <div class="user-contact">
                            <span class="fa fa-facebook"></span>
                            <span class="fa fa-whatsapp"></span>
                            <span class="fa fa-phone"></span>
                        </div>
                    </div>


                </div>
                <button class="btn">voir plus <span class="fa fa-arrow-right"></span></button>
            </div>

        </div>


            <div class="statistiques">
                <div class="statistique-barre bar1"></div>
                <div class="statistique-barre bar2"></div>
                <div class="statistique-barre bar3"></div>
                <div class="statistique-barre bar4"></div>
                <div class="statistique-barre bar5"></div>
                <div class="statistique-barre bar6"></div>
                <div class="statistique-barre bar4"></div>
                <div class="statistique-barre bar5"></div>
                <div class="statistique-barre bar6"></div>
                <div class="statistique-barre bar4"></div>
                <div class="statistique-barre bar5"></div>
                <div class="statistique-barre bar6"></div>
            </div>


            <div class="legende">
                <h4>Legende</h4>
                <table>
                    <tr>
                        <td><span class="evolution color-one"></span>Riz</td>
                    </tr>
                    <tr>
                        <td><span class="evolution color-two"></span>Mil</td>
                    </tr>
                </table>
                <div class="txt-deco">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accueil