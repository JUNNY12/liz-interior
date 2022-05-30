import React from 'react'
import Button from '../../components/buttons/Button'





const Section1  = () => {
  return (
    <div className='text-center p-10 md:p-28'>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900' data-aos="zoom-in">
             We specialize in interior design.
        </h2>

        <p className='text-lg md:text-xl text-gray-900 mb-6' data-aos="zoom-in">
            We are a Lagos-based interior design firm. We are enthusiastic
            about what we do and will work relentlessly to get the finest possible 
            outcomes for you. From the color palette
            to the upholstery and everything in between,
            we design every aspect of your home design project.
        </p>

        <div>
          <a href='services'>
            <Button buttonText="See Our Services"/>
          </a>
        </div>
    </div>
  )
}

export default Section1