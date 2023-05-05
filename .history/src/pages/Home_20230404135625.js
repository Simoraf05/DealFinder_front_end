import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'
const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const dataFetch = async () =>{
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts')
      ).json()
      setProducts(products.products)
    }
    dataFetch();
  },[])


  return (
    <div>
      <Navbar></Navbar>
        <div class="bg-info text-dark py-5">
          <div class="container py-5">
            <h1>
              Best products & <br />
              brands in our store
            </h1>
            <p>
              Trendy Products, Factory Prices, Excellent Service
            </p>
            <button type="button" class="btn m-2 btn-outline-light">
              Sell your products now
            </button>
            <button type="button" class="btn btn-light shadow-0 text-dark pt-2 border border-white">
              <span class="pt-1">Purchase now</span>
            </button>
          </div>
        </div>


        <section>
  <div class="container my-5">
    <header class="mb-4">
      <h3>New products</h3>
    </header>

      <div class="row">
        {
          products.map((item)=>(
            <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div class="card w-100 my-2 shadow-2-strong">
              <img src={item.image} class="card-img-top"  />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">$790.50</p>
                <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  <a href="#!" class="btn btn-info shadow-0 me-1">Add to cart</a>
                  <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>
                </div>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  </section>
      </div>
  )
}

export default Home