import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


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
          const data = await response.json();
          console.log(data)
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })        }
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