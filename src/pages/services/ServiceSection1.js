import React from 'react'
import Button from '../../components/buttons/Button'

const ServiceSection1 = () => {
  return (
    <div>

      <div className='text-center p-10 md:p-28 pt-20'>
            <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900' data-aos="fade-right-up">
                Complete design services
            </h2>

            <p className='text-lg md:text-xl text-gray-900 mb-6' data-aos="flip-up">
                We collaborate extensively with our customers to understand 
                their specific demands and design their rooms to reflect
                their preferences. We provide the following services: producing a
                one-of-a-kind and unforgettable mood board for your home or place,
                drafting a personalized design proposal, 
                and rendering the design proposal to capture its essence.
            </p>

      </div>

    </div>
  )
}

export default ServiceSection1