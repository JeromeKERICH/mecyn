import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Media from '../components/Media'
import Speaking from '../components/Speaking'
import Testimonials from '../components/Testimonial'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }
    , [])
  return (
    <div>
      <Hero/>
      <About/>
      <Media/>
      <Speaking/>
      <Testimonials/>
    </div>
  )
}

export default Home
