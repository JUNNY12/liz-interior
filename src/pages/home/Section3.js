import React from 'react'
import Button from '../../components/buttons/Button'



const Section3 = () => {
  return (
    <div className='text-center p-10 md:p-28'>
        <h2 className='text-xl md:text-2xl font-bold lg:text-4xl mb-4 text-cyan-900' data-aos="fade-right-down">
            You begin with an idea...
        </h2>

        <p className='text-lg md:text-xl text-gray-900 mb-6' data-aos="flip-up">
            Look through our portfolio to choose your favorite style.
            We'll use your ideas as the foundation of our creativity, 
            guiding us from 
            a little beginning point into the entire design process.
        </p>

        <div>
           <a href='portfolio'>
              <Button buttonText="Take A Look"/>
           </a>
        </div>

        
    </div>
  )
}

export default Section3