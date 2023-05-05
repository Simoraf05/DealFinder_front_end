import React, { useState } from 'react'
import '../styles/register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [err,setErr] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const [Cpwd,setCpwd] = useState('')
    const [user,setUser] = useState([])

    const navigate = useNavigate()
    const data = {
        name: name,
        email: email,
        password: pwd
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
        <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" >
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="login__btn nav-item" role="presentation">
                                <Link  to='/login' className="btn__ nav-link" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                aria-controls="pills-login" aria-selected="true">Login</Link>
                            </li>
                        </ul>
                        <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form onSubmit={handleRegister} class="mx-1 mx-md-4">

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input onChange={e=>{setName(e.target.value)}} type="text" id="form3Example1c" class="form-control" />
                                <label class="form-label" for="form3Example1c">Your Name</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input onChange={e=>{setEmail(e.target.value)}} type="email" id="form3Example3c" class="form-control" />
                                <label class="form-label" for="form3Example3c">Your Email</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input onChange={e=>{setName(e.target.value)}} type="text" id="form3Example1c" class="form-control" />
                                <label class="form-label" for="form3Example1c">Your Name</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input onChange={e=>{setPwd(e.target.value)}} type="password" id="form3Example4c" class="form-control" />
                                <label class="form-label" for="form3Example4c">Password</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input onChange={e=>{setCpwd(e.target.value)}} type="password" id="form3Example4cd" class="form-control" />
                                <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-5">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button  type="submit" class="btn btn-primary btn-lg">Register</button>
                            </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            class="img-fluid" alt="Sample image"/>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Register