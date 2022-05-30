import React from 'react'
import Button from '../../components/buttons/Button'




const Section4 = () => {
  return (
    <div className='text-center p-10 md:p-28 bg-slate-50'>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900' data-aos="fade-left-up">
            Interested in learning more about us?
        </h2>

        <p className='text-lg md:text-xl text-gray-900 mb-6' data-aos="flip-down">
            We are a small, creative team of architectural engineers
            and interior designers that believe that excellent design 
            begins with quality and cost. IOPSUM LYSIUM, our principal
            designer who has been professionally designing private dwellings
            for over 7years, enthusiastically manages the design studio.
            Our belief is that design has the power to change people's lives.
        </p>

        <div>
           <a href='about'>
              <Button buttonText="Read More"/>
           </a>
        </div>

      

        
    </div>
  )
}

export default Section4