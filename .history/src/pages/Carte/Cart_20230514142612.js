import React, { useEffect, useState } from 'react'
import Headrer from '../../components/Headrer'
import axios from 'axios'
import '../../styles/cart.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../../components/Footer'


const Cart = () => {
  const [cart,setCart] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const [priceOffer,setPriceOffer] = useState()
  const [offerAdded,setOfferAdded] = useState(false)


  const handelPriceChange = (e, productId) => {
    const newQuantities = [...priceOffer];
    newQuantities[productId] = e.target.value;
    setPriceOffer(newQuantities);
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(()=>{
    (async ()=> await Load())()
  },[]) asy

  const addOffer=({listing_id:listing_id,seller:seller})=>{
    const data = {
      buyer_id:currentUser.id,
      listing_id:listing_id,
      price:priceOffer
    }

    return axios.post('http://127.0.0.1:8000/api/addOffer',data)
    .then(res=>{

      if(res.data.status === 410){
        toast.error(res.data.message, {
          position: "top-ce nter",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
      else if(res.data.status === 409){
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
      else{
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

  useEffect(()=>{
    (async()=>await Load())()
  },[])


  const deleteFromCart =(id)=>{
    axios.delete(`http://127.0.0.1:8000/api/deleteFromCart/${id}`)
    .then(res=>{
      console.log(res)
      Load()
    })
  }


  return (
    <div>
      <Headrer></Headrer>
      <section id='banner__'>
        <h4>#Cart</h4>
        <h2>Read all case  studlies about our services!</h2>
      </section>
      <section id='cart__' className=''>
        <table width='100%'>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Offer</td>
              <td>Add</td>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item)=>(
                <tr>
                <td><img onClick={()=>{deleteFromCart(item.cart_id)}} className='icone__' src='icones/close-circle-line.png'/></td>
                <td><img src={`http://localhost:8000/` + item.image}/></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td><input type='number' min={item.price} onChange={(e) =>setPriceOffer(e.target.value)} defaultValue={item.price}/></td>
                <td><button onClick={()=>{addOffer({listing_id:item.id,seller:item.email})}} >Add</button></td>

              </tr>
              ))
            }
            
          </tbody>
        </table>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Cart

/*

              <section class="h-100" >
        
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

            {
              cart.length === 0 ?
              <div class="card mb-4">
                <div class="card-body p-4 d-flex flex-row">
                  <div class="form-outline flex-fill">
                    <label class="form-label" htmlFor="form1">No products found in your cart</label>
                  </div>
                  <Link to='/products' class="btn btn-outline-warning btn-lg ms-3">Go to shopping</Link>
                </div>
              </div>
              :
              <>

              <div class="d-flex justify-content-between align-items-center mb-4">
                    <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>

                    <div>
                    <div class="alert alert-info" role="alert">
                      You should give higher price than the original price
                    </div>
                    </div>
                  </div><div>
                      {cart.map((item,index) => (
                        <div class="card rounded-3 mb-4">
                          <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={`http://localhost:8000/` + item.image}
                                  class="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <p class="lead fw-normal mb-2">{item.title}</p>
                                <p><span class="text-muted">Category: </span>{item.category}</p>
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button class="btn btn-link px-2">
                                  <i class="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="0" name="quantity" value={priceOffer[index] || ''} onChange={(e) => handelPriceChange(e, index)}  type="number"
                                  class="form-control form-control-sm" />

                                <button class="btn btn-link px-2">
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">${item.price}</h5>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button onClick={()=>{deleteFromCart(item.cart_id)}} class="btn btn-danger text-white btn-md">delete</button>
                              </div>
                              <div class="col-md-3 col-lg-5 col-xl-1">
                                <button onClick={()=>{addOffer({listing_id:item.id,price:priceOffer[index],seller:item.email})}}type="button" class="btn btn-info text-white btn-md">Send offer</button>
                                /*</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div><div class="card">
    
                        </div>
                      </>
                }
                </div>
              </div>
            </div>
          </section>
              
*/