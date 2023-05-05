import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import '../styles/mesAnn.css'
const MesAnn = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image,setImage] = useState(null)
    const [category,setCategory] = useState('')
    const [myProducts,setMyProducts] = useState([])
    const handleImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        setImage({
          image: URL.createObjectURL(event.target.files[0])
        });
      }
    }
  
    

    const [data, setData] = useState({});

    useEffect(() => {
      const storedData = localStorage.getItem('user');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
    }, []);


    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);
    console.log(currentUser.id)
    function sellProduct (e){
      e.preventDefault()
      const data = {
        title:title,
        description:description,
        price:price,
        shipping_options:shipping_options,
        image:image.image,
        category:category,
        seller_id : currentUser.id,
      }
  
      return axios.post('http://127.0.0.1:8000/api/addProduct', data)
      .then(res=>{
        console.log(res)
      })
      
    }

    useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/getMyProducts',{seller_id:currentUser.id})
        .then(response =>{
         
          setMyProducts(response)
          console.log('myProducts',myProducts)
        })
        .catch(error => {
          console.log(error)
        });
    }, []);



    return (
      <div>
        <Profile></Profile>
          <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                <hr></hr>

                  <div className='title__'>
                    <h1 class="text-dark mb-4">Mes annonces</h1>
                  </div>
                  <hr></hr>

                  {

                    !myProducts ?
                    <div>

                      <form onSubmit={sellProduct}>
                        
                      <div class="card" >
                        <div class="card-body">
    
                          <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md-3 ps-5">
    
                              <h6 class="mb-0">title</h6>
    
                            </div>
                            <div class="col-md-9 pe-5">
    
                              <input type="text" onChange={e=>{setTitle(e.target.value)}} class="form-control form-control-lg" />
    
                            </div>
                          </div>
    
                          <hr class="mx-n3"/>
    
                          <div class="row align-items-center py-3">
                            <div class="col-md-3 ps-5">
    
                              <h6 class="mb-0">description</h6>
    
                            </div>
                            <div class="col-md-9 pe-5">
    
                            <textarea class="form-control" onChange={e=>{setDescription(e.target.value)}} rows="3" placeholder=""></textarea>
    
                            </div>
                          </div>
    
                          <hr class="mx-n3"/>
    
                          <div class="row align-items-center py-3">
                            <div class="col-md-3 ps-5">
    
                              <h6 class="mb-0">price</h6>
    
                            </div>
                            <div class="col-md-9 pe-5">
                              <input type="number" onChange={e=>{setPrice(e.target.value)}} class="form-control form-control-lg" />
                            </div>
                          </div>
    
                          <hr class="mx-n3"/>
                          <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md-3 ps-5">
    
                              <h6 class="mb-0">shipping_options</h6>
    
                            </div>
                            <div class="col-md-9 pe-5">
    
                              <input type="text" onChange={e=>{setShipping_option(e.target.value)}} class="form-control form-control-lg" />
    
                            </div>
                          </div>
    
                          <hr class="mx-n3"/>
    
                          <div class="row align-items-center py-3">
                            <div class="col-md-3 ps-5">
    
                              <h6 class="mb-0">Product image</h6>
    
                            </div>
                            <div class="col-md-9 pe-5">
    
                              <input onChange={handleImageChange} class="form-control form-control-lg" id="formFileLg" type="file" />
                              <div class="small text-muted mt-2">Upload your Product Image. Max file
                                size 2048 px</div>
    
                            </div>
                          </div>
    
                          <hr class="mx-n3"/>
                          <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md-3 ps-5">
    
                              <h6 class="mb-0">Category</h6>
    
                            </div>
                            <div class="col-md-9 pe-5">
    
                              <input type="text" onChange={e=>{setCategory(e.target.value)}} class="form-control form-control-lg" />
    
                            </div>
                          </div>
    
                          <hr class="mx-n3"/>
    
                          <div class="px-5 py-4">
                            <button type="submit" class="btn btn-primary btn-lg">Publish</button>
                          </div>
    
                        </div>
                      </div>
                    </form></div> :
                    <div>
                      <h3>You didn't sell any product</h3>
                      <hr></hr>
                      {
                        myProducts.map(item=>(
                          <section>
                          <div class="container py-5">
                            <div class="row justify-content-center">
                              <div class="col-md-8 col-lg-6 col-xl-4">
                                <div class="card" >
                                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                                     class="img-fluid"
                                      alt="Laptop" />
                                    <a href="#!">
                                      <div class="mask"></div>
                                    </a>
                                  </div>
                                  <div class="card-body pb-0">
                                    <div class="d-flex justify-content-between">
                                      <div>
                                        <p><a href="#!" class="text-dark">Dell Xtreme 270</a></p>
                                        <p class="small text-muted">Laptops</p>
                                      </div>
                                      <div>
                                        <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                        </div>
                                        <p class="small text-muted">Rated 4.0/5</p>
                                      </div>
                                    </div>
                                  </div>
                                  <hr class="my-0" />
                                  <div class="card-body pb-0">
                                    <div class="d-flex justify-content-between">
                                      <p><a href="#!" class="text-dark">$3,999</a></p>
                                      <p class="text-dark">#### 8787</p>
                                    </div>
                                    <p class="small text-muted">VISA Platinum</p>
                                  </div>
                                  <hr class="my-0" />
                                  <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                                      <a href="#!" class="text-dark fw-bold">Cancel</a>
                                      <button type="button" class="btn btn-primary">Buy now</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        ))
                      }
                    </div>
                  }
  
                </div>
              </div>
            </div>
          </section>
          </div>
    )
  }

export default MesAnn