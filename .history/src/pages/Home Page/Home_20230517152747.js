import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Headrer from '../../components/Headrer'
import Footer from '../../components/Footer'
import Slider from 'react-slick'

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/getCategories')
      .then(response => {
        setCategories(response.data.categories)

      });
  }, []);
  const dataArray = Object.entries(categories)


  const [products, setProducts] = useState([])
  const [currentUser, setCurrentUser] = useState([null])

  useEffect(() => {
    const dataFetch = async () => {
      const products = await (
        await fetch('http://127.0.0.1:8000/api/getProducts')
      ).json()
      setProducts(products.products.products)
    }
    dataFetch(products.id);
  }, [])



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, []);


  const [stockStatus, setStockStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/checkStock');
        setStockStatus(response.data.Product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate()

  const productD = (product) => {
    navigate('/productD', { state: product })
  }
  const [numberOfProductsInCtg, setNumberOfProductsInCtg] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const fetchData = () => {
    try {
      if (dataArray.length === 0) {
        return; // Skip fetching data if dataArray is empty
      }

      for (const item of dataArray) {
        const response = axios.post('http://127.0.0.1:8000/api/productsInCategory', { category: item[1] });

        if (response.data.length === 0) {
          continue;
        }

        const newObj = response.data;
        setNumberOfProductsInCtg(prevState => [...prevState, newObj]);
        setIsDataFetched(true)
      }
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(()=>{
    fetchData();

  },[currentUser  )

  if (!isDataFetched) {
    return <div class="preloader">
      <svg class="cart" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
          <g class="cart__track" stroke="hsla(0,10%,10%,0.1)">
            <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
            <circle cx="43" cy="111" r="13" />
            <circle cx="102" cy="111" r="13" />
          </g>
          <g class="cart__lines" stroke="currentColor">
            <polyline class="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" stroke-dasharray="338 338" stroke-dashoffset="-338" />
            <g class="cart__wheel1" transform="rotate(-90,43,111)">
              <circle class="cart__wheel-stroke" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
            </g>
            <g class="cart__wheel2" transform="rotate(90,102,111)">
              <circle class="cart__wheel-stroke" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
            </g>
          </g>
        </g>
      </svg>
      <div class="preloader__text">
        <p class="preloader__msg">Bringing you the goods…</p>
        <p class="preloader__msg preloader__msg--last">This is taking long. Something’s wrong.</p>
      </div>
    </div>;
  }

  return (
    <div>
      <Headrer></Headrer>
      <section id='hero__section'>
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On All Products</h1>
        <Link className='hero__btn' to='/products'>Shop Now</Link>
      </section>

      <section id='featured__' className='section__p1'>
        <div className='fe__box'>
          <img src="images/featured/f1.png" />
          <h6>Free Shipping</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f2.png" />
          <h6>Online Order</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f3.png" />
          <h6>Save Money</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f5.png" />
          <h6>Happy Sell</h6>
        </div>
        <div className='fe__box'>
          <img src="images/featured/f6.png" />
          <h6>h24/7 Support</h6>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <section id='products__1' className='section__p1'>
            <h2>Featured Products</h2>
            <h3>Summer Collection New  Modern Design</h3>
            <div className='pro__container'>
              {
                products.map((item) => (
                  <Link to='/productD' state={item} className='pro'>
                    <img src={`http://localhost:8000/` + item.image} />
                    <div className='des__'>
                      <span>{item.category}</span>
                      <h5>{item.title}</h5>
                      <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                      </div>
                      <h4>Starting from ${item.price}</h4>
                    </div>
                    <Link to='/productD' state={item}><i class="fa-regular fa-circle-info cart"></i></Link>
                  </Link>
                ))
              }
            </div>
          </section>
        </div>
      </section>
      <section id='banner__'>
        <h4>Repair Services</h4>
        <h2>Buy Now With <span>Free Shipping</span>- On All Products</h2>
        <Link className='banner__btn' to='/products'>Explore More</Link>
      </section>

      <section className="categories__featured" id="categories__featured">
        <h2>Featured Categories</h2>
        <div className="featured__content">
          <Slider {...settings}>
            {
              dataArray.map((item) => (
                <div className="row" key={item.category}>
                  <img src="images/hero4.png" />
                  <div className="fea__text">
                    <h4>{item[1]}</h4>
                    <p>
                      {numberOfProductsInCtg.map((item2) => (
                        item[1] === item2[0].category ? item2[0].product_count : 0
                      ))} items
                    </p>
                  </div>
                  <div className="arrow">
                    <a href="#"><img src="icones/arrow-right-line.png" /></a>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </section>
      <section id='sm__banner' className='section__p1'>
        <div className='banner__box'>
          <h4>crazy deals</h4>
          <h2>Free Shpping</h2>
          <span>The best classic dress is on sale at dealfinder</span>
          <button>Learn More</button>
        </div>
        <div className='banner__box banner__box2'>
          <h4>crazy deals</h4>
          <h2>Free Shpping</h2>
          <span>The best classic dress is on sale at dealfinder</span>
          <button>Learn More</button>
        </div>
      </section>
      <section id='banner3__'>
        <div className='banner__box'>
          <h2>SEASONAL SALE</h2>
          <h3>The best classic dress is on sale at dealfinder</h3>
        </div>
        <div className='banner__box banner__box2'>
          <h2>SEASONAL SALE</h2>
          <h3>The best classic dress is on sale at dealfinder</h3>
        </div>
        <div className='banner__box banner__box3'>
          <h2>SEASONAL SALE</h2>
          <h3>The best classic dress is on sale at dealfinder</h3>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default Home

/*                       



            <div className='row'>

            </div>


<i className='fas fa-star'></i>

            {
              products.map((item) => (
                <div className="col-xs-3">
                  <div className="">
                    <div className="">
                      <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                        <div class="inner">
                          <div class="main-img"><img src={`http://localhost:8000/`+item.image} className='product__img'/></div>
                          {

                            stockStatus.map(stock => (
                              stock.product_id === item.id ?
                                <span class="tag2 hot">
                                  Sold
                                </span> :
                                null
                            ))
                          }

                        </div></a>
                        <div class="card-body text-center">
                          <h4 class="card-title">{item.title}</h4>
                          <p class="text-muted">Starting from ${item.price}</p><Link class="btn btn-outline-primary btn-sm" to='/productD' state={item} data-abc="true">View Products</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
*/