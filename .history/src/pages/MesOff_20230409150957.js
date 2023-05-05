import React, { useState } from 'react'
import Profile from './Profile'

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
            setCart(response.data.offer)
            console.log(cart)
          })
          .catch(error => {
            console.log(error)
          });
      }, [currentUser]);
  return (
    <div>
        <Profile></Profile>
        
    </div>
  )
}

export default MesOff