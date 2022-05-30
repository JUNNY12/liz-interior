import { useRef, useState } from "react"
import toggleNav from "../utils/Navigation"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () =>{
        setIsOpen(prevState =>!prevState )
    }


  return (
    <div className="mb-8">
        <nav className="flex flex-wrap justify-between items-center 
        py-4 px-8 fixed top-0 w-full text-cyan-900 bg-slate-50 
        z-10 shadow-slate-500 shadow-md"
        >
            <div className="text-xl md:text-2xl lg:text-5xl"><a href="home">Liz Interior</a></div>

            <div className={isOpen? "block w-full md:flex md:items-center md:w-auto" 
            :"hidden w-full md:flex md:items-center md:w-auto"}>
                <ul className="md:flex md:justify-between text-center text-lg md:text-xl ">
                    <li className="mr-6 my-4 md:my-0 hover:border-b-2 border-gray-700 block">
                        <a href="/">Home</a>
                    </li>
                    <li className="mr-6 my-4 md:my-0 hover:border-b-2 border-gray-700 block">
                        <a href="services">Services</a>
                    </li>
                    <li className="mr-6 my-4 md:my-0 hover:border-b-2 border-gray-700 block">
                        <a href="portfolio">Portfolio</a>
                    </li>
                    <li className="mr-6 my-4 md:my-0 hover:border-b-2 border-gray-700 block">
                        <a href="pricing">Pricing</a>
                    </li>
                    <li className="mr-6 my-4 md:my-0 hover:border-b-2 border-gray-700 block">
                        <a href="about">About Us</a>
                    </li> 
                    <li className="mr-6 my-4 md:my-0 hover:border-b-2 border-gray-700 block">
                        <a href="contact">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="block absolute right-3 top-3 md:hidden bg-gray-300 p-2 font-bold rounded-full hover:cursor-pointer" onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
        </nav>
    </div>
  )
}

export default Navbar