import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import axios from 'axios'

const MesOff = () => {
    const [offer,setOffer] = useState([])
    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getMyOffers',{seller_id:currentUser.id})
          .then(response =>{
            setOffer(response.data.offer)
          })
          .catch(error => {
            console.log(error)
          });
      }, [currentUser]);
      console.log(offer)

  return (
    <div>
        <Profile></Profile>
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    {
                    !offer.offer_id == null ?
                    <p>No offers found</p>
                    :
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
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button class="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                  <i class="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="0" name="quantity" defaultValue={item.price} type="number"
                                  class="form-control form-control-sm" />

                                <button class="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">${item.price}</h5>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></button>
                              </div>
                              <div class="col-md-3 col-lg-5 col-xl-1">
                                <button type="button" class="btn btn-info text-white btn-md">Send offer</button>
                              </div>

                            </div>
                          </div>
                        </div>
                    ))
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