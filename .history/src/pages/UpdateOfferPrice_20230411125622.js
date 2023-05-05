import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const UpdateOfferPrice = (props) => {
    const [newPrice,setNewPrice] = useState(0)
    const [commande,setCommande] = useState([])
    const [currentUser,setCurrentUser] = useState([])


    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getCommande',{buyer_id:currentUser.id})
          .then(response =>{
            setCommande(response.data.mesC)
            console.log(props.state)
          })
          .catch(error => {
            console.log(error)
          });
    }, [currentUser]);


    const updateOfferPrice=(e)=>{
        e.preventDefault()
      
        try{
          const response = A(`http://127.0.0.1:8000/api/updatingOfferPrice/${props.state}`, {
            method: 'POST',
            body: newPrice
          });

          const data = await response.json();
          console.log(data)

          toast.success(data.message, {
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
        catch(err){
          console.log(err)
        }
      
      }
  return (
    <div>
        <form onSubmit={updateOfferPrice}>
        <div className='title__'>
                <h1 class="text-dark mb-4">Upgrade the price</h1>
            </div>
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">price</h4>
                </div>
                <div class="col-md-12 pe-5">
                    <input type="number"  class="form-control form-control-lg" onChange={e=>{setNewPrice(e.target.value)}} />
                </div>
                <div class="px-5 py-4">
                <button type="submit" class="btn btn-primary btn-lg">Update</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default UpdateOfferPrice