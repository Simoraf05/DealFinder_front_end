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
      <section id='banner__' >
        <h4>#Mes Annonces</h4>
        <h2>Read all case  studlies about our services!</h2>
      </section>
      <div className='row'>
        <section id='table__' className="col-sm-9">
          <table >
            <thead>
              <tr>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Offer</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {
                commande.map((item) => (
                  <tr>
                    <td><img src={`http://localhost:8000/` + item.product_image} /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      {
                        item.offer_status === 'pending' || item.offer_status === 'rejected' ?
                        <div class="input-group mb-3">
                        <button class="input-group-text" onClick={() => { updateOfferPrice(item.offer_id) }}>Update</button>
                        <input type='number' onChange={e => { setNewPrice(e.target.value) }} defaultValue={item.offer_price} class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                      :
                      <p>CheckOut</p>
                      }

                    </td>
                    {
                      item.offer_status === 'pending' || item.offer_status === 'rejected' ?
                        <td>The Offer has not yet been accepted</td>
                        :
                        <td><button type="button" onClick={() => { checkO({ name: item.title, price: item.offer_price, product_image: item.product_image, seller_name: item.seller_name, seller_id: item.seller_id, buyer_id: currentUser.id, product_id: item.idP }) }}>CheckOut</button></td>
                    }
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