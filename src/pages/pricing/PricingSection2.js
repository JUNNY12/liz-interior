import React from 'react'
import pricing1 from "../../assets/pricing1.webp"
import pricing2 from "../../assets/pricing2.webp"
import pricing3 from "../../assets/pricing3.webp"




const PricingSection2 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12'>
         <div className='h-96 md:h-130 object-cover w-auto
          hover:cursor-pointer hover:-translate-y-1 
          hover:scale-90 duration-300'
          data-aos="zoom-in"
         >
            <img src={pricing1} className="h-full w-full"/>
        </div>

        <div className='h-96 md:h-130 object-cover w-auto
         hover:cursor-pointer
         hover:-translate-y-1 hover:scale-90 duration-300'
         data-aos="zoom-in-right"
         >
            <img src={pricing2} className="h-full w-full"/>
        </div>

        <div className='h-96 md:h-130 object-cover w-auto 
        hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="zoom-in-right"
        >
            <img src={pricing3} className="h-full w-full"/>
        </div>
    </div>
  )
}

export default PricingSection2