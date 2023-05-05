import React from 'react'

const UpdateOfferPrice = () => {
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
    <div>UpdateOfferPrice</div>
  )
}

export default UpdateOfferPrice