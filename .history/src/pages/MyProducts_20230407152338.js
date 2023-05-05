import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const MyProducts = () => {
    
    const [myProducts,setMyProducts] = useState([])
    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getMyProducts',{seller_id:currentUser.id})
          .then(response =>{
            setMyProducts(response.data.Myproducts)
            console.log(myProducts)
          })
          .catch(error => {
            console.log(error)
          });
      }, [currentUser]);
  
      const deleteProduct=(id)=>{
        axios.delete(`http://127.0.0.1:8000/api/deleteProduct/${id}`)
        .then(res=>{
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
        .catch(err=>console.log(err))
      }

      const editeProduct=()=>{
        toast.info(
        
        <div>
            <div className='title__'>
                <h1 class="text-dark mb-4">Edite Your product</h1>
            </div>
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                    <h6 class="mb-0">title</h6>
                </div>
                <div class="col-md-9 pe-5">
                    <input type="text"  class="form-control form-control-lg" />
                </div>
            </div>
        </div>
        
        
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

        <div class="row">
                      {
                        myProducts.map((item)=>(
                          <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                          <div class="card w-100 my-2 shadow-2-strong">
                            <img src={`http://localhost:8000/`+item.image} class="card-img-top"  />
                            <div class="card-body d-flex flex-column">
                              <div className='row'>
                                <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Title :</h5>
                                <p className='col-4'>{item.title}</p>
                              </div>
                              <div className='row'>
                                <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Price :</h5>
                                <p className='col-4'>${item.price}</p>
                              </div>
                              <div className='row'>
                                <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>description :</h5>
                                <p className='col-4'>{item.description}</p>
                              </div>
                              <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                                  <button type="button" onClick={()=>{deleteProduct(item.id)}} class="btn btn-danger">Delete</button>
                                  <button type="button" onClick={editeProduct} class="btn btn-success">Edite</button>
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