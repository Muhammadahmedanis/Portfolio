import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Service from './components/Service'
import About from './components/About'
import Home from './components/Home'
import Loader from './components/Loader'
import Portfolio from './components/Portfolio'
import Wave from './components/wave'

function App() {
  const[loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000)
  }, [])
  return (
    <>
    {
      loader ? ( <Loader /> ) :
      (
        <>
          <Navbar />
          <Home />
          {/* <Wave /> */}
          <About />
          <Service />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )
    }
    </>
  )
}

export default App
