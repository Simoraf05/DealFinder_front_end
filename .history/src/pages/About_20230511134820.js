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
        <div>
          <h2>Who We Are</h2>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
            sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, 
            et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
          </p>
          <abbr title=''>
            L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux.
          </abbr>
          <br></br>
          <marq
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default About