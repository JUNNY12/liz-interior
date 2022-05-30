import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Service from './pages/services/Service'
import Pricing from './pages/pricing/Pricing'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'





const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className='font-serif'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='services' element={<Service />}></Route>
        <Route path='pricing' element={<Pricing />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App