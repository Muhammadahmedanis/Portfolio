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
import { FaHandPointUp } from "react-icons/fa";

function App() {
  const[loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000)
  }, [])
  return (
    <>
    {
      loader ? ( <Loader /> ) :
      (
        <>
          <Navbar />
          <Home />
          <About />
          <Service />
          <Portfolio />
          <Contact />
          <Footer />
          <a href="#home" className='fixed right-5 bottom-10 bg-white text-[#9893f2] border-none rounded p-2'>
            <FaHandPointUp size={30}/>
          </a>
        </>
      )
    }
    </>
  )
}

export default App
