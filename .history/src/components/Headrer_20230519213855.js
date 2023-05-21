import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchBar from './SearchBar'

const Headrer = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentUser(parsedData);
    }
  }, []);

  const navigate = useNavigate()

  const logout = () => {

    axios.post('/api/logout', null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
      })

      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  async function handleLogout() {
    try {
      logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setCurrentUser(null);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <>
    
    </>
  )
}

export default Headrer