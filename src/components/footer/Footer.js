import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"



const Footer = () => {

    const now = new Date
    const year = now.getFullYear()

  return (
    <div className='px-10 py-6 bg-cyan-700 text-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

            <div className='text-gray-900'>
                <h4 className='mb-4 text-xl md:text-2xl font-bold'>WHAT WE DO</h4>

                <ul>
                    <li className='mb-4 font-bold hover:underline'><a href='services'>Services</a></li>
                    <li className='mb-4 font-bold hover:underline'><a href='portfolio'>Portfolio</a></li>
                    <li className='mb-4 font-bold hover:underline'><a href='pricing'>Pricing</a></li>
                </ul>
            </div>


            <div className='text-gray-900'>
                <h4 className='mb-4 text-xl md:text-2xl font-bold'>WHO WE ARE</h4>

                <ul>
                    <li className='mb-4 font-bold hover:underline'><a href='about'>About Us</a></li>
                    <li className='mb-4 font-bold hover:underline'><a href='contact'>Contact</a></li>
                </ul>
            </div>


            <div className='text-gray-900'>
                <h4 className='mb-4 text-xl md:text-2xl font-bold'>SUBSCRIBE TO OUR NEWSLETTER</h4>

                <form className='text-left'>
                    <div>
                        <label className='font-bold'>Email</label><br />
                        <input type="email" className='w-full mt-3 outline-0 border-0 h-10 focus:border-2 border-gray-700' />
                    </div>
                </form>
            </div>

            <div>
                <h4 className='mb-4 text-xl md:text-2xl font-bold text-gray-900'>SOCIAL PLATFORM</h4>

                <div className="flex justify-center gap-10 items-center hover:cursor-pointer text-xl md:text-2xl lg:text-4xl text-white">
                    <div className='hover:-translate-y-1 hover:scale-90 duration-300'>
                        <BsFacebook />
                    </div>
                    <div className='hover:-translate-y-1 hover:scale-90 duration-300'>
                        <BsInstagram />
                    </div>
                    <div className='hover:-translate-y-1 hover:scale-90 duration-300'>
                        <BsTwitter/>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-8 text-gray-900 font-bold text-lg'>
            <span className='mr-2'>&copy;</span>
            <span className='mr-2'>{year}</span>
            <span className='mr-2'>Liz Interior,</span>
            <span>All Right Reserved.</span>
        </div>
    </div>
  )
}

export default Footer