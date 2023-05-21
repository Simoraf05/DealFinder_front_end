import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import '../../../styles/myOff.css'
import axios from 'axios'
import { toast } from 'react-toastify'



const MesOff = () => {
  const [offer, setOffer] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getMyOffers', { seller_id: currentUser.id })
      .then(response => {
        setOffer(response.data.offer)
        console.log(offer)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);

  useEffect(()=>{
    (async ()=> await Load())()
  },[currentUser])
  
  const updateOfferStatus = (offer_id, id) => {

    axios.put(`http://127.0.0.1:8000/api/updatingOfferStatus/${offer_id}`, { status: status })
      .then(res => {
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
      })

    if (status === 'accepted') {
      axios.put(`http://127.0.0.1:8000/api/updatingProductStatus/${id}`, { status: 1 })
        .then(res => {
          console.log(res.data.offer.statusUpdated)
        })
    }
    console.log(offer_id)

  }
  console.log("offer",offer)

  return (
    <div>
      <Sidebar></Sidebar>
      <section id='banner__' >
        <h4>#Mes Offers</h4>
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
                offer.map((item) => (
                  <tr>
                    <td><img src={`http://localhost:8000/` + item.product_image} /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>${item.offer_price}</td>
                    <td>
                      {
                        item.offer_status === 'accepted' || item.offer_status === 'rejected'?
                        <></>
                        :
                        <button type="submit" onClick={()=>{updateOfferStatus(item.offer_id,item.idP)}} class="btn btn-secondary">Update</button>
                      }
                    </td>
                    <td>
                      {
                         item.offer_status === 'accepted' || item.offer_status === 'rejected'?
                         <>{item.offer_status}</>
                         :
                         <select onChange={e=>{setStatus(e.target.value)}} class="form-control selectpicker form-control-lg">
                         <option selected disabled className='bg-light'>Status</option>
                         <hr></hr>
                         <option value='accepted'>Accepter</option>
                         <option value='pending'>Pending</option>
                         <option value='rejected'>Rejected</option>
                       </select>
                      }
                    </td>
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

export default MesOff

/*
                        {
                        offer.map(item=>(
                                                  
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
                                    <p id='buyer_info_name'><span class="text-white">name: </span>{item.buyer_name}</p>
                                    <p id='buyer_info_email'><span class="text-white">email: </span>{item.buyer_email}</p>
                                </div>

                                <img src={`http://localhost:8000/`+item.profile_picture}class="rounded-circle" height="22" alt="" loading="lazy" />
                              </div>    
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">${item.offer_price}</h5>
                              </div>
                              <div id='validat__btn' class="col-md-2 col-lg-1 col-xl-1 text-end">
                                  {
                                   
                                    <p>{item.offer_status}</p>
                                    :
                                    <div>

                                    <select onChange={e=>{setStatus(e.target.value)}}  class="form-control selectpicker form-control-lg">
                                    <option selected disabled className='bg-light'>Status</option>
                                    <hr></hr>
                                    <option value='accepted'>Accepter</option>
                                    <option value='pending'>Pending</option>
                                    <option value='rejected'>Rejected</option>
                                  </select>
                                  <button type="submit" onClick={()=>{updateOfferStatus(item.offer_id,item.idP)}} class="btn btn-primary btn-lg">Publish</button>
                                  </div> 

                                  }
                              </div>
                            </div>
                          </div>
                        </div>
                        ))
                        }

*/