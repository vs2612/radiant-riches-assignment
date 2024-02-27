import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Header from './components/Header'
import Cards from './components/Cards'
import RelatedDeals from './components/RelatedDeals'
import Signup from './components/Signup'
import Footer from './components/Footer'
const App = () => {

  return (
    <>
      <div className='mainComp'>
        <Navbar />
        <Header />
        <Cards />
        <RelatedDeals />
        <Signup />
        <Footer />
      </div>
    </>
  )
}

export default App