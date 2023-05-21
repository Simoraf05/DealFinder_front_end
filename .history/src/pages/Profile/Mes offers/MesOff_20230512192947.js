import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import '../../../styles/myOff.css'
import axios from 'axios'
import { toast } from 'react-toastify'



const MesOff = () => {
    const [offer,setOffer] = useState([])
    const [currentUser,setCurrentUser] = useState([])
    const [status,setStatus] = useState('')

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


    const updateOfferStatus=(offer_id,id)=>{

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
      })

      if(status === 'accepted'){
        axios.put(`http://127.0.0.1:8000/api/updatingProductStatus/${id}`,{status:1})
        .then(res=>{
          console.log(res.data.offer.statusUpdated)
        })
      }

    }

  return (
    <div>
        <Sidebar></Sidebar>
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