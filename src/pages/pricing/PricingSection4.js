import React from 'react'
import Button from '../../components/buttons/Button'










const PricingSection4 = () => {
  return (
    <div>
        <div className='text-center p-10 md:p-28'>
            <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900' data-aos="fade-right-down">
                 Request a quote from us.
            </h2>

            <p className='text-lg md:text-xl text-gray-900 mb-6' data-aos="fade-left-up">
                We would gladly assist you with any information you require.
                Send us your ideas and we'll offer you additional information
                about our services or provide pricing for 
                any unusual requests that aren't covered by our current plans.
            </p>

            <div>
               <a href='contact'>
                  <Button buttonText="Contact Us"/>
               </a>
            </div>
      </div>
    </div>
  )
}

export default PricingSection4