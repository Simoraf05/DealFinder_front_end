import React from 'react'
import Headrer from '../components/Headrer'

const About = () => {
  return (
    <div>
      <Headrer></Headrer>
      <section id='banner__'>
        <h4>Repair Services</h4>
        <h2>Buy Now With <span>Free Shipping</span>- On All Products</h2>
        <Link className='banner__btn' to='/products'>Explore More</Link>
      </section>
    </div>
  )
}

export default About