import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import EditProduct from './EditProduct';

const MyProducts = () => {

  const [myProducts, setMyProducts] = useState([])
  const [currentUser, setCurrentUser] = useState([])


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getMyProducts', { seller_id: currentUser.id })
      .then(response => {
        setMyProducts(response.data.Myproducts)
        console.log(myProducts)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);

  const deleteProduct = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/deleteProduct/${id}`)
      .then(res => {
        console.log(res)
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
      .catch(err => console.log(err))
  }

  const editeProduct = () => {
    toast(<EditProduct></EditProduct>
      , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: 1,
        theme: "light",
      });
  }
  return (
    <div>

      <div class="">
        {
          myProducts.map((item) => (
            <div class="col-xs-4">
              <div>
                <div>
                <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                      <div class="inner">
                        <div class="main-img"><img src={`http://localhost:8000/`+item.image} alt="Category" /></div>
                      </div></a>
                      <div class="card-body text-center">
                        <h4 class="card-title">{item.title}</h4>
                        <p class="text-muted">Starting from ${item.price}</p>
                        <div className='col-2'>
                        <button class="btn btn-outline-success btn-sm" onClick={()=>{editeProduct(item.id)}} data-abc="true">Edite</button>
                        </div>
                        <div></
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyProducts