import React, { useState } from 'react'
import '../styles/register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [err,setErr] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [pwd,setPwd] = useState('')
    const [Cpwd,setCpwd] = useState('')
    const [user,setUser] = useState([])

    const navigate = useNavigate()
    const data = {
        name: name,
        email: email,
        phone: phone,
        password: pwd,
    }
    
    function register(user) {
      return axios.post('http://127.0.0.1:8000/api/register', user);
    }


    async function handleRegister(event) {
        event.preventDefault();
        try {
          const response = await register(data);
          console.log(response)
          const { user, authorisation } = response.data;
          localStorage.setItem('token', authorisation.token);
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
          navigate('/')
        } catch (error) {
          console.error(error);
          setErr(error.response.data.message);
        }
      }


  return (
    <div>
        
    </div>
  )
}

export default Register

/**/ 