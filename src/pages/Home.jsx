import React from 'react'
import Hero from '../components/hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffer/>
        <Testimonial/>
        <NewsLetter/>
        {/* <Footer/> */}
    </>
  )
}

export default Home