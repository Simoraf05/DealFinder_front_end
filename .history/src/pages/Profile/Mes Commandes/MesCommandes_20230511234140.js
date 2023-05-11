import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import UpdateOfferPrice from './UpdateOfferPrice'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'

const MesCommandes = () => {
  const [commande,setCommande] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/getCommande',{buyer_id:currentUser.id})
        .then(response =>{
          setCommande(response.data.mesC)
        })
        .catch(error => {
          console.log(error)
        });
  }, [currentUser]);
  console.log(commande)

  const updateOfferPrice=(offer_id)=>{
    toast(<UpdateOfferPrice state={offer_id}></UpdateOfferPrice> 
    , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: 1,
        theme: "light",
        });
  }

  const checkO =({name:name,price:offer_price,product_image:product_image,seller_name:seller_name,seller_id:seller_id,buyer_id:buyer_id,product_id:product_id})=>{
    const data = {
      name : name,
      price : offer_price,
      product_image : product_image,
      seller_name:seller_name,
      seller_id:seller_id,
      buyer_id:buyer_id,
      product_id:product_id
    }
    navigate('/checkO',{state:data})
  }

  
  return (
    <div>
      <Sidebar></Sidebar>
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
                      <div>

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

/*/*