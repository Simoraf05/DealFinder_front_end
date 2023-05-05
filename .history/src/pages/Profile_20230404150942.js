import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/profile.css'
import axios from 'axios'
const Profile = () => {

  const [currentUser,setCurrentUser] = useState()


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  function sellProduct{
    const data = {
      seller_id : currentUser.id,
    }

    return axios.post('http://127.0.0.1:8000/api/addProduct', data)
    .then(res=>{
      
    })
  }
  return (
    <div>
        <Navbar></Navbar>
        <section class="vh-100">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-xl-9">

                <h1 class="text-dark mb-4">Add you product</h1>

                <div class="card" >
                  <div class="card-body">

                    <div class="row align-items-center pt-4 pb-3">
                      <div class="col-md-3 ps-5">

                        <h6 class="mb-0">title</h6>

                      </div>
                      <div class="col-md-9 pe-5">

                        <input type="text" class="form-control form-control-lg" />

                      </div>
                    </div>

                    <hr class="mx-n3"/>

                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">

                        <h6 class="mb-0">description</h6>

                      </div>
                      <div class="col-md-9 pe-5">

                      <textarea class="form-control" rows="3" placeholder=""></textarea>

                      </div>
                    </div>

                    <hr class="mx-n3"/>

                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">

                        <h6 class="mb-0">price</h6>

                      </div>
                      <div class="col-md-9 pe-5">
                        <input type="number" class="form-control form-control-lg" />
                      </div>
                    </div>

                    <hr class="mx-n3"/>
                    <div class="row align-items-center pt-4 pb-3">
                      <div class="col-md-3 ps-5">

                        <h6 class="mb-0">shipping_options</h6>

                      </div>
                      <div class="col-md-9 pe-5">

                        <input type="text" class="form-control form-control-lg" />

                      </div>
                    </div>

                    <hr class="mx-n3"/>

                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">

                        <h6 class="mb-0">Product image</h6>

                      </div>
                      <div class="col-md-9 pe-5">

                        <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        <div class="small text-muted mt-2">Upload your Product Image. Max file
                          size 2048 px</div>

                      </div>
                    </div>

                    <hr class="mx-n3"/>

                    <div class="px-5 py-4">
                      <button type="submit" class="btn btn-primary btn-lg">Publish</button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        </div>
  )
}

export default Profile