import React from 'react'
import service1 from "../../assets/service1.webp"
import service2 from "../../assets/service2.jpg"
import service3 from "../../assets/service3.jpg"
import service4 from "../../assets/service4.webp"







const ServiceSection2 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-12'>
         <div className=' h-96 sm:h-130 object-cover w-auto 
          hover:cursor-pointer hover:-translate-y-1 
          hover:scale-90 duration-300'
          data-aos="flip-right"
         >
            <img src={service1} className="h-full w-full"/>
        </div>

        <div className='h-96 sm:h-130 object-cover w-auto
         hover:cursor-pointer hover:-translate-y-1 
         hover:scale-90 duration-300'
         data-aos="flip-down"
        >
            <img src={service2} className="h-full w-full"/>
        </div>

        <div className='h-96 sm:h-130 object-cover w-auto
         hover:cursor-pointer hover:-translate-y-1 
         hover:scale-90 duration-300'
         data-aos="flip-left"
        >
            <img src={service3} className="h-full w-full"/>
        </div>

        <div className='h-96 sm:h-130 w-auto hover:cursor-pointer 
        hover:-translate-y-1 hover:scale-90 duration-300
        '
        data-aos="flip-up"
        >
            <img src={service4} className="w-full h-full"/>
        </div>

    </div>
  )
}

export default ServiceSection2