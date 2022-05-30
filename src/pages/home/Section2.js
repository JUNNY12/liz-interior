import React from 'react'
import home4 from "../../assets/home4.jpg"
import home5 from "../../assets/home5.jpg"
import home6 from "../../assets/home6.jpg"
import home7 from "../../assets/home7.webp"

const Section2 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-12 gap-4'>
        <div className='h-60 md:h-96 lg:h-130 object-cover w-auto
         hover:cursor-pointer hover:-translate-y-1 
         hover:scale-90 duration-300'
         data-aos="flip-down"
        >
            <img src={home4} className="h-full w-full"/>
        </div>
        
        <div className=' grid grid-cols-1 gap-8'>
            <div className='h-60 md:h-44 lg:h-60 w-auto
             hover:cursor-pointer hover:-translate-y-1 
             hover:scale-90 duration-300'
             data-aos="flip-right"
            >
                <img src={home5} className="h-full w-full"/>
            </div>

            <div className='h-60 md:h-44 lg:h-60 w-auto
             hover:cursor-pointer hover:-translate-y-1 
             hover:scale-90 duration-300'
             data-aos="flip-left"
            >
                <img src={home7} className="h-full w-full"/>
            </div>
        </div>

        <div className='h-60 md:h-96 lg:h-130 object-cover w-auto
        hover:cursor-pointer hover:-translate-y-1 
        hover:scale-90 duration-300'
        data-aos="flip-up"
        >
            <img src={home6} className="h-full w-full" />
        </div>
    </div>
  )
}

export default Section2