import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditProduct = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image, setImage] = useState(null);
    const [category,setCategory] = useState('')
    const [categories, setCategories] = useState([]);

    const handelImage=(file)=>{
        setImage(file[0])
      }
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getCategories')
        .then(response => {
          setCategories(response.data.categories)

        });
    }, []);
    const dataArray = Object.entries(categories)
    dataForm = {
        title:title,
        description:description,
        price:price,
        shipping_options:shipping_options,
        categories:categories,
        image:image
    }
    const UpdateProduct=(e)=>{
        e.preventDefault();
        console.log(dataForm)
    }
  return (
        <div>
            <form onSubmit={UpdateProduct}>
            <div className='title__'>
                <h1 class="text-dark mb-4">Edite Your product</h1>
            </div>
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">title</h4>
                </div>
                <div class="col-md-12 pe-5">
                    <input type="text"  class="form-control form-control-lg" onChange={e=>{setTitle(e.target.value)}} />
                </div>
            </div>

            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">description</h4>
                </div>
                <div class="col-md-12 pe-5">
                    <input type="text" onChange={e=>{setDescription(e.target.value)}} class="form-control form-control-lg" />
                </div>
            </div>

            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">price</h4>
                </div>
                <div class="col-md-12 pe-5">
                    <input type="number" onChange={e=>{setPrice(e.target.value)}} class="form-control form-control-lg" />
                </div>
            </div>

            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">Product image</h4>
                </div>
                <div class="col-md-12 pe-5">
                    <input class="form-control form-control-lg" onChange={(e) => handelImage(e.target.files)} id="formFileLg" type="file" />
                    <div class="small text-muted mt-2">Upload your Product Image. Max filesize 2048 px</div>               
                </div>
            </div>

            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">shipping_options</h4>
                </div>
                <div class="col-md-12 pe-5">
                    <input type="text" onChange={e=>{setShipping_option(e.target.value)}} class="form-control form-control-lg" />
                </div>
            </div>

            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-9 ps-5">
                    <h4 class="mb-0">Category</h4>
                </div>
                <div class="col-md-12 pe-5">
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

            <div class="px-5 py-4">
                <button type="submit" class="btn btn-primary btn-lg">Update</button>
            </div>
            </form>
        </div>
  )
}

export default EditProduct