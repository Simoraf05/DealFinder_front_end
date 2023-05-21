import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import UpdateOfferPrice from './UpdateOfferPrice'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import '../../../styles/mesC.css'
const MesCommandes = () => {
  const [commande, setCommande] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getCommande', { buyer_id: currentUser.id })
      .then(response => {
        setCommande(response.data.mesC)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);
  console.log(commande)


  const checkO = ({ name: name, price: offer_price, product_image: product_image, seller_name: seller_name, seller_id: seller_id, buyer_id: buyer_id, product_id: product_id }) => {
    const data = {
      name: name,
      price: offer_price,
      product_image: product_image,
      seller_name: seller_name,
      seller_id: seller_id,
      buyer_id: buyer_id,
      product_id: product_id
    }
    navigate('/checkO', { state: data })
  }
  const [newPrice, setNewPrice] = useState()

  const updateOfferPrice = (offer_id) => {
    //e.preventDefault()

    try {
      const response = axios.post(`http://127.0.0.1:8000/api/updatingOfferPrice/${offer_id}`, { price: newPrice });
      toast.success('price updated successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    catch (err) {
      console.log(err)
    }

  }
  return (
    <div>
      <Sidebar></Sidebar>
      <section id='banner__' >
        <h4>#Cart</h4>
        <h2>Read all case  studlies about our services!</h2>
      </section>
      <div className='row'>
        <section id='table__' className="col-sm-9">
          <table >
            <thead>
              <tr>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Offer</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {
                commande.map((item) => (
                  <tr>
                    <td><img src={`http://localhost:8000/` + item.product_image} /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      {
                        item.offer_status === 'pending' || item.offer_status === 'rejected' ?
                        <div class="input-group mb-3">
                        <button class="input-group-text" onClick={() => { updateOfferPrice(item.offer_id) }}>Update</button>
                        <input type='number' onChange={e => { setNewPrice(e.target.value) }} defaultValue={item.offer_price} class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                      :
                      <p>CheckOut</p>
                      }

                    </td>
                    {
                      item.offer_status === 'pending' || item.offer_status === 'rejected' ?
                        <td>The Offer has not yet been accepted</td>
                        :
                        <td><button type="button" onClick={() => { checkO({ name: item.title, price: item.offer_price, product_image: item.product_image, seller_name: item.seller_name, seller_id: item.seller_id, buyer_id: currentUser.id, product_id: item.idP }) }}>CheckOut</button></td>
                    }
                  </tr>
                ))
              }

            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default MesCommandes

/*
                        {
                        commande.map(item=>(
                                                  
                          <div class="card rounded-3 mb-4">
                          <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={`http://localhost:8000/` + item.product_image}
                                  class="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <p><span class="text-muted">title: </span>{item.title}</p>
                                <p><span class="text-muted">price: </span>{item.price}</p>
                              </div>
                              <div id='tooltip_offer' class="col-md-3 col-lg-3 col-xl-3">
                                <div id='buyer_info'>
                                    <p id='buyer_info_name'><span class="text-white">name: </span>{item.seller_name}</p>
                                    <p id='buyer_info_email'><span class="text-white">email: </span>{item.seller_email}</p>
                                </div>

                                <img src={`http://localhost:8000/`+item.profile_picture}class="rounded-circle" height="22" alt="" loading="lazy" />
                              </div>    
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                {
                                    item.offer_status === 'pending' || item.offer_status === 'rejected' ?
                                    <button type="button" onClick={()=>{updateOfferPrice(item.offer_id)}} class="btn btn-success">update offer price</button>
                                    :
                                    <button type="button" onClick={()=>{checkO({name:item.title,price : item.offer_price,product_image : item.product_image,seller_name:item.seller_name,seller_id:item.seller_id,buyer_id:currentUser.id,product_id:item.idP})}} class="btn btn-primary">CheckOut</button>
                                }
                                <h5 class="mb-0">{item.offer_status}</h5>
                                <h5 class="mb-0">{item.offer_price}</h5>
                              </div>
                              
                              
                            </div>
                          </div>
                        </div>
                        ))
                        }
*/