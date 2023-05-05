import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import '../styles/muAcc.css'
const MyAccount = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  });
  console.log('data',data.profile_picture)

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
                                        <img class="profile-user-img img-responsive img-circle" src={data.profile_picture}  alt="User profile picture"/>

                                        <h3 class="profile-username text-center">{data.name}</h3>

                                        <p class="text-muted text-center">{data.email}</p>
                                        <p class="text-muted text-center">{data.phone}</p>
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