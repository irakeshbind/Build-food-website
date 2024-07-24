import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Hero from './Hero'
import OurDishes from './OurDishes'
import Middle from './Middle'
import PremiumMenu from './PremiumMenu'
import CustomerReview from './CustomerReview'
import Footer from './Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <OurDishes name="Our Dishes"/>
    <Middle name="Why choose us?"/>
    
    <PremiumMenu name="Premium's Menu"/>
    <CustomerReview name="Customer's Review"/>
    <Footer/>
    </>
  )
}

export default App