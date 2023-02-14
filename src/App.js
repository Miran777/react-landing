import Navbar from './scenes/Navbar'
import DotGroup from  './scenes/DotGroup'
import Landing from './scenes/Landing'
import LineGradient from './components/LineGradient'
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Testimonials from "./scenes/Testimonials"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'


function App() {
const [selectedPage, setSelectedPage] = useState('home')
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
          <Projects />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
          <Testimonials />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
          <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
