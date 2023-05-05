import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/products.css'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const dataFetch = async (product_id) =>{
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts',product_id)
      ).json()
      setProducts(products.products)
    }
    dataFetch(products.id);
  },[])
  return (
    <div>
        <Navbar></Navbar>
        {
          products.map((item)=>(
            <div class="container py-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                          <img src={`http://localhost:8000/`+item.image}
                            class="w-50" />
                          <a href="#!">
                            <div class="hover-overlay">
                              <div class="mask" ></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5>Quant trident shirts</h5>
                        <div class="d-flex flex-row">
                          </div>
                          <div  class="mt-1 text-muted small">
                              <p class="text-truncate mb-4 mb-md-0">{item.description}</p>
                          </div>
                          
                          <div class="text-danger mb-1 me-2">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                            <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div id='tooltip_product' class="d-flex flex-row align-items-center mb-1">
                                <h4 class="mb-1 me-1">${item.price}</h4>
                                <div id='seller_info'>
                                <p id='seller_info_name'><span class="text-white">name: </span>{item.name}</p>
                                <p id='seller_info_email'><span class="text-white">email: </span>{item.email}</p>
                              </div>
                              <img src={`http://localhost:8000/`+item.profile_picture} id='product_image' class="rounded-circle"/>
                              </div>
                              <h6 class="text-success">{item.shipping_options}</h6>
                              <div class="d-flex flex-column mt-4">
                                <button class="btn btn-primary btn-sm" type="button">Details</button>
                                <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                                  Add to wishlist
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
              </div>
          </div>
        </div>
          ))
        }
    </div>
  
  )
}

export default Products