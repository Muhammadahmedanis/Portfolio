import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Service from './components/Service'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  )
}

export default App
