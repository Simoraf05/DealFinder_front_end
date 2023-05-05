import React, { useState } from 'react'
import Profile from './Profile'

const MesOff = () => {
    const [offer,setOffer] = useState([])
    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    
  return (
    <div>
        <Profile></Profile>
        
    </div>
  )
}

export default MesOff