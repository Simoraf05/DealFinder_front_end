import React from 'react'
import '../styles/accueil.css'
import SideBare from './SideBare'

const Accueil = () => {
  return (
    <div>
        <SideBare></SideBare>
        <main>


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
                        <button class="btn__">voir plus <span class="fa fa-arrow-right"></span></button>
                    </div>

                </div>

            </div>
        </main>

    </div>
  )
}

export default Accueil