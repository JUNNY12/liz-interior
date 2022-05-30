import React from 'react'
import home1 from "../../assets/home1.jpg"
import home2 from "../../assets/home2.jpg"
import Button from '../../components/buttons/Button'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:order-3 pt-20 gap-4 px-6 md:px-10 lg:px-12'>
      
        <div className='h-96 md:h-130 object-cover w-auto
         hover:cursor-pointer hover:-translate-y-1 
         hover:scale-90 duration-300
        '>
            <img src={home1} className="h-full w-full" />
        </div>

        <div className='flex justify-center items-center text-center flex-col
         hover:cursor-pointer hover:-translate-y-1 
         hover:scale-90 duration-300'
         >
            <h1 className='text-xl md:text-2xl lg:text-4xl leading-tight mb-6 text-gray-900'>
                 WHEN DESIGN INTRODUCES BEAUTY INTO YOUR HOME
            </h1>

            <div>
               <a href='contact'>
                  <Button buttonText="Contact Us" /> 
               </a>
            </div>

        </div>
        
        <div className='h-96 md:h-130 object-cover w-auto
         hover:cursor-pointer hover:-translate-y-1 
         hover:scale-90 duration-300'
         >
            <img src={home2} className="h-full w-full" />
        </div>
    </div>
  )
}

export default Hero