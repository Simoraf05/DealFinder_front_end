import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from '../../Profile'
import '../../../styles/mesAnn.css'
import { toast } from 'react-toastify';
import MyProducts from '../../MyProducts';
import AddProduct from '../../AddProduct';





const MesAnn = () => {
    const [myProducts,setMyProducts] = useState([])
    

    /*const [data, setData] = useState({});

    useEffect(() => {
      const storedData = localStorage.getItem('user');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
    }, []);*/

    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);






    useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/getMyProducts',{seller_id:currentUser.id})
        .then(response =>{
          setMyProducts(response.data.Myproducts)
          console.log(myProducts)
        })
        .catch(error => {
          console.log(error)
        });
    }, [currentUser]);





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

                    myProducts.length === 0?
                    <AddProduct></AddProduct>
                    :
                  <div>

                      <MyProducts></MyProducts>
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