import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Headrer from './Headrer'
import '../styles/login.css'
import { useFormik } from 'formik'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [currentUser, setCurrentUser] = useState()
    const [err, setErr] = useState('')
    const formik = useFormik({
        initialValues:{
            em
        }
    })

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
        if(email=='' || pwd==''){
            setErr('Field Required!')
        }
        try {
            const response = await login(formValues);
            localStorage.setItem('token', response.data.authorisation.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setCurrentUser(response.data.user);
            navigate(redirectPath, { replace: true });

        } catch (error) {
            setErr(error.response.data.message)
        }
    }
    return (
        <div>
            <Headrer></Headrer>
            <section id='login__'>
                <img src='images/about/a6.jpg' />
                <div>
                    <h2>Login</h2>
                    <form class="login" onSubmit={handleLogin}>
                        <input type="text" onChange={e=>{setEmail(e.target.value)}} placeholder="Username"/>
                            <input type="password" onChange={e=>{setPwd(e.target.value)}} placeholder="Password"/>
                                <button type='submit'>Login</button>
                                <Link to='/register' >Register</Link>
                            </form>

                        </div>
                    </section>
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