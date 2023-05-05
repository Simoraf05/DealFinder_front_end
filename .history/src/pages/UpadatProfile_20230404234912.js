import React from 'react'
import Profile from './Profile'
import '../styles/updateP.css'


const UpadatProfile = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [pwd,setPwd] = useState('')
  const [Cpwd,setCpwd] = useState('')
  const [image,setImage] = useState(null)

  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }
  return (
    <div>
        <Profile></Profile>
        <section class="mesAnn__">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                <h1 class="text-dark mb-4">Update Your Profile</h1>
                <hr></hr>
                <form role="form" className='form__updateP'>
              <div class="box-body">
                <div class="form-group">
                  <label>name</label>
                  <input onChange={e=>{setName(e.target.value)}} type="text" class="form-control"  placeholder="Enter name"/>
                </div>

                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control"  placeholder="Enter Phone No"/>
                </div>
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
                <div class="form-group">
                  <label>Email</label>
                  <input type="Email" class="form-control"  placeholder="Enter Email"/>
                </div>

                <div class="form-group">
                  <label>Adresse</label>
                  <input type="Email" class="form-control"  placeholder="Enter Adresse"/>
                </div>
                
                <p class="text-muted text-center">Change Password</p>
                <div class="form-group">
                  <label>Password</label>
                  <input type="Email" class="form-control"  placeholder="Enter Password"/>
                </div>
                
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input type="Email" class="form-control"  placeholder="Renter Password"/>
                </div>
                
               
                
              </div>
  
              <div class="box-footer">
                 
                 
                      <button type="submit" class="btn btn-primary">Update</button>
                   
              </div>
            </form>
                </div>
              </div>
            </div>
        </section>  
    </div>
  )
}

export default UpadatProfile