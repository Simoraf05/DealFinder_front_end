import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AddProduct = () => {

    const [currentUser,setCurrentUser] = useState([])
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image, setImage] = useState([]);
    const [category,setCategory] = useState('')
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    const handelImage=(file)=>{
        setImage(file[0])
    }

    const sellProduct =  (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('shipping_options', shipping_options);
      formData.append('image', image);
      formData.append('category', category);
      formData.append('seller_id', currentUser.id);
  
      try {
        const response = axios.post('http://127.0.0.1:8000/api/addProduct',formData);
        console.log(response)
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } catch (error) {
        toast.warn('error', {
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
    };
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getCategories')
        .then(response => {
          setCategories(response.data.categories)

        });
    }, []);
    const dataArray = Object.entries(categories)
  return (
    <div>
                            <div>
                      <div className='title__'>
                        <h3 class="text-dark mb-4">You don't have any products</h3>
                      </div>
                      <hr></hr>
                          <form onSubmit={sellProduct} enctype="multipart/form-data">
                            
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
        
                                  <input onChange={(e) => handelImage(e.target.files)} class="form-control form-control-lg" id="formFileLg" type="file" />
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
                                  <select onChange={e=>{setCategory(e.target.value)}} class="form-control selectpicker form-control-lg">
                                  <option selected disabled className='bg-light'>Select Category</option>
                                    <hr></hr>
                                    {
                                      dataArray.map(item=>(
                                        <option value={item[1]}>{item[1]}</option>
                                      ))
                                    }
                                  </select>
        
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
  )
}

export default AddProduct