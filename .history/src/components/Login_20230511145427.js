import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const [currentUser,setCurrentUser] = useState()
    const [err,setErr] = useState('')


    const formValues = {
        email: email,
        password: pwd
      }  
    const location = useLocation()
      const navigate = useNavigate()
      const redirectPath = location.state?.path || '/'
      function login(formValues) {
        return axios.post('http://127.0.0.1:8000/api/login', formValues);
      }
      async function handleLogin(event) {
        event.preventDefault();
        try {
            const response = await login(formValues);
            localStorage.setItem('token', response.data.authorisation.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setCurrentUser(response.data.user);
            navigate(redirectPath,{replace:true});
            
            } catch(error){
            setErr(error.response.data.message)
            }
        }
  return (
    <div>
        
    </div>
  )
}

export default Login

/*