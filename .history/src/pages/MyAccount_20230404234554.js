import React from 'react'
import Profile from './Profile'
import '../styles/muAcc'
const MyAccount = () => {
  return (
    <div>
        <Profile></Profile>
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    <div class="content-wrapper">
                        <section class="content-header">
                            <h1>
                                Profile
                            </h1>
                        </section>

                        <section class="profil__info">
                            <div class="box box-primary">
                                        <div class="box-body box-profile">
                                        <img class="profile-user-img img-responsive img-circle"  alt="User profile picture"/>

                                        <h3 class="profile-username text-center">John Abia</h3>

                                        <p class="text-muted text-center">Administrator</p>
                                        <p class="text-muted text-center">biochemistry technologist</p>
                                        <p class="text-muted text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <p class="text-muted text-center">johnabia@gmail.com</p>
                                        <p class="text-muted text-center">+264 813345387</p>
                                    </div>
                            </div>        
                        </section>
                    </div>  
                </div>
              </div>
            </div>
        </section>    
    </div>
  )
}

export default MyAccount