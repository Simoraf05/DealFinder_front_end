import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import '../../../styles/mesAnn.css'
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MesAnn = () => {
  const [myProducts, setMyProducts] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);


  const addProduit = () => {
    navigate('/addProduct')
  }

  useEffect(()=>{
    (async ()=> await Load())()
  },[currentUser])

  async function Load(){
    axios.post('http://127.0.0.1:8000/api/getMyProducts', { seller_id: currentUser.id })
    .then(response => {
      setMyProducts(response.data.Myproducts)
      console.log(myProducts)
    })
    .catch(error => {
      console.log(error)
    });
  }

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
      Loa
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
      <Sidebar></Sidebar>
      <section id='banner__' >
        <h4>#Mes Annonces</h4>
        <h2>Read all case  studlies about our services!</h2>
      </section>
      <div className='container d-flex justify-content-end'><button type="button" onClick={addProduit} class="btn btn-primary">Add Product</button></div>
      <div className='row'>
        <section id='table__' className="col-sm-9">
          <table >
            <thead>
              <tr>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {
                myProducts.map((item) => (
                  <tr>
                    <td><img src={`http://localhost:8000/` + item.image} /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <button class="btn btn-outline-success btn-sm btn__edit" onClick={() => { editeProduct(item.id) }} data-abc="true">Edite</button>
                    </td>
                    <td>
                      <button class="btn btn-outline-danger btn-sm btn__delete" onClick={()=>{deleteProduct(item.id)}} data-abc="true">Delete</button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default MesAnn