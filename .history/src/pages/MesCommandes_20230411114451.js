import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import axios from 'axios'

const MesCommandes = () => {
  const [commande,setCommande] = useState([])
  const [currentUser,setCurrentUser] = useState([])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/getCommande',{buyer_id:currentUser.id})
        .then(response =>{
          setCommande(response)
          console.log(commande)
        })
        .catch(error => {
          console.log(error)
        });
  }, [currentUser]);

  
  return (
    <div>
      <Profile></Profile>
      <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
  
                  <h1 class="text-dark mb-4">Mes Commandes</h1>
                  {
                    commande.offer_id === null ?
                    <div class="alert alert-info" role="alert">
                        NO OFFERS FOUNDS.
                    </div>                    
                  :
                    <div>
                      <section class="content-header">
                      <h1>
                        My offers
                      </h1>
                      </section>
                      <div>
                        {
                        offer.map(item=>(
                                                  
                          <div class="card rounded-3 mb-4">
                          <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={`http://localhost:8000/` + item.product_image}
                                  class="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <p><span class="text-muted">title: </span>{item.title}</p>
                                <p><span class="text-muted">price: </span>{item.price}</p>
                              </div>
                              <div id='tooltip_offer' class="col-md-3 col-lg-3 col-xl-3">
                                <div id='buyer_info'>
                                    <p id='buyer_info_name'><span class="text-white">name: </span>{item.buyer_name}</p>
                                    <p id='buyer_info_email'><span class="text-white">email: </span>{item.buyer_email}</p>
                                </div>

                                <img src={`http://localhost:8000/`+item.profile_picture}class="rounded-circle" height="22" alt="" loading="lazy" />
                              </div>    
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">${item.offer_price}</h5>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        ))
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

export default MesCommandes