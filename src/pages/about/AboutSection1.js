import React from 'react'
import Liz from "../../assets/Liz.jpg"

const AboutSection1 = () => {
  return (
    <div>
         <div className='text-center p-10 md:p-28 pt-20' data-aos="zoom-in">
            <h2 className='text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-cyan-900'>
                 Get to know the proprietor
            </h2>

            <p className='text-lg md:text-xl text-gray-900 mb-6'>
                Hello, my name is Liz Berry.I'm a licensed architect
                with a keen interest in domestic interior design. I've been 
                an architect since 2001, and in 2015 I launched my own design firm,
                where I can express my creativity
                in various projects with clients from all over the world.
            </p>

            <div className='object-cover h-auto w-auto
            hover:cursor-pointer hover:-translate-y-1 
            hover:scale-90 duration-300'
            >
                <img src={Liz} className="w-full h-full" />
            </div>
        </div>
    </div>
  )
}

export default AboutSection1