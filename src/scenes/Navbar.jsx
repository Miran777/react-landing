import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import menuIcon from '../assets/menu-icon.svg'
import closeIcon from '../assets/close-icon.svg'

const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
            hover:text-yellow transition duration-500`} 
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >    
            {page}
        </AnchorLink>
    )
}

export const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
    const navbarBackground = isTopOfPage ? "" : "bg-red"
    
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 `}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair text-3xl font-bold'>JE</h4>

            {isAboveSmallScreens ? (
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    >Home</Link>
                    <Link
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    >Skills</Link>
                    <Link
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    >Projects</Link>
                    <Link
                        page="Testimonials"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    >Testimonials</Link>
                    <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    >Contact</Link>
                </div>
            ) : (<button
                    className='rounded-full bg-red p-2'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                <img src={menuIcon} alt="menu-icon" />
            </button>)}

            {!isAboveSmallScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src={closeIcon} alt="close-icon" />
                        </button>
                    </div>


                    <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        >Home</Link>
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        >Skills</Link>
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        >Projects</Link>
                        <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        >Testimonials</Link>
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        >Contact</Link>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar