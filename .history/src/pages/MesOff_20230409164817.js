import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import axios from 'axios'
import MyAllOff from './MyAllOff'
import '../styles/myOffers.css'



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
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    {
                    !offer.offer_id == null ?
                    <p>No offers found</p>
                    :
                    <div>
                      <section class="content-header">
                      <h1>
                        Profile
                      </h1>
                      </section>
                      <div>
                        <MyAllOff/>
                        {
                          offer.map
                        }
                      </div>
                    </div>

                    } 
                </div>
              </div>
            </div>
          </section> 
    </div>
  )
}

export default MesOff

/*


*/