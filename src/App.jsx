import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'
import Story from './components/Story'
import CustomOrder from './components/CustomOrder'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-silk-black">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Story />
      <CustomOrder />
      <Footer />
    </div>
  )
}

export default App
