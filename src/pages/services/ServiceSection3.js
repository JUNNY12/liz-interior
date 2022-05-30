import React from 'react'
import Button from '../../components/buttons/Button'







const ServiceSection3 = () => {
  return (

    <div className='text-center p-10 md:p-28'>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900' data-aos="flip-down">
            The design process  
        </h2>

        <p className='text-lg md:text-xl text-gray-900 mb-6' data-aos="flip-up">
            Set up a meeting with us to discuss the specifics of your
            project so that we may assist you in discovering what your
            dream house looks like. As a first step, we'll conduct extensive 
            study to determine the greatest design for your space, budget, and
            specific requirements. Following that, we'll create a mood board to 
            assist you envision our thoughts. We'll start working on a series of
            design suggestions once we have your permission on our vision. Finally,
            your chosen proposal will be beautifully recreated in our programs, 
            providing you with a virtual,
            but extremely realistic view of your newly-designed house.
        </p>

        <div>
           <a href='pricing'>
              <Button buttonText="See Our Pricing"/>
           </a>
        </div>

    </div>
  )
}

export default ServiceSection3