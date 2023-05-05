import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import '../styles/myOff.css'
import axios from 'axios'
import { toast } from 'react-toastify'



const MesOff = () => {
    const [offer,setOffer] = useState([])
    const [currentUser,setCurrentUser] = useState([])
    const [status,setStatus] = useState('')
    const [statusUpdated,setStatusUpdated]=useState(0)

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getMyOffers',{seller_id:currentUser.id})
          .then(response =>{
            setOffer(response.data.offer)
            console.log(offer)
          })
          .catch(error => {
            console.log(error)
          });
    }, [currentUser]);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getStatusUpdated',{offers_id:offer.offer_id})
        .then(response =>{
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        });
  }, [currentUser]);

    const updateOfferStatus=(offer_id)=>{
      axios.put(`http://127.0.0.1:8000/api/updatingOfferStatus/${offer_id}`,{status:status})
      .then(res=>{
        console.log(res.data.offer.statusUpdated)
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
        setStatusUpdated(res.data.offer.statusUpdated)
      })

    }
  return (
    <div>
        <Profile></Profile>
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    {
                    offer.offer_id === null ?
                    <div class="alert alert-info" role="alert">
                        NO OFFERS FOUNDS.
                    </div>                    
                  :
                    <div>
                      <section class="content-header">
                      <h1>
                        My offers
                      </h1>
                      </section>
                      <div>
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
                              <div class="col-md-9">
                                  <select onChange={e=>{setStatus(e.target.value)}}  class="form-control selectpicker form-control-lg">
                                    <option selected disabled className='bg-light'>Status</option>
                                    <hr></hr>
                                    <option value='accepted'>Accepter</option>
                                    <option value='pending'>Pending</option>
                                    <option value='rejected'>rejected</option>
                                  </select>
                                  <button type="submit" onClick={()=>{updateOfferStatus(item.offer_id)}} class="btn btn-primary btn-lg">Publish</button>
                                </div> 
                              </div>
                            </div>
                          </div>
                        </div>
                        ))
                        }
                      </div>
                    </div>

                    } 
                </div>
              </div>
            </div>
          </section> 
    </div>
  )
}

export default MesOff

/*


*/