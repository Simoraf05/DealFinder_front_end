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
          products.map(())
        }
      </div>
    </div>
  </section>
      </div>
  )
}

export default Home