import axios from 'axios';
import React, { useEffect, useState } from 'react'

const allOff = () => {

    const [offer,setOffer] = useState([])

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
        <div>  
          
        </div>
    </div>
  )
}

export default allOff