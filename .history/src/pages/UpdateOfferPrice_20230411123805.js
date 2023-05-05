import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UpdateOfferPrice = () => {
    const [newPrice,setNewPrice] = useState(0.00)
    const [commande,setCommande] = useState([])


    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getCommande',{buyer_id:currentUser.id})
          .then(response =>{
            setCommande(response.data.mesC)
            console.log(commande.offer_id)
          })
          .catch(error => {
            console.log(error)
          });
    }, [currentUser]);


    const updateOfferPrice=async(e)=>{
        e.preventDefault()
      
        try{
          const response = await fetch(`http://127.0.0.1:8000/api/updatingOfferPrice/${commande.offer_id}`, {
            method: 'POST',
            body: newPrice
          });
          console.log(response)
        }
        catch(err){
          console.log(err)
        }
      
      }
  return (
    <div>
        
    </div>
  )
}

export default UpdateOfferPrice