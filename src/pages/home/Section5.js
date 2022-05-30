import React from 'react'
import Carousel from '../../components/carousel/Carousel'

const Section5 = () => {
  return (
    <div  className='text-center p-10 md:p-28'>
        <h2  className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900'>
            Beautiful thought from our customers
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Rachael Omolade   
                </h3>

                <p className='italic'>
                    "Inspiration and creativity are at the heart of their work." 
                    The team values design traditions and works hard to keep them alive. 
                    It's a place where people work honestly."
                </p>
            </div>

            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                   Dayo Elizabeth  
                </h3>

                <p className='italic'>
                    " They believe in the power and diversity 
                    of technology to improve their services and 
                    enable them to give the finest outcomes possible.
                    " They prioritize service."
                </p>
            </div>
            
            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Samuel Tife
                </h3>

                <p className='italic'>
                    "It is apparent that they aim to improve customer 
                    service by establishing the perfect balance of technology
                    and creativity to ensure 
                    that every work is completed as efficiently as possible."
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section5