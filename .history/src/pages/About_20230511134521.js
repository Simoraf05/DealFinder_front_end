import React from 'react'
import Headrer from '../components/Headrer'
import '../styles/about.css'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Headrer></Headrer>
      <section id='banner__'>
        <h4>#readmore</h4>
        <h2>Read all case  studlies about our services!</h2>
      </section>
      <section id='about__us'>
        <img src='images/about/a6.jpg'/>
        <h6></h6>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default About