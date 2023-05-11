import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Headrer from './Headrer'

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
        <Headrer></Headrer>
        <div class="session">
    <div class="left">
      <?xml version="1.0" encoding="UTF-8"?>
      <svg enable-background="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <style type="text/css">
          .st01 {
            fill: #fff;
          }
        </style>
        <path class="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
      </svg>
    </div>
    <form action="" class="log-in" autocomplete="off">
      <h4>We are <span>NUVA</span></h4>
      <p>Welcome back! Log in to your account to view today's clients:</p>
      <div class="floating-label">
        <input placeholder="Email" type="email" name="email" id="email" autocomplete="off">
        <label for="email">Email:</label>
        <div class="icon">
          <?xml version="1.0" encoding="UTF-8"?>
          <svg enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <style type="text/css">
              .st0 {
                fill: none;
              }
            </style>
            <g transform="translate(0 -952.36)">
              <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
            </g>
            <rect class="st0" width="100" height="100" />
          </svg>

        </div>
      </div>
      <div class="floating-label">
        <input placeholder="Password" type="password" name="password" id="password" autocomplete="off">
        <label for="password">Password:</label>
        <div class="icon">

          <svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <style type="text/css">
              .st0 {
                fill: none;
              }

              .st1 {
                fill: #010101;
              }
            </style>
            <rect class="st0" width="24" height="24" />
            <path class="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
            <path class="st1" d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z" />
            <path class="st1" d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z" />
          </svg>
        </div>

      </div>
      <button type="submit" onClick="return false;">Log in</button>
      <a href="https://codepen.io/elujambio/pen/yjwzGP" class="discrete" target="_blank">Basic version</a>
    </form>
  </div>
    </div>
  )
}

export default Login

/*
<section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" >
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="login__btn nav-item" role="presentation">
                                <Link  to='/register' className="btn__ nav-link" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                aria-controls="pills-login" aria-selected="true">Register</Link>
                            </li>
                        </ul>
                        <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>
                            <div></div>

                            <form class="mx-1 mx-md-4" onSubmit={handleLogin}>


                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="email" onChange={e=>{setEmail(e.target.value)}} id="form3Example3c" class="form-control" />
                                <label class="form-label"  for="form3Example3c">Your Email</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="password" onChange={e=>{setPwd(e.target.value)}} id="form3Example4c" class="form-control" />
                                <label class="form-label"  for="form3Example4c">Password</label>
                                </div>
                            </div>


                            <div class="form-check d-flex justify-content-center mb-5">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" class="btn btn-primary btn-lg">Login</button>
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
*/