import React from 'react'
import Hero  from '../components/Hero.jsx'
import "./Home.css"
import AboutHome from '../components/AboutHome.jsx'
import ServicesHome from '../components/ServicesHome.jsx'

import Blog from '../components/Blog.jsx'
import SocialMediaNav from '../components/SocialMediaNav.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      
      <AboutHome/>
      <ServicesHome/>
      <Blog/>
      <SocialMediaNav/>
    
    </div>
  )
}

export default Home
