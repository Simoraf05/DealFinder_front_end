import React from 'react'
import { useLocation } from 'react-router-dom'
import Headrer from '../../components/Headrer'
import '../../styles/productD.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const ProductD = () => {
    const location = useLocation()
    const [currentUser, setCurrentUser] = useState([null])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user);
    }, []);

    const addToCart = (product_id) => {
        if (!localStorage.getItem('token')) {
            toast.warn('You should login!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            const data = {
                product: product_id,
                buyer: currentUser.id,
            }

            return axios.post('http://127.0.0.1:8000/api/addToCart', data)
                .then(res => {
                    if (res.data.status === 409) {
                        toast.warn(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    }
                    else if (res.data.status === 201) {
                        toast.success(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    }
                })
        }
    }

    return (
        <div>
            <Headrer></Headrer>

            <div class="container mt-5">

                <div class="row  d-flex justify-content-center">

                    <div class="col-md-12">

                        <div class="headings d-flex justify-content-between align-items-center mb-3">
                            <h5>comments(6)</h5>
                        </div>
                        <div class="card p-3">
                            <div class="d-flex justify-content-between align-items-center">

                                <div class="user d-flex flex-row align-items-center">
                                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2" />
                                    <span><small class="font-weight-bold text-primary">james_olesenn</small> <small class="font-weight-bold">Hmm, This poster looks cool</small></span>
                                </div>
                                <small>2 days ago</small>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductD