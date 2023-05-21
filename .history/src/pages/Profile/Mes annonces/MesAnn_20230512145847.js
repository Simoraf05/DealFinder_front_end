import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import '../../../styles/mesAnn.css'
import MyProducts from './MyProducts';
import AddProduct from './AddProduct';
import { Link } from 'react-router-dom';

const MesAnn = () => {
  const [myProducts, setMyProducts] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getMyProducts', { seller_id: currentUser.id })
      .then(response => {
        setMyProducts(response.data.Myproducts)
        console.log(myProducts)
      })
      .catch(error => {
        console.log(error)
      });
  }, [currentUser]);
  const addProduit=()=>{
    <AddProduct></AddProduct>
  }

  return (
    <div>
      <Sidebar></Sidebar>
      <section class="mesAnn__">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
              <hr></hr>

              <div className='col-6'>
                <h1 class="text-dark mb-4">Mes annonces</h1>
              </div>
              <hr></hr>
              <div>
                <Link to='/addProduct' type="button" class="btn btn-primary float-end" >Ajouter un produit</Link>
              </div>
              <MyProducts></MyProducts>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MesAnn