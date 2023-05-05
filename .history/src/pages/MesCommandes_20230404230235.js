import React from 'react'
import Profile from './Profile'

const MesCommandes = () => {
  return (
    <div>
      <Profile></Profile>
      <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
  
                  <h1 class="text-dark mb-4">Add you product</h1>
  
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
                  </form>
  
                </div>
              </div>
            </div>
          </section>  
    </div>
  )
}

export default MesCommandes