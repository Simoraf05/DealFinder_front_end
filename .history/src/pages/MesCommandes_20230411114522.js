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
                  
                </div>
              </div>
            </div>
          </section>  
    </div>
  )
}

export default MesCommandes