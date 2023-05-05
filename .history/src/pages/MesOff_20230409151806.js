import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import axios from 'axios'

const MesOff = () => {
    const [offer,setOffer] = useState([])
    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getMyOffers',{seller_id:currentUser.id})
          .then(response =>{
            setOffer(response.data.offer)
          })
          .catch(error => {
            console.log(error)
          });
      }, [currentUser]);
      console.log(offer)

  return (
    <div>
        <Profile></Profile>
        <div>
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
                                        <img class="profile-user-img img-responsive img-circle" src={`http://localhost:8000/`+data.profile_picture}  alt="User profile picture"/>

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
        </div>
    </div>
  )
}

export default MesOff

/*
            {
                offer.offer_id === null ?
                <p>No offers found</p>
                :
                <p>yes</p>
            }

*/